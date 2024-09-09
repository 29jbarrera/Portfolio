const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

// Crear una instancia de Express
const app = express();

// Middleware
app.use(cors()); // Permite que el frontend (Angular) haga peticiones al backend
app.use(bodyParser.json()); // Procesa los datos JSON enviados en las solicitudes

// Ruta POST para manejar el envío de correos
app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configuración de Nodemailer (usando Gmail como ejemplo)
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Servicio de correo que estés usando (Gmail en este caso)
    auth: {
      user: "29jbarrera@gmail.com", // Tu correo (necesitas activar la autenticación de aplicaciones en Gmail)
      pass: "klfk jlut yuhs jvqm", // Tu contraseña o token de la app de Gmail
    },
  });

  const mailOptions = {
    from: email, // El correo del usuario que llena el formulario
    to: "29jbarrera@gmail.com", // El correo al que quieres enviar los mensajes
    subject: `¡¡Nuevo mensaje en mi Portfolio!!`,
    html: `
      <h2><strong>Asunto:</strong> ${subject}</h2>
      <h2><strong>Nombre:</strong> ${name}</h2>
      <h2><strong>Correo:</strong> ${email}</h2>
      <h2><strong>Mensaje:</strong></h2>
      <h2>${message}</h2>
    `,
  };
  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json("Error al enviar el correo");
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).json("Correo enviado correctamente");
    }
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
