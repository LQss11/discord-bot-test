exports.run = function (bot, msg, args) {
        bot.users.fetch('USERID', false).then((user) => {
                user.send('Hello world');
        });
};