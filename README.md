# WhatsApp AI Bot API 🤖💬

API construida con **Node.js y Express** que recibe mensajes desde **WhatsApp Cloud API**, detecta la intención del usuario (usando OpenAI o fallback) y responde automáticamente.

Actualmente el bot puede:

- Recibir mensajes desde WhatsApp
- Detectar intención del usuario
- Consultar el precio del dólar
- Responder automáticamente al usuario

---

# 1. Requisitos

Antes de instalar el proyecto necesitas tener instalado y configurado:

- Node.js 18 o superior (Instalado)
- Express (Instalado)
- npm (Instalado)
- Cuenta en Meta Developers (Cuenta de Meta Developers)
- ngrok (Instalado)

Tecnologías utilizadas:

- Node.js
- Express
- WhatsApp Cloud API
- OpenAI API (opcional)
- ngrok

---

# 2. Clonar el proyecto

- git@github.com:richard-tabares/pocki-bot.git
- cd pocki_bot

# 3. Instalar dependencias

npm install

# 4. Crea un archico .env
PORT=3000

OPENAI_API_KEY=tu_openai_api_key

WHATSAPP_TOKEN=tu_token_de_whatsapp_meta
PHONE_NUMBER_ID=tu_phone_number_id_meta

VERIFY_TOKEN=mi_token_seguro_ramdon

# 5. Iniciar el servidor node y ngrok para hacerlo publico

- node --watch src/app.js
- ngrok http 3000

# 6. Exponer el endpoint final publico con ngrok

- ngrok http 3000 y obtenemos su respectiva url publica Forwarding -> htps://ngrok_server/dolar

# 7. Configurar el Webhook en Meta

- Configura el web hook en Meta, recuerda que la url del webhook es la que te genera ngrok
- El token de verificación lo creas, debes ser el mismo que el que esta tu .env
- En la parte de configuracion de Meta de estar suscrito a messages para poder que reciba mensajes

# 8. Testing
 - Al numero que te da whatsapp debes enviarle un mensaje de prueba, "Precio dolar", si OpenAI tiene quota, reponderá y si no, hara un scrapping directo a la web del dolar configurada.


 ## ENDPOINTS

- Para llamar la API en meta: POST -> https://ngrok_server/dolar
- Para probar de que el servicios funciona: GET -> https://ngrok_server/dolar