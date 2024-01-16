const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware untuk mengizinkan CORS dan parsing data JSON
app.use(require('cors')());
app.use(bodyParser.json());

// Endpoint untuk menangani pengiriman formulir
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Pengaturan email yang akan dikirim
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-destination-email@example.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Mengirim email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email Sent');
    }
  });
});

// Jalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
