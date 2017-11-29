const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_TOKEN || '381944664:AAEXKM5U8vo82DMehfI8gX17wHnukmIhuCY';

const options = {
  webHook: {
    port: process.env.PORT || 8080
};

const url = process.env.APP_URL || 'https://guarded-beach-75462.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);

// Hello

function randHello() {
  let arr = [
    'Хайль! Расскажите о себе, откуда пришли и чем промышляете? Я вот художник.',
    'Хайль! На каком языке пишет наш новый гражданин?',
    'Хайль! Мы рады видеть вас в нашем уютном чате. Тут нет места расизму, ненависти и тиранам.',
    'Хайль! Гражданин, поведаете нам о своих странствиях?',
    'Хайль! На каком языке программирования вы рисуете свои картины?'
  ]

  let rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
}

bot.on('new_chat_members', function onMessage(msg) {

  if (msg.new_chat_members[0].username === 'adolfHitlerRUbot')
    bot.sendMessage(msg.chat.id, 'Хайль!');

  if (msg.new_chat_members[0].username !== 'adolfHitlerRUbot')
    bot.sendMessage(msg.chat.id, randHello() );

});

// Buy

function randBuy() {

  let arr = [
    'Противный тип. На еврея был похож.',
    'Противный тип. В тайне кодил на PHP.',
    'Я видел фотокарточку, где он писал хелоуворд на Java. Жалко парня.',
    'Проклятый коммунист покинул нас. На небо.',
    'В топку его. У предателей только одна учесть. Расстрел.',
    'Минус советский партизан.',
    'Этот парень уже в мешке.'
  ] 

  let rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
}

bot.on('left_chat_member', function onMessage(msg) {
  
  bot.sendMessage(msg.chat.id, randBuy() );

});
