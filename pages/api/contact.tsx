export default function (req:any, res:any) {
    require('dotenv').config()
    const SENDEMAIL = 'baconpassthrough@gmail.com'
    const RECIEVEEMAIL = 'itssamius@gmail.com'

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: SENDEMAIL,
          pass: process.env.password,
        },
        secure: true,
      })

    const mailData = {
        from: SENDEMAIL,
        to: RECIEVEEMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err:any, info:any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200)
  }