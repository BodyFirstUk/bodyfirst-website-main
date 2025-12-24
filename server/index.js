require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!message || !email) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  // Build transport from env
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !port || !user || !pass) {
    return res.status(500).json({ ok: false, error: 'SMTP not configured on server' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO || 'info@bodyfirst.uk';
    const subject = `Website enquiry from ${name || 'Website visitor'}`;
    const text = [`Name: ${name || ''}`, `Email: ${email || ''}`, `Phone: ${phone || ''}`, '', `Message:`, message].join('\n');

    const info = await transporter.sendMail({
      from: `${user}`,
      to,
      subject,
      text,
      html: `<pre style="font-family:inherit">${text.replace(/</g, '&lt;')}</pre>`,
    });

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error('send-email error', err);
    return res.status(500).json({ ok: false, error: err.message || 'send-failed' });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Email server running on http://localhost:${PORT}`);
});
