///const { sample } = require('lodash')
const { Alice } = require('yandex-dialogs-sdk')
const alice = new Alice()

alice.command('', ctx => {
	if(users.includes(ctx.userId)){
		return ctx.reply('О, я тебя помню!')
	}
	
	users.push(ctx.userId)
	ctx.reply('Привет! Я умею считать площадь треугольника. Ну, если честно, то должна немного больше уметь, но что умею, то умею... Кстати, можешь спросить у меня помощи.')
})

alice.listen("/",3000)
