const Alice  = require('yandex-dialogs-sdk')
const alice = new Alice()
//AAA
//
//const users = [];

alice.command('', ctx => {
	ctx.session.set('current',0)
	ctx.reply("Что бы узнать немного больше, спроси у меня 'Помощь' ")
})

/*alice.command(/высота/i && /длинна/i, ctx => {
	alice.reply();
})*/

alice.command(/помощь/i, ctx => {
	//if(users.includes(ctx.userId)){
	//	return ctx.reply('О, я тебя помню!')
	//}
	
	//users.push(ctx.userId)
	ctx.session.set('current',0)
	ctx.reply('Я умею считать площадь треугольника. Чтобы больше узнать о том, как мной подльзоваться, скажи любую фразу со словом "Формулы"')
})

alice.command(['Формулы','формулы'], ctx => {
	ctx.reply(
		ctx.replyBuilder
			.text('Нажми на кнопку, чтобы узнать о том, как использовать определенную формулу')
			.addButton(
				ctx.buttonBuilder
					.text('1я')
			)
			.addButton(
				ctx.buttonBuilder
					.text('2я')
			)
			.addButton(
				ctx.buttonBuilder
					.text('3я')
			)
			.addButton(
				ctx.buttonBuilder
					.text('4я')
			)
			.addButton(
				ctx.buttonBuilder
					.text('5я')
			)
	)
})
alice.any(ctx => {
  	ctx.reply('Что-то ты неправильно делаешь...')
})

alice.listen("/",8080)
