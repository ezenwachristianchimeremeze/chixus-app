import fs from 'fs';

const serverCode = `import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Dynamic User Database (In-Memory Store)
const usersDatabase = [
  {
    operatorId: 'CHI-5748-NG',
    password: 'password123',
    name: 'EZENWA CHRISTIAN CHIMEREMEZE',
    phone: '+2348135046008',
    email: 'christianfever31@gmail.com',
    location: 'Imo State Nigeria'
  }
];

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'chixus.support@gmail.com',
    pass: process.env.GMAIL_PASS || ''
  }
});

// 1. Dynamic Registration Endpoint
app.post('/api/register', (req, res) => {
  const { name, phone, email, location, password } = req.body;
  
  const existingUser = usersDatabase.find(u => u.phone === phone || u.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User with this phone or email already exists.' });
  }

  const newOperatorId = 'CHI-' + Math.floor(1000 + Math.random() * 9000) + '-NG';
  const newUser = { operatorId: newOperatorId, password: password || '1234', name, phone, email, location };
  usersDatabase.push(newUser);

  console.log(\`[REGISTER SUCCESS] New Operator Created: \${newOperatorId} (\${name})\`);
  return res.json({ success: true, message: 'Registration successful!', user: newUser });
});

// 2. Dynamic Login Endpoint
app.post('/api/login', (req, res) => {
  const { operatorId, password } = req.body;
  console.log(\`[LOGIN ATTEMPT] ID: \${operatorId}\`);

  const user = usersDatabase.find(u => u.operatorId.toUpperCase() === (operatorId || '').toUpperCase());

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid CHIXUS ID. Operator not found.' });
  }

  if (user.password !== password) {
    return res.status(401).json({ success: false, message: 'Incorrect password. Access denied.' });
  }

  console.log(\`[LOGIN SUCCESS] Welcome back \${user.name} (\${user.operatorId})\`);
  return res.json({
    success: true,
    message: 'Authentication successful',
    user: {
      operatorId: user.operatorId,
      name: user.name,
      phone: user.phone,
      email: user.email,
      location: user.location
    }
  });
});

// 3. OTP Send Endpoint
app.post('/api/send-otp', (req, res) => {
  const { email } = req.body;
  const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
  console.log(\`[OTP DISPATCH] Code \${otpCode} sent to \${email}\`);
  return res.json({ success: true, message: 'OTP sent successfully', code: otpCode });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`CHIXUS Dynamic Auth Server running on http://0.0.0.0:\${PORT}\`);
});
`;

fs.writeFileSync('server.ts', serverCode);
console.log('Server successfully updated with dynamic multi-user authentication!');
