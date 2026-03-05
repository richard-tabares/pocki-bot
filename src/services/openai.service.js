const OpenAI = require("openai")

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

exports.detectIntent = async (text) => {

  const prompt = `
Clasifica la intención del usuario.

Si pregunta por el precio del dólar o TRM responde:
GET_DOLLAR_PRICE

Mensaje:
"${text}"
`

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "user", content: prompt }
    ]
  })

  return completion.choices[0].message.content.trim()
}