import fs from 'fs';

let serverCode = fs.readFileSync('server.ts', 'utf8');

// Remove any existing definitions of /api/send-recovery-email
// We'll strip them out and insert one clean version right before app.listen
serverCode = serverCode.replace(/app\.post\('\/api\/send-recovery-email'[\s\S]*?\n\}\);\s*/g, '');

const cleanEndpoint = `
app.post('/api/send-recovery-email', async (req: Request, res: Response) => {
  try {
    const { email, phone, operatorId, code, fullName } = req.body || {};
    const targetEmail = email || 'ezenwachristian083@gmail.com';
    const opId = operatorId || 'CHIXUS-' + Math.floor(1000 + Math.random() * 9000);
    const verificationCode = code || Math.floor(100000 + Math.random() * 900000).toString();

    console.log(\`[CHIXUS EMAIL DISPATCH] Sending code \${verificationCode} to \${targetEmail} (Phone: \${phone || 'N/A'})\`);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'christianfever31@gmail.com',
        pass: process.env.GMAIL_PASS || 'qjmaautbcsofsosj',
      },
    });

    const mailOptions = {
      from: '"CHIXUS Support" <christianfever31@gmail.com>',
      replyTo: 'chixus.support@gmail.com',
      to: targetEmail,
      subject: 'CHIXUS Operator Enclave - Verification & Access Code',
      html: \`
        <div style="background-color: #090d16; color: #e2e8f0; padding: 24px; font-family: monospace; border-radius: 12px; border: 1px solid #1e293b; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px;">CHIXUS GATEWAY // VERIFICATION</h2>
          <p style="font-size: 14px; color: #cbd5e1;">Hello \${fullName || 'Operator'},</p>
          <p style="font-size: 14px; color: #94a3b8;">Your node verification code and operator credentials:</p>
          <div style="background: #050811; padding: 16px; border-radius: 8px; border: 1px solid #38bdf8; text-align: center; margin: 16px 0;">
            <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Operator ID</div>
            <div style="font-size: 18px; font-weight: bold; color: #38bdf8; margin-bottom: 10px;">\${opId}</div>
            <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Verification Code</div>
            <div style="font-size: 32px; font-weight: bold; color: #ffffff; letter-spacing: 4px;">\${verificationCode}</div>
          </div>
          <p style="font-size: 12px; color: #94a3b8;">Enter this code into your Operator Gateway interface to proceed.</p>
          <hr style="border: 0; border-top: 1px solid #1e293b; margin: 20px 0;" />
          <p style="font-size: 11px; color: #64748b; margin: 0;">Support: <a href="mailto:chixus.support@gmail.com" style="color: #38bdf8;">chixus.support@gmail.com</a></p>
        </div>
      \`,
    };

    await transporter.sendMail(mailOptions);
    console.log(\`[EMAIL SUCCESS] Dispatched code \${verificationCode} to \${targetEmail}\`);

    return res.json({
      status: 'sent',
      success: true,
      email: targetEmail,
      operatorId: opId,
      code: verificationCode,
      message: 'Verification email successfully dispatched.'
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Dispatch error';
    console.error('[EMAIL ERROR]', msg);
    return res.status(500).json({ error: msg });
  }
});
`;

// Insert clean endpoint right before app.listen
serverCode = serverCode.replace('app.listen(', cleanEndpoint + '\napp.listen(');
fs.writeFileSync('server.ts', serverCode);
console.log('Successfully cleaned and updated server.ts!');
