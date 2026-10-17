import nodemailer from 'nodemailer';

const systemTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SYSTEM_GMAIL_USER || 'chixus.system@gmail.com',
    pass: process.env.SYSTEM_GMAIL_PASS || process.env.GMAIL_PASS
  }
});

const supportTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'chixus.support@gmail.com',
    pass: process.env.GMAIL_PASS
  }
});

export function setupEmailRoutes(app: any) {
  // 6-digit verification codes & security alerts
  app.post('/api/auth/send-verification-code', async (req: any, res: any) => {
    const { email, code } = req.body;
    try {
      await systemTransporter.sendMail({
        from: '"CHIXUS System" <chixus.system@gmail.com>',
        to: email,
        subject: 'Your CHIXUS Verification Code',
        text: `Your 6-digit security code is: ${code}`
      });
      res.json({ success: true, message: 'Verification code sent via system inbox.' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Settings notification digests
  app.post('/api/notifications/dispatch-email', async (req: any, res: any) => {
    const { email, subject, message } = req.body;
    try {
      await systemTransporter.sendMail({
        from: '"CHIXUS Security" <chixus.system@gmail.com>',
        to: email,
        subject: subject || 'CHIXUS Security Alert',
        text: message
      });
      res.json({ success: true, message: 'Notification dispatched.' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Help Center tickets & engineering inquiries
  app.post('/api/support/ticket', async (req: any, res: any) => {
    const { userEmail, subject, description } = req.body;
    try {
      await supportTransporter.sendMail({
        from: '"CHIXUS Support" <chixus.support@gmail.com>',
        to: 'chixus.support@gmail.com',
        replyTo: userEmail,
        subject: `Support Ticket: ${subject}`,
        text: `From: ${userEmail}\n\n${description}`
      });
      res.json({ success: true, message: 'Support ticket received.' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Recovery email
  app.post('/api/send-recovery-email', async (req: any, res: any) => {
    const { email, recoveryLink } = req.body;
    try {
      await systemTransporter.sendMail({
        from: '"CHIXUS System" <chixus.system@gmail.com>',
        to: email,
        subject: 'CHIXUS Account Recovery',
        text: `Click here to recover your account: ${recoveryLink}`
      });
      res.json({ success: true, message: 'Recovery email sent.' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });
}
