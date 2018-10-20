const Alice  = require('yandex-dialogs-sdk')
const alice = new Alice()
//AAA
//
//const users = [];

alice.command('Что происходит', ctx => {
	//if(users.includes(ctx.userId)){
	//	return ctx.reply('О, я тебя помню!')
	//}
	
	users.push(ctx.userId)
	ctx.reply('Привет! Я умею считать площадь треугольника. Ну, если честно, то должна немного больше уметь, но что умею, то умею... Кстати, можешь спросить у меня помощи.')
})

alice.any(ctx => {
  	ctx.reply('Приветиk')
})

alice.listen("/",3000)
