const nodemailer = require('nodemailer');

const emailService = {
    sendResetPasswordEmail: (email, userId, token) => {
        // Email sending logic
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kkulmiye10@gmail.com',
                pass: 'pvvv pbuh xggj rqwi'
            }
        });

        const mailOptions = {
            from: 'youremail@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:5173/reset_password/${userId}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    },
};

module.exports = emailService;
