import nodemailer from 'nodemailer';

export const mailer=(email)=>{

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        } 
    });
  
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'FOODY',
        text: 'FOODY' , 
        html: '<h3>Thanks for ordering from our service. Be sure to check out other tasty options!</h3></br><h4>https://foodappfrontend.onrender.com/</h4>'
    };
  
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}