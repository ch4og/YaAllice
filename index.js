const Alice  = require('yandex-dialogs-sdk')
const alice = new Alice()

var waArg = 0;
var fun = 0;
var MaxArgs = 0
var argFor1 = new List([]);
var argFor2 = new List([]);
var argFor3 = new List([]);
var argFor4 = new List([]);
var argFor5 = new List([]);

alice.command('', ctx => {
	ctx.session.set('current',0)
	ctx.reply("Что бы узнать немного больше, спроси у меня 'Помощь' ")
})


alice.command(/помощь/i, ctx => {

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
        return ctx.reply(act('1')))
			
			.addButton(
				ctx.buttonBuilder
					.text('2я')
        return ctx.reply(act('2')))
			
			.addButton(
				ctx.buttonBuilder
					.text('3я')
        return ctx.reply(act('3')))
			
			.addButton(
				ctx.buttonBuilder
					.text('4я')
        return ctx.reply(act('4')))
			
			.addButton(
				ctx.buttonBuilder
					.text('5я')
        return ctx.reply(act('5')))
			
	)
})
alice.any(ctx => {
  if (fun != 0 && waArg <= MaxArgs){
      waArg++;
    if (fun == 1){
      argFor1.push(ctx.message())
    }
    if (fun == 2){
      argFor2.push(ctx.message())
    }
    if (fun == 3){
      argFor3.push(ctx.message())
    }

    if (fun == 4){
      argFor4.push(ctx.message())
    }
    if (fun == 5){
      argFor5.push(ctx.message())
    }
    nxt(fun, waArg);
  }
  else if (fun != 0 && waArg > MaxArgs) {
    count(fun)
  }
  else(){
    ctx.reply("Чтобы узнать немного больше, спроси у меня 'Помощь'")
  }

})
function act(num){
  fun = num;
  waArg = 1;
  nxt(fun, waArg);
}
alice.listen("/",8080)




function nxt(fun, wait){

  if (fun == 1){
    MaxArgs = 3;
    if (wait == 1){
      return("Введите сторону A")
    }
    if (wait == 2){
      return("Введите сторону B")
    }
    if (wait == 3){
      return("Введите угол между A и B")
    }
  }
  if (fun == 2){
    MaxArgs = 2;
    if (wait == 1){
      return("Введите сторону A")
    }
    if (wait == 2){
      return("Введите высоту от A")
    }
  }
  if (fun == 3){
    MaxArgs = 3;
    if (wait == 1){
      return("Введите сторону A")
    }
    if (wait == 2){
      return("Введите сторону B")
    }
    if (wait == 3){
      return("Введите сторону C")
    }
  }

  if (fun == 4){
    MaxArgs = 4;
    if (wait == 1){
      return("Введите сторону A")
    }
    if (wait == 2){
      return("Введите сторону B")
    }
    if (wait == 3){
      return("Введите сторону C")
    }
    if (wait == 4){
      return("Введите радиус вписанной окружности")
    }
  }
  if (fun == 5){
    MaxArgs = 4;
    f (wait == 1){
      return("Введите сторону A")
    }
    if (wait == 2){
      return("Введите сторону B")
    }
    if (wait == 3){
      return("Введите сторону C")
    }
    if (wait == 4){
      return("Введите радиус описанной окружности")
    }
  }

}
function first(argFor1){
  a1 = argFor1[0]
  b1 = argFor1[1]
  c1 = argFor1[2]
//1st formula
//a,b - стороны треугольника, C - угол между a и b
var s1=(a1*b1*Math.sin(c1*(3.14/180)))/2;
fun = 0
return(s1);
}
function second(argFor2){
//2nd formula
//a-сторонa треугольника, h - высота
a2 = argFor2[0]
h2 = argFor2[1]

var s2;
s2=(a2*h2)/2;
fun = 0
return(s2);
}
function third(argFor3){
//3rd formula
//a,b,c - стороны треугольника
a3 = argFor3[0]
b3 = argFor3[1]
c3 = argFor3[2]
var p3=(a3+b3+c3)/2;
var s3=Math.sqrt(p3*(p3-a3)*(p3-b3)*(p3-c3));
fun = 0
return(s3);
}
function fourth(argFor4){
//4th formula
//p - полупериметр, r - радиус вписанной окружности
r4 = argFor4[0]
a4 = argFor4[1]
b4 = argFor4[2]
c4 = argFor4[3]
var s4, p4;
p4=(a4+b4+c4)/2;
s4=r4*p4;
fun = 0
return(s4);
}
function fifth(argFor5){
  a5 = argFor5[0]
  b5 = argFor5[1]
  c5 = argFor5[2]
  r5 = argFor5[3]

//5th formula
//a,b,c - стороны треугольника, r - радиус описанной окружности
var s5;
s5=(a5*b5*c5)/(4*r5);
fun = 0
return(s5);
}
