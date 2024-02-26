const TelegramBot = require('node-telegram-bot-api');

const token = '7112195805:AAEw90RAdy24QpW8pmMiGnYhm-dL39n8dho';
const webAppURL = 'https://stalwart-queijadas-88c160.netlify.app/'
const bot = new TelegramBot(token, {polling: true});

const menuString = `
Добрый день. Меню на 26.02.24
1. Лапша по домашнему
2. Мясные тефтели. Пюре. 3. Блинчики с курицей и грибами.`

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text==='/start') {
        await bot.sendMessage(chatId,'ниже кнопка', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Заказать', web_app: {url:webAppURL}}]
                ]
            }
        })
    }
});
