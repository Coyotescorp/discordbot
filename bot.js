require('dotenv');
const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix;
const color = config.color;
const client = new Discord.Client();
const verify = message.guild.roles.cache.get('761681820735373322');
const boy = message.guild.roles.cache.get('772560917690974259');
const embed = new Discord.MessageEmbed({
    title: 'WERYFIKACJA',
    description: 'Aby odblokować podstawowe uprawnienia użytkownika które pozwolą ci między innymi pisać na kanale #general,\n' +
        'pozostaw reakcje weryfikacji jeśli zapoznałeś się z naszym regulaminem.',

}).setColor(color);
const embed1 = new Discord.MessageEmbed({
    title: 'GENDER:',
    description: '♂ - BOY\n' +
        '♀ - GIRL',

}).setColor(color);
const embed2 = new Discord.MessageEmbed({
    title: 'GAMES:',
    description: '🧡 - CS:GO\n' +
        ' 🤎 - Hurtworld\n' +
        ' 🤍 - Valorant\n' +
        ' 💚 - Minecraft\n' +
        ' 💙 - League of Legends\n' +
        ' 🐲 - ARK\n' +
        ' ❤ - Metin2',

}).setColor(color);
const embed3 = new Discord.MessageEmbed({
    title: 'REGION:',
    description: '🐶 - Dolnośląskie\n' +
        '🐱 - Kujawsko-Pomorskie\n' +
        '🐭 - Lubelskie\n' +
        '🐹 - Lubuskie\n' +
        '🐰 - Łódzkie\n' +
        '🦊 - Małopolskie\n' +
        '🐻 - Opolskie\n' +
        '🐼 - Podkarpackie\n' +
        '🐨 - Podlaskie\n' +
        '🐯 - Pomorskie\n' +
        '🦁 - Śląskie\n' +
        '🐮 - Świętokrzyskie\n' +
        '🐷 - Warmińsko-Mazurskie\n' +
        '🐸 - Wielkopolskie\n' +
        '🐵 - Zachodniopomorskie\n' +
        '🐔 - Mazowieckie',

}).setColor(color);
const embed4 = new Discord.MessageEmbed({
    title: 'AGE:',
    description: '🇦 - 5-10\n' +
        '🇧 - 10-12\n' +
        '🇨 - 12-14\n' +
        '🇩 - 14-16\n' +
        '🇪 - 16-18\n' +
        '🇫 - 18-20\n' +
        '🇬 - 20-25\n' +
        '🇭 - 25-30\n' +
        '🇮 - 30+'

}).setColor(color);
client.login(config.token).catch(console.error);
client.on('ready', () => {
    console.log('I am ready!');
    client.channels.cache.get('753313118305779839').send(embed).then(sentembed => sentembed.react('✅'));
    client.channels.cache.get('766765358144421899').send(embed1).then(sentembed1 => {
        sentembed1.react('♂').catch(console.error);
        sentembed1.react('♀').catch(console.error);
    });
    client.channels.cache.get('766765358144421899').send(embed2).then(sentembed2 => {
        sentembed2.react('🧡').catch(console.error);
        sentembed2.react('🤎').catch(console.error);
        sentembed2.react('🤍').catch(console.error);
        sentembed2.react('💚').catch(console.error);
        sentembed2.react('💙').catch(console.error);
        sentembed2.react('🐲').catch(console.error);
        sentembed2.react('❤').catch(console.error);
    });
    client.channels.cache.get('766765358144421899').send(embed3).then(sentembed3 => {
        sentembed3.react('🐶').catch(console.error);
        sentembed3.react('🐱').catch(console.error);
        sentembed3.react('🐭').catch(console.error);
        sentembed3.react('🐹').catch(console.error);
        sentembed3.react('🐰').catch(console.error);
        sentembed3.react('🦊').catch(console.error);
        sentembed3.react('🐻').catch(console.error);
        sentembed3.react('🐼').catch(console.error);
        sentembed3.react('🐨').catch(console.error);
        sentembed3.react('🐯').catch(console.error);
        sentembed3.react('🦁').catch(console.error);
        sentembed3.react('🐮').catch(console.error);
        sentembed3.react('🐷').catch(console.error);
        sentembed3.react('🐸').catch(console.error);
        sentembed3.react('🐵').catch(console.error);
        sentembed3.react('🐔').catch(console.error);
    });
    client.channels.cache.get('766765358144421899').send(embed4).then(sentembed4 => {
        sentembed4.react('🇦').catch(console.error);
        sentembed4.react('🇧').catch(console.error);
        sentembed4.react('🇨').catch(console.error);
        sentembed4.react('🇩').catch(console.error);
        sentembed4.react('🇪').catch(console.error);
        sentembed4.react('🇫').catch(console.error);
        sentembed4.react('🇬').catch(console.error);
        sentembed4.react('🇭').catch(console.error);
        sentembed4.react('🇮').catch(console.error);
    });
});
/*client.on('messageReactionAdd', async (reactionReaction, user) => {

    const message = reactionReaction.message;
    const verifyChannel = message.guild.channels.cache.find(c => c.name === 'rules-register');
    const member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;



    if (reactionReaction.emoji.name === '✅' && message.channel.id === verifyChannel.id) {
        member.roles.add(verify).catch(console.error);

    }else if(reactionReaction.emoji.name === '♂'&& message.channel.id === '766765358144421899'){
        member.roles.add(boy).catch(console.error);
    }
});
client.on('messageReactionRemove', async (reactionReaction, user) => {

    const message = reactionReaction.message;
    const member = message.guild.members.cache.get(user.id);
    if(message === embed) {
        member.roles.remove(verify).catch(console.error);
    }else if (message === embed1){
       member.roles.remove(boy).catch(console.error);
    }

});
 */
client.on('message', message => {
    // If the message is "what is my avatar"
    switch (message.content) {
        case prefix + 'what is my avatar?': // Send the user's avatar URL
            message.reply(message.author.displayAvatarURL()).catch(console.error);
            break;
        case prefix + 'U stupid': //no U
            message.reply('No U.').catch(console.error);
            break;
        case prefix + 'D10': // Simulate D10 dice roll
            message.reply(Math.floor((Math.random() * 10) + 1)).catch(console.error);
            break;
        case prefix + 'D100': // Simulate D10 dice roll
            message.reply(Math.floor((Math.random() * 100) + 1)).catch(console.error);
            break;
        case prefix + 'D20': // Simulate D10 dice roll
            message.reply(Math.floor((Math.random() * 20) + 1)).catch(console.error);
            break;
        case prefix + 'clean': //cleans cache
            const amount = client.sweepMessages(2000);
            console.log(`Successfully removed ${amount} messages from the cache.`);
            break;
        case prefix + 'sleep': //update presence
            client.user.setStatus('dnd')
                .then(console.log)
                .catch(console.error);
            break;
        case prefix + 'wake': //update presence
            client.user.setStatus('online')
                .then(console.log)
                .catch(console.error);
            break;
        case prefix + 'ark': //update presence
            client.user.setActivity('ARK: Survival Evolved', {
                type: 'PLAYING'
            })
                .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
                .catch(console.error);
            break;

        case prefix + 'help': //dm help
            message.author.send("hello").catch(console.error);
            break;
    }
});
