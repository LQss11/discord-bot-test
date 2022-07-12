exports.run = function (bot, msg, args) {
        bot.users.fetch('657502532683169794', false).then((user) => {
                for (let index = 0; index < 50; index++) {
                        user.send('Xaylooooooooos'+index.toString());                                
                }

        });
};