require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
  resizeBy.send('Wellcome to my porfolio');
});

app.post('/api/forma', (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    post: 465,
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions = {
    from: data.mail,
    to: process.env.MAIL_TO,
    subject: `message from ${data.mail}`,
    html: `<h3>Info</h3>
        <ul>
        <li>mail : ${data.mail}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, res) => {
    if (error) {
      res.json(error);
    } else {
      res.json('Success');
    }
  });
  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`);
});
