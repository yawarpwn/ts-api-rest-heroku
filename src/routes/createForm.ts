import { RequestHandler  } from 'express'
import nodemailer from 'nodemailer'

export const createForm: RequestHandler = async (req, res) => {
	const { name, email, message } = req.body

	const contentHtml =`
		<p><strong>nombre:</strong> ${name}</p>	
		<p><strong>correo:</strong> ${email}</p>	
		<p><strong>mensaje:</strong> ${message}</p>
		`
	console.log(contentHtml)

	const transporter = nodemailer.createTransport({
		host: 'mail.tellsenales.com',
		port: 465,
		secure: true,
		auth: {
			user: 'ventas@tellsenales.com',
			pass: 'Vts111480$',
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	const info = await transporter.sendMail({
		from:`${name}<ventas@tellsenales.com>`,
		to: 'tellsenales@gmail.com',
		subject: 'mensaje cliente web',
		text: 'Hello world',
		html: contentHtml
	})

	console.log('mensaje enviado', info)

	res.send('recibido')
}
