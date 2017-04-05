'use strict';
const nodemailer = require('nodemailer');

let smtpConfig = {
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: 'hello@knpuniversity.com',
        pass: 'WRONG PASS'
    }
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpConfig);

// setup email data with unicode symbols
let mailOptions = {
    from: '"Testing Hello" <hello@knpuniversity.com>', // sender address
    to: 'weaverryan@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
