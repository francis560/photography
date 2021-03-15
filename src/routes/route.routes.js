const { Router } = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const route = Router();


route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

route.post('/contact', (req, res) => {

    const { nombre, correo, asunto } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "dblaktin30@gmail.com",
            pass: "vnxmtusawpcvaxao"
        }
    });

    const mailOptions = {
        from: `${correo}`,
        to: "dblaktin24@gmail.com",
        subject: `(${nombre}) Mensaje de trabajo`,
        text: `${asunto}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            res.redirect('/');
        }
    });
    
});

module.exports = route;