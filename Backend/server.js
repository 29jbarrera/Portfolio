const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject: `¡¡Nuevo mensaje en mi Portfolio!!`,
    html: `
      <h2><strong>Asunto:</strong> ${subject}</h2>
      <h2><strong>Nombre:</strong> ${name}</h2>
      <h2><strong>Correo:</strong> ${email}</h2>
      <h2><strong>Mensaje:</strong></h2>
      <h2>${message}</h2>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json("Error al enviar el correo");
    } else {
      res.status(200).json("Correo enviado correctamente");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
