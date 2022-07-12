exports.run = function (bot, msg, args) {
bot.users.fetch('504375427561685042', false).then((user) => {
        user.send('hello world');
});
};