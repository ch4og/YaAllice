const Alice  = require('yandex-dialogs-sdk')
const alice = new Alice()


alice.any(ctx => {
  	ctx.reply('Приветиk')
})

alice.listen("/",3000)
