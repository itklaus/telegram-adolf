const TelegramBot = require('node-telegram-bot-api');
const token = '381944664:AAEXKM5U8vo82DMehfI8gX17wHnukmIhuCY';
const bot = new TelegramBot(token, {polling: true});



bot.on('new_chat_members', function onMessage(msg) {

  if (msg.new_chat_members[0].username === 'adolfHitlerRUbot')
    bot.sendMessage(msg.chat.id, 'Хайль!');

  if (msg.new_chat_members[0].username !== 'adolfHitlerRUbot')
    bot.sendMessage(msg.chat.id, 'Хайль! Расскажи о себе, откуда пришел и чем промышляешь? Я вот художник.');

});

bot.on('left_chat_member', function onMessage(msg) {
  
  bot.sendMessage(msg.chat.id, 'Противный тип. На еврея был похож.')

});
