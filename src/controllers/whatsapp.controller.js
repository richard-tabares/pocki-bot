const openaiService = require('../services/openai.service')
const whatsappService = require('../services/whatsapp.service')
const dollarTool = require('../tools/dollar.tool')

exports.verifyWebhook = (req, res) => {
    const mode = req.query['hub.mode']
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
        return res.status(200).send(challenge)
    }

    res.sendStatus(403)
}

exports.receiveMessage = async (req, res) => {
    try {
        const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]

        if (!message) {
            return res.sendStatus(200)
        }

        const userText = message.text?.body
        const from = message.from

        console.log('Mensaje recibido:', userText)

        let intent = ''

        try {
            intent = await openaiService.detectIntent(userText)
        } catch (error) {
            console.log('OpenAI error:', error.message)

            // fallback simple sin IA
            if (
                userText.toLowerCase().includes('dolar') ||
                userText.toLowerCase().includes('dólar')
            ) {
                intent = 'GET_DOLLAR_PRICE'
            } else {
                intent = 'UNKNOWN'
            }
        }

        let response = ''

        if (intent === 'GET_DOLLAR_PRICE') {
            const trm = await dollarTool.getDollarPrice()

            response = `💵 La TRM actual es: ${trm}`
        } else {
            response =
                'No entendí tu solicitud. Puedes preguntarme por el precio del dólar.'
        }

        await whatsappService.sendMessage(from, response)

        res.sendStatus(200)
    } catch (error) {
        console.error('Webhook error:', error)

        res.sendStatus(500)
    }
}
