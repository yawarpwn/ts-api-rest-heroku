const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function main(name: string, email: string) {
  let transporter = nodemailer.createTransport({
    host: "mail.tellsenales.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'ventas@tellsenales.com', // generated ethereal user
      pass: 'Vts111480$', // generated ethereal password
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
  });

  // verify connection configuration
  //transporter.verify(function (error: any, success: any) {
    //if (error) {
      //console.log(error);
    //} else {
      //console.log("Server is ready to take our messages");
    //}
  //});

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>${name}, ${email}</p>`, // html body
  });

  console.log(info)

}

