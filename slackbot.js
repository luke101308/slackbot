const SlackBot = require('slackbots');
 
// create a bot
const bot = new SlackBot({
    token: 'xoxb-392278351014-391287174819-afTVxkACLNXIbF0vGjmJPYnx', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'MitchBot'
});
 
bot.on('message', function(data) {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    const params = {
        icon_emoji: ':mitch-maths:'
    };
    if (data.username !== "MitchBot" && data.type === "message"){
        const dataPositive = data.text
        .split(' ')
        .filter(word => 
            word === "yes" ||
            word === "great" ||
            word === "cool" ||
            word === "amazing" ||
            word === "brilliant" ||
            word === "bam" ||
            word === "lovely")
        .length
        if (dataPositive > 0){
            bot.postMessageToChannel('general', ':mitch-1:', params);
        }
    }
});