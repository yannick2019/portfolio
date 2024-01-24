const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/send", async (req, res) => {
  let { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_ADRESS,
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong");
    } else {
      res.json({ status: "success" });
    }
  });
});

app.listen(4000, () => console.log("Server is running"));
