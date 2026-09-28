import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    })
  }

  try {
    const {
      name,
      email,
      organization,
      purpose,
      message,
    } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
      })
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,

      subject: `Contacto web · ${purpose || "Consulta"}`,

      html: `
        <h2>Nuevo mensaje desde Vanessa Velasco</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organización:</strong> ${organization || "No especificada"}</p>
        <p><strong>Motivo:</strong> ${purpose || "No especificado"}</p>

        <hr />

        <p>${message}</p>
      `,
    })

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: "Could not send message",
    })
  }
}