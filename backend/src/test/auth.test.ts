import app from '../app';
import { connectDatabase } from '../config/database';
import { User } from '../models/User';
import http from 'http';
import mongoose from 'mongoose';

async function runTests() {
  console.log('\n--- STARTING EDUNOVA BACKEND INTEGRATION TESTS ---');

  // Connect to DB
  await connectDatabase();

  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address() as any;
  const baseUrl = `http://localhost:${address.port}`;

  console.log(`[Test Server] Running at ${baseUrl}`);

  let testsPassed = 0;
  let testsFailed = 0;

  const testEmail = `test_alex_${Date.now()}@edunova.ai`;
  const testPassword = 'SecurePassword123!';
  let authToken = '';

  // Clean up any existing test user with this email
  await User.deleteMany({ email: { $regex: /test_alex_/ } });

  try {
    // 1. Health Route Test
    console.log('\n[1] Testing GET /health ...');
    const healthRes = await fetch(`${baseUrl}/health`);
    const healthData = await healthRes.json();
    if (healthRes.status === 200 && healthData.success === true && healthData.message === 'EduNova API is running') {
      console.log('✅ PASS: /health responded with 200 and expected payload');
      testsPassed++;
    } else {
      console.error('❌ FAIL: /health response invalid', healthData);
      testsFailed++;
    }

    // 2. Registration Test
    console.log('\n[2] Testing POST /api/auth/register ...');
    const regRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Alex Student',
        email: testEmail,
        password: testPassword,
        educationLevel: 'Undergraduate',
        subjects: ['DBMS', 'NLP', 'Computer Networks', 'Java'],
        learningGoals: ['Master NLP', 'Score > 85% in Finals'],
      }),
    });
    const regData = await regRes.json();
    if (regRes.status === 201 && regData.success === true && regData.data?.token && regData.data?.user?.email === testEmail) {
      console.log('✅ PASS: Registration succeeded with 201 and returned JWT token');
      if (regData.data.user.password) {
        console.error('❌ FAIL: Password was leaked in user object');
        testsFailed++;
      } else {
        console.log('✅ PASS: Password is appropriately excluded from user object');
        testsPassed++;
      }
      authToken = regData.data.token;
    } else {
      console.error('❌ FAIL: Registration failed', regData);
      testsFailed++;
    }

    // 3. Duplicate Email Registration Test
    console.log('\n[3] Testing duplicate email registration ...');
    const dupRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Alex Duplicate',
        email: testEmail,
        password: testPassword,
        educationLevel: 'Undergraduate',
      }),
    });
    const dupData = await dupRes.json();
    if (dupRes.status === 400 && dupData.success === false) {
      console.log('✅ PASS: Duplicate registration rejected with HTTP 400');
      testsPassed++;
    } else {
      console.error('❌ FAIL: Duplicate registration did not return 400', dupData);
      testsFailed++;
    }

    // 4. Successful Login Test
    console.log('\n[4] Testing POST /api/auth/login with valid credentials ...');
    const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testEmail,
        password: testPassword,
      }),
    });
    const loginData = await loginRes.json();
    if (loginRes.status === 200 && loginData.success === true && loginData.data?.token) {
      console.log('✅ PASS: Login succeeded with 200 and returned JWT token');
      testsPassed++;
    } else {
      console.error('❌ FAIL: Login failed with valid credentials', loginData);
      testsFailed++;
    }

    // 5. Invalid Login Test
    console.log('\n[5] Testing POST /api/auth/login with invalid password ...');
    const badLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testEmail,
        password: 'WrongPassword123!',
      }),
    });
    const badLoginData = await badLoginRes.json();
    if (badLoginRes.status === 401 && badLoginData.success === false) {
      console.log('✅ PASS: Invalid login rejected with HTTP 401');
      testsPassed++;
    } else {
      console.error('❌ FAIL: Invalid login did not return 401', badLoginData);
      testsFailed++;
    }

    // 6. Protected /me route without token
    console.log('\n[6] Testing GET /api/auth/me without authorization token ...');
    const unauthRes = await fetch(`${baseUrl}/api/auth/me`);
    const unauthData = await unauthRes.json();
    if (unauthRes.status === 401 && unauthData.success === false) {
      console.log('✅ PASS: Unauthorized request to /me rejected with HTTP 401');
      testsPassed++;
    } else {
      console.error('❌ FAIL: Unauthorized /me did not return 401', unauthData);
      testsFailed++;
    }

    // 7. Protected /me route with valid Bearer token
    console.log('\n[7] Testing GET /api/auth/me with valid Bearer token ...');
    const authMeRes = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    const authMeData = await authMeRes.json();
    if (authMeRes.status === 200 && authMeData.success === true && authMeData.data?.user?.email === testEmail) {
      console.log(`✅ PASS: Protected /me returned current user profile (${authMeData.data.user.name})`);
      testsPassed++;
    } else {
      console.error('❌ FAIL: Protected /me failed with valid token', authMeData);
      testsFailed++;
    }

    // 8. Logout Test
    console.log('\n[8] Testing POST /api/auth/logout ...');
    const logoutRes = await fetch(`${baseUrl}/api/auth/logout`, { method: 'POST' });
    const logoutData = await logoutRes.json();
    if (logoutRes.status === 200 && logoutData.success === true) {
      console.log('✅ PASS: /logout returned HTTP 200');
      testsPassed++;
    } else {
      console.error('❌ FAIL: /logout failed', logoutData);
      testsFailed++;
    }

  } finally {
    // Clean up
    await User.deleteMany({ email: { $regex: /test_alex_/ } });
    await mongoose.connection.close();
    server.close();
  }

  console.log('\n=======================================');
  console.log(`TEST SUMMARY: ${testsPassed} passed, ${testsFailed} failed`);
  console.log('=======================================\n');

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test suite runtime error:', err);
  process.exit(1);
});
