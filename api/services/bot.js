var TelegramBot = require('node-telegram-bot-api');
var token = '259323502:AAEQF07Tk0F4uvaUQbmT8Xfrvuwp_veL8Z8';

var bot = new TelegramBot(
    token, {
        polling: true
    });

bot.getMe().then(function (me) {
    console.log('Hi my name is %s!', me.username);
});

bot.onText(/^\Hola/, function (msg, match) {
    console.log(msg);
    bot.sendMessage(msg.chat.id,"¡Hola!, ¿Cómo te llamas? \n *Soy + tu nombre").then(function () {
        console.log("Hola");
    });
});

bot.onText(/^\Soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id,"¡Hola "+name+"! \n Mi nombre es AranzaPlBot soy un bot, ¿Deseas conocer mis funciones?").then(function () {
        console.log("Saludando a "+name);
    });
});

bot.onText(/^\Si/, function (msg, match) {
    console.log(msg);
    bot.sendMessage(msg.chat.id,"Para recibir una foto de Paris envia /imagen, para recibir un audio envia /audio, para saber donde esta Tulancingo envia /tulancingo ").then(function () {
        console.log("Instrucciones");
    });
});

bot.onText(/^\No/, function (msg, match) {
    console.log(msg);
    bot.sendMessage(msg.chat.id,"¡Adios!").then(function () {
        console.log("Despedida");
    });
});

bot.onText(/^\/imagen/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var photo='/home/aranza/Documentos/AranzaPLbot/assets/images/torreeiffel.jpg';
    bot.sendPhoto(msg.chat.id,photo,{caption: "Foto de la Torre Eiffel en Paris, Francia"}).then(function () {
        console.log("Enviando imagen a "+name);
    });
});

bot.onText(/^\/tulancingo/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var lat = 20.092315;
    var long = -98.4041909;
    bot.sendLocation(msg.chat.id,lat,long).then(function () {
        console.log("Enviando ubicacion a "+name);
    });
});

bot.onText(/^\/audio/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var path = '/home/aranza/Documentos/AranzaPLbot/assets/music/Leon_Larregui_Locos.mp3';
    bot.sendAudio(msg.chat.id,path).then(function () {
        console.log("Enviando audio a "+name);
    });
});
/*
1. mandar un texto
2. enviar una foto
3. enviar una ubicacion
4. audio/multimedia
*/