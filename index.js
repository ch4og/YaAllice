const { sample } = require('lodash')
const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

alice.any(ctx => {
  ctx.reply('Привет')
})

alice.listen("/",3000)
