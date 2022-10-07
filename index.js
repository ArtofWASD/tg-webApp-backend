const TelegramBot = require('node-telegram-bot-api');
const token = '5708560772:AAHSoslCSeEFLFHWygRCDsLFFm4f8GXJo7E';
const bot = new TelegramBot(token, { polling: true });
const webAppUrl = "https://telegram-react-app.vercel.app/"

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/start') {
        await bot.sendMessage(chatId, 'Добры день, пидор! Если есть проблемы с подбором товаров то жми кнопку снизу, мы поможем.', { 
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Я тупой', web_app:{url:webAppUrl} }]
                ]
            }
        });
    } else {
        await bot.sendMessage(chatId,'Я ограничен технологиями своего времени, нужно приложение пиши /start, или тыкни кнопку рядом с чатом')
    }
  
});