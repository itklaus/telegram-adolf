const TelegramBot = require('node-telegram-bot-api');
const token = '381944664:AAEXKM5U8vo82DMehfI8gX17wHnukmIhuCY';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello!");
  }
});

