# WhatsApp AI Bot API 🤖💬

API construida con **Node.js y Express** que recibe mensajes desde **WhatsApp Cloud API**, detecta la intención del usuario (usando OpenAI o fallback) y responde automáticamente.

Actualmente el bot puede:

- Recibir mensajes desde WhatsApp
- Detectar intención del usuario
- Consultar el precio del dólar
- Responder automáticamente al usuario

---

# 1. Requisitos

Antes de instalar el proyecto necesitas tener instalado:

- Node.js 18 o superior
- npm
- Cuenta en Meta Developers
- ngrok

Tecnologías utilizadas:

- Node.js
- Express
- WhatsApp Cloud API
- OpenAI API (opcional)
- ngrok

---

# 2. Clonar el proyecto

git clone https://github.com/tu-usuario/whatsapp-ai-bot.git
cd whatsapp-ai-bot

# 3. Instalar dependencias

npm install

# 4. Crea un archico .env
PORT=3000

VERIFY_TOKEN=mi_token_seguro

WHATSAPP_TOKEN=tu_token_de_whatsapp
PHONE_NUMBER_ID=tu_phone_number_id

OPENAI_API_KEY=tu_openai_api_key

# 5. Iniciar el servidor

node --watch src/app.js

# 6. Exponer la API con ngrok

ngrok http 3000 y obtenemos su respectiva url publica

# 7. Configurar el Webhook en Meta

- Configura el web hook en Meta, recuerda que la url del webhook es la que te genera ngrok
- El token de verificación lo creas, debes ser el mismo que el que esta tu .env
- En la parte de configuracion de Meta de estar suscrito a messages para poder que reciba mensajes

# 8. Testing
 - Al numero que te da whatsapp debes enviarle un mensaje de prueba, "Precio dolar", si OpenAI tiene quota, repondera y si no, hara un scrapping directo a la web del dolar configurada.