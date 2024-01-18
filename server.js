const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your static files (HTML, CSS, JS, images, etc.)
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter using your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '', // replace with your Gmail email
            pass: '' // replace with your Gmail password
        }
    });

    // Set up the email options
    const mailOptions = {
        from: '', // replace with your Gmail email
        to: 'omkardhamdherespidy8@gmail.com', // replace with your receiving email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Error sending email' });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
