"use strict";
 /*
console.dir(document.getElementById("title"));
document.getElementById("title").style.color = "red";


const elements = document.querySelectorAll('li');
for (let i=0; i< elements.length; i++){
	elements[i].style.backgroundColor = "grey";
}

function func() {
var element = document.getElementById('test');
element.value = 'www';
element.type = 'submit';
}
function func() {
document.getElementById('test').value = 'www';
document.getElementById('test').type = 'submit';
}*/
/* function func(){
	const element = document.getElementById('test');
	alert(element.className);
} */
/* const element = document.querySelector('#root2').style.borderColor = "grey"; */

/* function func(elem) {
	alert(elem.value);
} */
/* function func() {
	const element = document.getElementById('part');
	element.innerHTML = 'change to<br> PART 1 - description';
} */
/* function func() {
	const element = document.getElementById('part');
	element.outerHTML = 'change to<br> PART 1 - description';
} */
/* function func(){
	var elems = document.getElementsByTagName('p');
	for (let i = 0; i< elems.length; i++) {
	elems[i].innerHTML = 'change to<br> PART 1 - description'}
} */
/* function func() {
	const elems = document.getElementsByTagName('p')
	elems[0].innerHTML = 'change to<br> Part1 - description';
	elems[1].innerHTML = 'change to<br> Part2 - description';
	elems[2].innerHTML = 'change to<br> Part3 - description';
	elems[3].innerHTML = 'change to<br> Part4 - description';
}
 */
/* function func(){
const elem = document.getElementById('part2');
alert (elem.getAttribute('value'));
} */
/* function func(){
const elem = document.getElementById('test');
elem.setAttribute('value','www');
}
/* /* function func() {
	const elem = document.getElementById('test');
	elem.removeAttribute('value'); */

/* function func (){
	const elem = document.getElementById('test');
	alert(elem.hasAttribute('value'));
} */
/* const forms = document.forms;
for (let i=0; i< forms.length; i++) {
	forms[i].innerHTML = '!';
} */
/* document.forms[1].innerHTML = '2'; */
/*
 function start(){
	window.timerId = window.setInterval(timer,1000);
	document.getElementById('start').disabled = true;
} */
/*  function timer(){
	const elem = document.getElementById('test');
	elem.value = parseInt(elem.value)+1;
}  */
/* let intervalId = setInterval(function(){
console.log('step 1');
}, 500);
document.getElementById('btn').addEventListener('click', () => { clearInterval(intervalId);})
 */
/* function start(){
	const timerId = window.setInterval(timer, 1000);
	alert(timerId);
} */
/* function start(){
	window.setTimeout(func, 3000);
}
function func(){
	alert('!');
} */


//здесь выводим алт при нажатии на картинку с леопардами
//we output alt when clicking on the picture with leopards

/* const elems = document.querySelectorAll('img');
for (let i = 0; i < elems.length; i++){
	elems[i].onclick = func;
}
function func(){
	alert(this.alt);
} */

//An event can be assigned a handler, that is,
//a function that will fire as soon as the event
//has occurred.
//Событию может быть назначен обработчик, то есть
//функция, которая будет запущена, как только произойдет событиеие
//произошло

/* const elem = document.getElementById('test');
elem.addEventListener('click', func2);
function func1(){
	alert('1');
}
function func2(){
	alert('2');
}

 */

 //Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.

/* var elem = document.getElementById('task');
elem.addEventListener('click', func);
var elem1 = document.getElementsByClassName('cls');
function func(){
               var sum = 0;
               for (var i = 0; i < elem1.length; i++){
               sum += +elem1[i].value;}
               var newElem = document.getElementById('sum');
               newElem.value = sum;
} */

// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
/* var elem = document.getElementById('task');
elem.addEventListener('click', func);
var elem1 = document.getElementsByClassName('num');
function func() {
                var sum = 0;
                for (var i = 0; i < elem1.length; i++) {
                               sum += +elem1[i].value;
                }
                var newElem = document.getElementById('result');
                newElem.innerHTML = sum;
}    */

//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
/* var elem = document.getElementById('num');
elem.addEventListener('blur', func);
function func() {
                var sum = 0;
                var str = elem.value;
                var arr = str.split('');
                for (var i = 0; i < arr.length; i++) {
                               sum += +arr[i];
                }
                var newElem = document.getElementById('result');
                newElem.innerHTML = sum;
}    */

//Необходимо всем input привязать событие при котором происходит следующая логика:
//по потери фокуса каждый input выводит свое value в абзац с id="item".
/* const elem1 = document.getElementById('item1');
elem1.addEventListener('blur', func);
const elem2 = document.getElementById('item2');
elem2.addEventListener('blur', func);
const elem3 = document.getElementById('item3');
elem3.addEventListener('blur', func);
function func(){
	const newElem = document.getElementById('test');
	newElem.innerHTML = (this.value);
} */

/* JavaScript. Урок №23. (addEventListener, removeEventListener, this) | Илья Дмитриев | Дзен


1 посмотрим на примере: привяжем к кнопке событие onclick,
которое будет запускать функцию func. Эта функция будет выводить
 на экран value нашей кнопки.
const elem1 = document.getElementById('test1');
elem1.addEventListener('click', func);
const elem2 = document.getElementById('test2');
elem2.addEventListener('click', func);
function func() {
	alert(this.value);
} */

/* 2 при первом клике на кнопку сработают все 3 функции и при
этом func1 и func2 отвяжутся от элемента.
При следующих кликах будет срабатывать только функция func3,
которую мы не отвязываем.
const elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);
function func1() {
	alert('1');
	this.removeEventListener('click', func1);
}
function func2() {
	alert('2');
	this.removeEventListener('click', func2);
}
function func3() {
	alert('3');
} */

/* 3 мы ко всем кнопкам привяжем функцию func. Функция будет выводить
содержимое атрибута value той кнопки, на которую нажмете.
А после этого функция func будет отвязываться от этой кнопки
с помощью removeEventListener.
И получится что каждая кнопка будет
реагировать только на первое нажатие по ней
const elems = document.getElementsByTagName('input');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);

}
function func() {
	alert(this.value);
	this.removeEventListener('click', func);
} */

/* 4 для всех input сделайте сделайте логику при которой они выводят своё value
через alert по первому нажатию.
Повторное нажатие на input не должно ничего выводить.
const elem1 = document.getElementById ('test1');
elem1.addEventListener('click', func1);
elem2.addEventListener('click', func2);
elem3.addEventListener('click', func2);
function func1() {
	alert(this.value);
	this.removeEventListener('click', func1);
}
function func2() {
	alert(this.value);
	this.removeEventListener('click', func2);
}
function func3() {
	alert(this.value);
	this.removeEventListener('click', func3);
} */

/* 5 Создайте картинки. К картинке прикрепите событие.
При клике на картинку в console.log()
появлялся ее src.
const elems = document.getElementsByTagName('img');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);

}
function func() {
	console.log(this.src);
} */

/* 6 Создайте ссылки. К ссылкам привяжите событие.
при наведении курсора на каждую ссылку в title сохраняется ее текст. */
/* const elems = document.getElementsByTagName('a')
for (let i=0; i<elems.length; i++) {
	elems[i].addEventListener('mousemove', func);
}
function func() {
	const newElem = document.getElementById('test');
	newElem.innerHTML = (this.text);
} */

/* 7 создайте две ссылки. К ссылкам привяжите события такие
при которых после наведения курсора на ссылку в
конец текста дописывался ее href в скобках.
Вышеуказанную задачу измените так чтобы,
при наведении на ссылку отвязывалось
событие с добавлением href. */
/*
const elems = document.getElementsByTagName('a')
for (let i=0; i<elems.length; i++) {
	elems[i].addEventListener('mouseover', func);
}
function func(){
            this.innerHTML = this.innerHTML + '(' + this.href + ')';
     	this.removeEventListener('mouseover', func);
}
	  */

/* 8 Создайте три абзаца с числами. После нажатия на абзац в
нем появляется квадрат числа,
которое он содержит */
/* const elems = document.getElementsByTagName('p');
for ( let i=0; i<elems.length; i++){
	elems[i].addEventListener('click', func);
}
function func(){
	this.innerHTML = this.innerHTML * this.innerHTML;
} */

/* 9 Создайте три <div>любой текст</div>. После нажатия
на каждый див он красится зеленым цветом,
при повторном красится обратно.
После каждого клика меняется фон
с одного на другой. Напишите код так,
чтобы было две функции: одна красит в зеленый цвет,
другая в желтый и они сменяли
друг друга через removeEventListener. */
/* var elems = document.getElementsByTagName('div');
for (var i=0; i<elems.length; i++) {
	elems[i].addEventListener('click', setRed);
}
function setRed(){
	this.style.background = 'red';
	this.removeEventListener('click', setRed);
	this.addEventListener('click', setGreen);
}
function setGreen (){
	this.style.background = 'green';
	this.removeEventListener('click', setGreen);
	this.addEventListener('click', setRed);
} */


/* JAVASCRIPT. УРОК №24. (CLASSLIST, CSSTEXT, TAGNAME) */

/*1 Удалим класс ggg
const elem = document.getElementById('elem');
elem.classList.remove('ggg');
 */

/* 2 зададим элементу несколько стилей */
/* const elem = document.getElementById('elem');
elem.style.cssText = 'color: red; font-size: 20px;'; */

/* 3 Выведем этот тэг
const elem = document.getElementById('elem');
document.write(elem.tagName); */

/* 4 Создайте элемент c id="item".
Добавьте ему класс newClass.
Проверьте наличие у него класса newClass */
/* const elem = document.getElementById('item')
elem.classList.contains('newClass') */

/* 5 Создайте кнопку. При нажатии на кнопу элемент должен
появиться или скрыться. В начале элемент скрыт
(это реализуется с помощью display: none),
а появляется помощью добавления класса active.
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function(){
	elem.classList.toggle('active');
});
 */
 /* 6 Создайте элемент c id ="item", красного цвета,
 размером 45px, добавьте границу. Задачу необходимо
 решить с помощью свойства cssText.
 let elem =document.getElementById('item');
 elem.style.cssText = 'color: red; font-size:45px; border: 5px solid red'; */


 /* JAVASCRIPT. УРОК №25
(CREATEELEMENT, APPENDCHILD, INSERTBEFORE, INSERTADJACENTHTML) */

/* 1 createElement позволяет создать новый элемент
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
 document.body.append(div); */

 /* 2 создадим абзац, установим ему текст и
 поместим на страницу в блок с id ="parent"  */
/*  const parent = document.getElementById('parent');
 const p = document.createElement('p');
 p.innerHTML = 'Soderjimoe abzatsa';
 parent.appendChild(p); */

/* 3 Дан ul. Разместим в нем 10 li, при этом их текстом сделаем
 порядковые номера:
 const parent = document.getElementById('parent');
 for (let i=1; i<10; i++){
	 const li = document.createElement('li');
	 li.innerHTML = i; parent.appendChild(li);
 } */

/* 4 Дан ol. Вставьте ему в конец li с текстом 'пункт'.
 const parent = document.getElementById('parent');
 const li = document.createElement('li')
 li.innerHTML = 'Point';
 parent.appendChild(li); */

 /* 5 создадим абзац и поместим его перед вторым абзацем.
 const parent = document.getElementById('parent');
 const before = document.getElementById('before');
 const p = document.createElement('p');
 p.innerHTML = 'New paragraph';
 parent.insertBefore(p,before); */

 /* 6 создайте элемент ul, а в нем li с id="elem".
 Вставьте перед элементом c id="elem"
 новую li с текстом 'Привет, мир!'. */
/*  const parent = document.getElementById('parent');
 const elem = document.getElementById('elem');
 const li = document.createElement('li');
 li.innerHTML = 'Hello world';
 parent.insertBefore(li, elem);
  */

/* 7 Способ beforeBegin:
const target = document.getElementById('target');
 target.insertAdjacentHTML('beforeBegin', '<p>New Paragraph</p>'); */

 /* 8 Способ afterEnd:
 const target = document.getElementById('target');
 target.insertAdjacentHTML('afterend', '<p>New Paragraph</p>'); */


/*  JAVASCRIPT. УРОК №26. РАБОТА С ОБЪЕКТОМ EVENT */

/* 1 Как получить объект event?
пусть у нас есть элемент, по клику на который
 выполнится функция func:
const elem = document.getElementById('elem');
elem.onclick = func;
elem.onclick = func; function func(event) {}
 */

 /* 2 Создадим квадрат. Привяжем блоку событие onmousemove
 (срабатывает при движении мышкой по элементу),
 и будем показывать координаты курсора при движении мыши: */
/*  const elem = document.getElementById('elem');
 elem.onmousemove = func;
 function func(event) {
	 this.innerHTML = event.clientX + ':' + event.clientY;
 }
  */

 /*  3 для события onclick это click, для onmouseover это mouseover и так далее.
  Доступ к типу события можно получить так - event.type: */
 /*  const elem = document.getElementById('elem');
  elem.onclick = func;
  function func(event){
  alert(event.type);
  }
 */

 /* 4 Привяжем событие к диву, но кликнем по абзацу -
 в этом случае event.target будет содержать
 конечный тег, в котором случилось событие - то есть абзац,
 а не див. Убедимся в этом с помощью tagName на примере.
 const div = document.getElementById('elem');
 div.addEventListener('click', func);
 function func(event) {
	 const target = event.target;
	 alert(target.tagName);
 } */

 /* 5 Рассмотрим пример: вводите текст в input и по мере ввода
 вы будете видеть код нажатой клавиши и саму клавишу:
 const input = document.getElementById('input');
 const result = document.getElementById('result');
 input.onkeypress = func;
 function func(event) {
	 const code = String.fromCharCode(event.keyCode);
	 const key = String.fromCharCode(event.keyCode);
	 result.innerHTML = 'Код' + code + ', клавиша' + key;
 } */

/* 6 узнать, были ли нажаты в момент события клавиши
Ctrl, Alt и Shift. Это делается с помощью свойств
 event.ctrlKey, event.altKey и event.shiftKey -
 они имеют значение true или false в
зависимости от того, была ли нажата эта клавиша
в момент события или нет.
const button = document.getElementById('button');
button.addEventListener('click', func);
function func(event) {
	if (event.ctrlKey) {
		alert('press Ctrl');
	}
	if (event.altKey) {
		alert ('press Alt');
	}
	if (event.shiftKey) {
		alert('press Shift');
	}
} */

/* 7 если событие привязывается через JavaScript -
 то его действие
 можно отменить с помощью объекта Event,
 вот так: event.preventDefault()
const link = document.getElementById('link');
link.addEventListener('click', func);
function func(event) { event.preventDefault();
alert(' You cant follow this link');
} */


/* JAVASCRIPT.УРОК №27. ВСПЛЫТИЕ СОБЫТИЙ */
/* см html
 */

/* JAVASCRIPT. УРОЕ №28. АНОНИМНЫЕ ФУНКЦИИ,
ФУНКЦИИ ВЫСШЕГО ПОРЯДКА. */

/* 1 создадим переменную element, в которую сохраним ссылку на
какой-нибудь элемент и привяжем к событию
onclick анонимную функцию:
element.onclick = function(){
	alert('!');
};
 */

/* 2 При таком варианте если посмотреть на
результат внешней функции, то увидим
исходный код внутренней функции:
 function func(){
	 return function(){
		 return '!';
	 };
 };
 alert(func()); */

 /* 3 вариант вызова внутренний функции это вызов
 внешней функции с двумя круглыми скобками: */
/*  function func(){
	 return function(){
	 return 'привет';
 };
}
alert( func()()); */


/* video YouTube function expresion (функциональное выражение) */
/* "use strict";
let showMsg = function(){
	console.log("Hellow");
};

console.log(showMsg);
console.log( typeof showMsg); */

/* 4 сейчас в функцию и go передадим в
качестве параметров разные функции и
увидим разный результат
function show1() {alert('!');};
	function show2() {alert('!!');};
function go(func) {
	func();
};
go(show1);
go(show2); */

/* function func() {
	return '!';
};

alert(func()); //результат
alert(func); //исходный код функции */


/* JAVASCIPT. УРОК №29. ЗАМЫКАНИЯ */

/* 1 понять что такое замыкания в javaScript
необходимо наглядно изучить пример.
Создадим переменную number, снаружи функции:
let number = 0;
function func() {
	number++;
	return number;
}
alert(func());
alert(func()); */

/* 2 создадим новую функцию counterNum вокруг функции func а
саму функцию func сделаем анонимной.
При этом функция counterNum будет возвращать
эту анонимную функцию.
function counterNum() {
	let number = 0;
	return function(){
		number++;
		return number;
	};
}
const counter = counterNum();
alert(counter());
alert(counter()); */

/* 3 cделаем пример через замыкание. Создадим несколько кнопок.
Сделаем так,
чтобы каждая кнопка при нажатии увеличивала свое
значение на единицу.
const buttons = document.getElementsByTagName('button');
for (let i = 0; i< buttons.length; i++) {
	buttons[i].onclick = (function(){
		let counter = 0;
		return function(){
			counter++;
			this.innerHTML = counter;
		}
	})();
} */

/* JAVASCRIPT. УРОК №30. СТРЕЛОЧНЫЕ ФУНКЦИ */

/* в старом стиле
const func = function(x) {
	return x+1;
};
alert(func(3)); */

/* в новом стиле:
let func = x => x+1;
alert(func(3)); */

/* у функции несколько параметров - их надо брать в скобки: */

/* в старом стиле
const func = function(x1, x2){
	return x1 +x2;
};
alert(func(3,4)); */

/* в новом стиле, если вообще без параметров -
то нужны пустые круглые скобки:
const func = () => 3+4;
alert(func());
 */


/*  JAVASCRIPT #20: РЕКУРСИВНЫЕ ФУНКЦИИ, ОСТАТОЧНЫЕ АРГУМЕНТЫ,
 ОПЕРАТОР РАСШИРЕНИЯ - YOUTUBE

 "use strict";
let company = {
	sales: [{name: "Иван", salary: 1000}, {name: "Михаил", salary: 600}],
	development:{
sites: [{name: "Евгений", salary: 2000}, {name: "Алексей", salary: 1800}],
internals: [{name: 'Федор', salary: 1300}]
}
};
console.log(sumSalary(company));
console.log(sumSalary(company.sales));
console.log(sumSalary(company.development));

function sumSalary(department){
if(Array.isArray(department)){
	return department.reduce((prev, current)=> prev + current.salary, 0);
}
else{
let sum = 0;
for(let prop in department) {
sum+=sumSalary(department[prop]);
}
return sum;
}
} */

/* Равенство по значению и типу в JavaScript */
/* let test1 = '3';
let test2 = '3';

if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Неравенство по значению и типу в JavaScript
let test1 = '3';
let test2 = '3';

if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---');
} */
/* Логическое И в JavaScript */
/* let num = 11;

if (num>=10 && num <=20) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Логическое ИЛИ в JavaScript */
/* let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
} */

 /* Приоритет логических операторов в JavaScript */
/* let num = 3;

if (num > 0 && num < 5 || num >
	10 && num < 20) {
	console.log('+++');
} else {
	console.log('---');
}  */

/* Инвертирование логических выражений в JavaScript */

/* let num = 3;
if ( !(num > 0 && num < 5) ) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = true;

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = 1;

if (test == true) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
} */

/* Сокращенная форма проверки на истину в JavaScript */
/* let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */
/* Не запуская код, определите, что выведется в консоль:

let test = '0';

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Сложные условия в сокращенной форме в JavaScript */
/* let test1 = false;
let test2 = false;

if (test1&&test2) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = -1;

if (test > 0) {
console.log(test);
	console.log('+++'); // эта строка внутри условия
} */

/* Конструкция else if в JavaScript */
/* let num = 29;

if (num <= 10) {
	console.log('dekada1');
} else if (num >= 10&& num <= 20) {
	console.log('decada2');
} else if (num >= 20&& num <=30) {
	console.log('decada3');
} else {
	console.log('неверное значение переменной num');
} */

/* Вложенные конструкции if-else в JavaScript */
/* Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна,
в противном случае выведите сообщение о том,
что сумма цифр двухзначна. */
/* let num = 66;
if (num < 10 || num > 99) {
        console.log ('Число меньше 10 или больше 99');
    } else {
        let num2 = num%10;      // 27/10 = остаток 7
        let num1 = (num-num2)/10;      //27-7 = 20/10 = 2
        let sum = num1+num2;
        console.log (sum);
        if (sum <= 9) {
            console.log ('Сумма цифр однозначна');
        } else {
            console.log ('Сумма цифр двузначна');
        }
    } */

	/* Конструкция switch-case в JavaScript */

/* 	let lang = 'ru';
switch (lang) {
	case (lang = 'ru'):
		console.log('рус');
	break;
	case (lang == 'en'):
		console.log('анг');
	break;
	case (lang == 'de'):
		console.log('нем');
	break;
	default:
		console.log('язык не поддерживается');
	break;
} */

/* Тернарный оператор в JavaScript  */
/* let num = 1;
let res = num >= 0 ? '1': '2';
console.log(res); */

/* Логические операции в JavaScript */
/* let a = 2 ** 4;
let b = 4 ** 2;
let result = a != b;
console.log(result); */

/* Функция confirm в JavaScript */
/* let ok = confirm('Текст вопроса');

if (ok) {
	console.log('вы ответили да');
} else {
	console.log('вы ответили нет');
} */

/* Область видимости переменных в if-else в JavaScript */
/* let age = 17;
let adult
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult); */

/* Проверка частей часа через if-else в JavaScript */
/* let min = 10;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
} */

/* Проверка длины строк и массивов в JavaScript */
/* let str = '12345';

if (str.length >= 3) {
	console.log('!');
} */

/* Проверка символов строки в JavaScript */
/* let str = '12345';

if (str[0] == 1) {
	console.log('!');
}
 */
/* let str = '12345';
let last = str[str.length - 1];

if (last == 5) {
	console.log('!');
} */

/* Проверка цифр числа в JavaScript */
/* let num = 12345;
let str = String(num);

if (str[0] == 1) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
} */

/* let num = 12345;
let first = String(num)[0];

if (first == 1 || first == 2) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Проверка остатка от деления в JavaScript */
/* let a = 10;
let b = 3;
let rest = a % b;

if (rest === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ' + rest);
} */

/* Код должен проверить, что в числе ровно две цифры:
let num = 12;
let str = String(num);
if (str.length === 2) {
	console.log(str);
} else {
	console.log('---');
} */

/* Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел: */

/* let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log(sum1);
} else {
	console.log(sum2);
} */

/* ..................ЦИКЛЫ........................ */

/* Перебор массива циклом for-of в JavaScript */
/* Давайте посмотрим на примере. Пусть дан следующий массив: */
/* let arr = [1, 2, 3, 4, 5]; */
/* Переберем этот массив циклом и выведем его элементы в консоль: */
/* for (let elem of arr) {
	console.log(elem);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
} */

/* Перебор объекта циклом for-in в JavaScript */
/* let obj = {a: 1, b: 2, c: 3}; */
/* Давайте с помощью цикла for-in выведем ключи этого объекта: */
/* for (let key in obj) {
	console.log(key); // выведет 'a', 'b', 'c'
}
 */
/*  А теперь выведем элементы:
for (let key in obj) {
	console.log(obj[key]); // выведет 1, 2, 3
} */

/* let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
	console.log(obj[key]);
} */



/* 146 Цикл while в JavaScript */
/* let i = 1;
выведем с помощью цикла while числа от одного до пяти:
while (i <= 5) {
	console.log(i);
	i++;
} */
/* let num = 500;
А теперь будем делить заданное число на 2 столько раз,
пока результат не станет меньше 10:
while (num > 10) {
	num = num / 2;
}
console.log(num); */
/* let num = 10;
Умножайте его на 3 столько раз,
пока результат умножения не станет больше 1000.
while (num<=1000){
num = num*3;
	console.log(num);
} */


/* 147 Цикл for JavaScript */
/* Давайте с помощью цикла for выведем
 последовательно числа от 1 до 9:
 */
/*  выведите в консоль нечетные числа
for (let i = 1; i <= 100; i++) {
	if (i%2!=0){
	console.log(i);
}
} */


/* 148 Цикл for для массивов в JavaScript */
/* Массивы также можно перебирать циклом for.
Давайте посмотрим, как это делается. */
/* let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length
	- 1; i++) {
	console.log(arr[i]);
}
 */
/*  let arr = [1, 2, 3, 4, 5];
 for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} */

/* Можно вывести элементы в обратном порядке: */
/* let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >=
	0; i--) {
	console.log(arr[i]);
} */

/* Выведите в консоль все элементы следующего массива,
за исключением нулевого и последнего:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i<arr.length-1; i++){
console.log(arr[i]);
} */


/* 149 Условия в циклах в JavaScript */
/* В циклах можно применять условия */
/* let arr = [1, 2, 3, 4, 5]; */
/* Выведем в консоль все элементы этого массива: */
/* for (let elem of arr) {
	console.log(elem);
} */
/* let arr = [1, 2, 3, 4, 5]; */
/* А теперь наложим условие и будем выводить только
элементы, которые являются четными числами: */
/* for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
} */
/* Выведите в консоль те элементы массива,
которые больше 3-х, но меньше 10.
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
	if (elem>3 && elem<10){
		console.log(elem);
}} */


/* 150 Накопление чисел в циклах JavaScript */
/* Давайте с помощью цикла найдем сумму целых чисел от 1 до 100. */
/* let res = 0;
for (let i = 1; i <= 100; i++) {
	res = res + i;
}
console.log(res); // искомая сумма */

/* Можно упростить решение через оператор +=: */
/* let res = 0;
for (let i = 1; i <= 100; i++) {
	res += i;
}
console.log(res); */
/* Найдите сумму нечетных чисел от 1 до 99.
let res =0;
for (let i =1; i<=99; i=i+2) {
	res += i;
}
console.log(res); */


/* 151 Накопление элементов массивов в циклах JavaScript */
/* Давайте с помощью цикла найдем сумму элементов массива. */
/* let arr = [1, 2, 3, 4, 5];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res); // искомая сумма */
/* Найдите сумму  элементов, являющихся четными числами.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	if (elem % 2 === 0) {
		res += elem;

	}
}console.log(res); */
/* Найдите сумму квадратов элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let elem of arr) {
	let res = elem**2;
	sum+=res;
}console.log(sum);
 */
/*  Найдите произведение элементов этого массива.
let arr = [5, 123, 556, 78, 3];
let total = 1;

for (let i = 0; i < arr.length; ++i) {
    total *= arr[i];
}
console.log(total); */


/* 152 Формирование строк через циклы в JavaScript */
/* Давайте для примера сделаем строку, заполненную десятью буквами 'x'
let str = '';
for (let i = 0; i < 10; i++) {
	str += 'x';
}
console.log(str); // выведет 'xxxxxxxxxx' */
/* А теперь сделаем строку '12345'. */
/* let str = '';
for (let i = 1; i <= 5; i++) {
	str += i;
}
console.log(str); // выведет '12345' */
/* С помощью цикла сформируйте строку '987654321'.
let str = '';
for (let i = 9; i > 0; i--) {
	str += i;
	}
console.log(str); */
/* С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'. */
/* let str = '';
for (let i = 1; i < 10; i++) {
	str += -[i];
	}
console.log(str+'-');  */


/* 153 Цифры числа при переборе циклом JavaScript */
/* чтобы число выводилось в консоль, если его первая цифра равна 1 или 2.
for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	if (str[0] === '1' || str[0] === '2') {
		console.log(i);
	}
} */
/* Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for (let i = 10; i <1000; i++){
	let str = String(i);
	console.log(str[0])
}
 */
/*  Переберите циклом числа от 10 до 1000 и выведите в
 консоль сумму первой и второй цифры каждого числа.
 for (let i = 10; i <1000; i++){
	let str = String(i);
	let sum =str[0]+str[1];
	console.log(sum);
} */
/* числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i < 1000; i++){
	let str = String(i);
	if(parseInt(str[0])+ parseInt(str[1]) === 5){
	console.log(i);
}
	} */


/* 154 Инструкция break в JavaScript */
/* есть ли в массиве число 3.
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem === 3) {
		console.log('есть');
	}
} */
/* Итак, давай завершим цикл, как только нам встретится число 3: */
/* let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break; // выйдем из цикла
	}
} */
/* Дан массив с числами. Найдите сумму элементов, расположенных от начала
массива до первого отрицательного числа. */
/* let arr = [6, 1, 2, 3, -4, 5, 0];
let sum = 0;
for (let i = 0; i < arr.length && arr[i] >= 0; i += 1) {
  sum += arr[i];
}
console.log('summ ' + sum) */
/* Найдите позицию первого числа 3 в этом массив */
/* let arr = [7, 6, 1, 2, 3, -4, 5, 0];
for (let i=0; i<arr.length; i++){
	if(arr[i]===3){
		console.log(i);
		break;
	}
}
 */
 /* начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100
 let sum = 1;
 for(let i=1; i<100; i++){
	 sum+=i;
	 if(sum>100){
		  console.log(i);
		 break;
	 }
 }

 */


 /* 155 Инструкция continue в JavaScript */

/*  Пусть у нас дан массив с числами. Давайте переберем его циклом и числа,
 которые делятся на 2, возведем в квадрат и выведем в консоль,
 а числа, которые делятся на 3, возведем в куб и выведем в консоль */
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;

	if (elem % 2 === 0) {
		result = elem * elem;
		console.log(result);

	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
		console.log(result);

	}
}
 */
/*  добавив к нашему if еще условие else, которое будет срабатывать для элементов,
 не делящихся на 2 и 3, и вызовем там инструкцию continue,
 которая сразу же будет перебрасывать нас на новую итерацию цикла: */
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr) {
	let result;
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла
	}
	console.log(result); // выполнится, если делится на 2 или 3
} */


/* 156 Вложенные циклы в JavaScript */
/*  выведем на экран строку:111222333444555666777888999
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
} */

/* выведите на экран следующую строку:11 12 13 21 22 23 31 32 33 */
/* for (let i=1; i<4; i++){
	for (let j=1; j<4; j++){
		document.write(i, j+' ');
	}
} */


/* 157 Область видимости в циклах JavaScript */
/* При необходимости можно объявить переменную снаружи цикла -
тогда она будет доступна как внутри цикла, так и снаружи: */
/* let num; // объявим переменную снаружи цикла
for (let i = 1; i <= 9; i++) {
	num = 3; // установим ей значение
}
console.log(num); // выведет 3 */


/* 158 Вложенные циклы и область видимости в JavaScript */
/* переменные, объявленные во внешнем цикле, будут доступны во внутреннем
for (let i = 0; i <= 9; i++) {
	let num = 3;

	for (let j = 0; j <= 9; j++) {
		console.log(num); // выведет 3
	}
} */


/* 159 Заполнение массива в JavaScript */
/* Для этого следует использовать метод push: */
/* Дан массив с числами. Переберите его циклом и
запишите в новый массив только положительные из чисел.
let arr = [1, 2, -3, 4, -5, 6, -7];
let arr1 = [];
for (let elem of arr){
if(elem>=0){
	arr1.push(elem);
}
}
console.log(arr1);

 */

 /* 160 Изменение массива в цикле JavaScript */
 /* Давайте для примера умножим элементы массива на 2:
 let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * 2;
}
console.log(arr); */

/* 161 Заполнение объектов через цикл в JavaScript */
/* сделаем объект, взяв ключи для этого объекта из первого массива,
а значения - из второго
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];

	obj[key] = value;
}
console.log(obj); */
/* или так
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
	obj[keys[i]] = values[i];
}
console.log(obj); */

/* Переберите этот объект циклом и запишите в новый объект те элементы,
которые являются четными числами.
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};
for (let i in obj1) {
if (obj1[i] % 2 === 0) {
    obj2[i] = obj1[i];
}
}
console.log(obj2); */

/* Переберите этот объект циклом и создайте
новый объект так, чтобы его ключами
стали элементы старого объекта,
а значениями - ключи старого объекта.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
	let arr1 = [];
let arr2 = [];
for (let key in obj) {
arr1.push(key);
arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2); */

/*162  Изменение объектов через цикл в JavaScript */


/* Объекты также можно менять в цикле. */
/* let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
	obj[key] = obj[key] * 2;
}
console.log(obj); */

/* Переберите этот объект циклом и возведите каждый элемент
 этого объекта в квадрат. */
/*  let obj = {x: 1, y: 2, z: 3};
 for (let key in obj) {
	obj[key] = obj[key] * obj[key];
}
console.log(obj);
 */

/*  Переберите этот объект циклом и увеличьте
 каждый элемент этого объекта на единицу. */
/*  let obj = {x: 1, y: 2, z: 3};
 for (let key in obj) {
	obj[key] = obj[key]+1;
}
console.log(obj) */


/* 163 Работа с флагами в JavaScript */

/* переберем все элементы нашего массива и ифом будем спрашивать -
равен ли текущий элемент значению 3. Если равен - выведем '+++': */
/* let arr = [1, 2, 3, 4, 5, 3];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++');
		break;  // завершим цикл с помощью break, если элемент уже найден:
	}
}
 */
/*  Распространенным заблуждением будет добавить else к нашему ифу - в этом случае '---'
 будет выводиться на все элементы, не являющиеся 3:
 let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++'); // выведет на элементе 3
	} else {
		console.log('---'); // выведет на элементах 1, 2, 4, 5
	}
} */

/* флаг - это такая переменная, которая может принимать
 два значения: true или false.
 сли она равна true, то в массиве есть элемент 3,
 а если false, то такого элемента нет.
 Изначально поставим переменную flag в значение false -
 то есть будем считать, что элемента 3 в массиве нет */
/*  let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента 3 нету в массиве
for (let elem of arr) {
	if (elem == 3) {
		flag = true; // элемент есть - переопределим переменную flag
		break; // выйдем из цикла
	}
} */
/* после цикла переменная flag могла остаться false или могла
сменить свое значение на true, если цикл обнаружил в массиве 3: */
/* Теперь после цикла мы можем сделать иф, который посмотрит на
переменную flag и выведет на экран '+++' или '---' */
/* if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Проверьте, что в этом массиве есть элемент 'c'.
Если есть - выведите '+++', а если нет - выведите '---'. */
/* let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false; // считаем, что элемента 3 нету в массиве
for (let elem of arr) {
	if (elem == 'c') {
		flag = true; // элемент есть - переопределим переменную flag
		break; // выйдем из цикла
	}
}
		if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
} */

/* Напишите код, который выводит все простые числа из интервала от 2 до n.
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
} */


/* 164 Советы по написанию кода циклов в JavaScript */

/* Пусть для примера у вас дан массив с числами: */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

/* Пусть перед вами стоит задача взять из этого массива те элементы,
которые делятся на 3 и найти их сумму. */

/* Первым маленьким шагом я бы предложил просто перебрать элементы массива циклом и
вывести их в консоль.
Сделаем это и убедимся, что все работает: */
/* for (let elem of arr) {
	console.log(elem);
} */

/* Давайте теперь отделим те элементы, которые делятся на 3.
Выведем их в консоль и убедимся, что мы получаем правильные элементы: */
/* for (let elem of arr) {
	if (elem % 3 === 0) {
		console.log(elem); // выведет 3, 6, 9
	}
} */
/* Теперь следующим шагом мы можем найти сумму искомых элементов: */

/* let sum = 0;

for (let elem of arr) {
	if (elem % 3 === 0) {
		sum += elem;
	}
}

console.log(sum); */

/* Возьмите из этого массива те элементы,
 у которых первая цифра 1 или 2, и найдите их сумму. */
/*
let arr = [10, 23, 30, 40, 21, 32, 51, 56];
let summ = 0
for(let i=0; i<=arr.length; i++){
    let num = String(arr[i]) //переделали массив в строку
    let char= num[0] //присвоили первый символ переделанного массива в строку в переменную
    if(char=="1" || char=="2"){
        summ += arr[i]
    }
}
console.log(summ) */


/* 165 Советы по отладке кода на примере циклов в JavaScript */

/* Пусть для примера перед вами стояла задача
перебрать массив с двухзначными числами и найти числа,
 у которых первая цифра на один больше второй.
 Пусть для простоты
в массиве хранятся числа в виде строк. */

/* let arr = ['21', '32', '34', '43', '45', '54',
	'55'];
let sum = 0;

for (let elem of arr) {
	if (elem[0] === elem[1] + 1) {
		sum += elem;
	}
}
console.log(sum); // выдает 0 */

/* В результате сразу становится видным, что второе
слагаемое двухзначное. Легко понять, что это из-за того,
 что единица прибавляется как строка.
Исправим проблему: */

/* let arr = ['21', '32', '34', '43', '45', '54',
	'55'];
let sum = 0;

for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) { // исправляем
		sum += elem;
	}
}

console.log(sum); // '021324354' */
/*
После исправления мы уже видим,
что в переменной sum что-то появилось,
хотя и некорректное. Видно, однако,
что там лежит то, что нам нужно,
но оно сложилось в виде строк, а не чисел.
 Исправим проблему: */
/* let arr = ['21', '32', '34', '43', '45', '54',
	'55'];
let sum = 0;

for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) {
		sum += +elem; // исправляем
	}
}

console.log(sum); // все работает */

/* Исправьте ошибки, допущенные в следующем коде:

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (elem[0] === '1' && elem[0] === '2') {
		sum += +elem;
	}
}

console.log(sum); */

/* исправление
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	let str = String(obj[elem]);
	if (str[0] === '1' || str[0] === '2') {
		sum += +str;
	}
}

console.log(sum);
 */

/*  7 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */


/* 8 let arr = ['1', '2', '3', '4', '5'];
let sum = +'';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15
 */

/* 9 let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15
 */

/* 10 let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length-1; i++) {
	sum += +arr[i];

}
console.log(sum); */

 /* 13 /* Код должен возвести в квадрат каждый элемент массива: */

/* let arr = [1, 2, 3, 4, 5];
let res = 0;
for (let elem of arr) {
	res = elem ** 2;
	console.log(res);
}
 */

/*14  Код должен заполнить массив числами от 1 до 5: */

/* let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);

}

console.log(arr); */

/* Код должен найти сумму элементов объекта: */

/* let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	let str = String(obj[elem]);
	sum += +str;

}
console.log(sum); */
/*
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += obj[key];
}
console.log(sum); */

/* Код должен проверить, есть ли в массиве число 3 или нет: */

/*  let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem === 3) {
		flag = true;
		break;
	}
}
	if
		(flag === true){
			console.log('+++');
	}
	else{
console.log('---');
} */


/* Код должен вывести только четные элементы из массива: */

/* let arr = [1, 2, 3, 4, 5];
let elem = ''
for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
} */

/* Код должен записать в новый массив только нечетные элементы старого массива: */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];
for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res); */


/* 167 Отработка циклов JavaScript */

/* Выведите с помощью цикла столбец чисел от 1 до 100.
for(let i=1; i<=100; i++){
console. log (i);}
 */

/* Выведите с помощью цикла столбец четных чисел от 1 до 100.
for(let i=1; i<=100; i++)
{if (i%2==0){
console. log (i);}} */

/* Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i=1; i<=10; i++){
arr.push('x');}
	console.log (arr); */

/* Заполните массив числами от 1 до 10 с помощью цикла.
let arr = [];
for (let i=1; i<=10; i++){
arr.push(i);}
	console.log (arr); */

/* Дан массив с числами. С помощью цикла выведите только те элементы массива,
которые больше нуля и меньше 10-ти.
	let arr = [-5, 0, 1, 2, 5, 10, 15];
for (let elem of arr){
	if(elem>0 && elem<=10){
console.log (elem)}} */

/* 	Дан массив с числами. С помощью цикла проверьте,
что в нем есть элемент со значением 5.
	let arr = [-5, 0, 1, 2, 5, 10, 15];
for (let elem of arr){
	if(elem == 5){
console.log (elem)}} */

/* Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [-5, 0, 1, 2, 5, 10, 15];
let sum = 0;
for (let elem of arr){
	sum += +elem;
}console.log (sum); */

/* Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [-5, 0, 1, 2, 5, 10, 15];
let sum = 0;
for (let elem of arr){
	sum += +(elem**2);
};console.log (sum) */

/* Дан массив с числами. Найдите среднее арифметическое его элементов.
1. Инициализируем массив с числами
2. Создадим переменную для суммирования элементов массива
3. С помощью цикла переберем элементы массива
4. Найдем сумму элементов массива
5. В консоль выведем делимое. Для нахождения количества элементов массива обратимся к длине массива.
Код
let arr = [1, 5, 8, 14, 52, 48];
let result = 0;
for (let elem of arr) {
result += elem;
}
console.log(result/arr.length); */

/* Напишите скрипт, который будет находить факториал числа.
Факториал - это произведение всех целых чисел от единицы до заданного числа. */

/* function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120 */

/* let n = 5;
function factorial(n) {
    let ans = 1;

    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

console.log(factorial(n)); */
/* Заполните массив числами от 10 до 1 с помощью цикла. */
/* let arr = [];
for (let i=10; i>0; i--){
arr.push(i);}
	console.log (arr); */

	/* Дан массив с числами. Числа могут быть положительными и отрицательными.
	Найдите сумму положительных элементов массива. */

/* let arr = [1, -3, 6, 3, -5, 8];
let sum=0;
for (let elem of arr){
	if(elem > 0){
sum+=elem;}

}console.log(sum); */

/* Дан массив числами, например:
Выведите на экран только те числа из массива,
 которые начинаются на цифру 1, 2 или 5. */
/*
let arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
	let str = String(elem);
	if (str[0] == 1 || str[0] == 2 || str[0] == 5)
	console.log(str);
}
 */
/*  Дан массив с числами.
Выведите элементы этого массива в обратном порядке */
/* let arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length -1; i >= 0; i--) {
console.log(arr[i]);
} */

/* Дан массив с числами. С помощью цикла выведите на
 экран все элементы, значение которых совпадает
с их порядковым номером в массиве.
 */
/* let arr = [10, 1, 30, 50, 235, 3000];
for (let i = 0; i <= arr.length-1; i++) {
if (arr[i] === i){
console.log(i); //выведет 1
}
}
 */
/* Дан массив с числами. С помощью цикла for и функции document.write
 выведите каждый элемент массива с новой строки.
 Используйте для этого тег br.
 */
/* let arr = [10, 1, 30, 50, 235, 3000];
for (let i = 0; i <= arr.length-1; i++) {
document.write(arr[i]+'<br>');} */

/* Дан массив с числами. С помощью цикла for и функции document.write
 выведите каждый элемент массива в отдельном абзаце.
let arr = [10, 1, 30, 50, 235, 3000];
for (let i = 0; i <= arr.length-1; i++) {
document.write('<p>'+arr[i]+'</p>');} */

/* Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а выходные дни выведите жирным. */
/* let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let week = '';
for (let i = 0; i <= arr.length-3; i++) {
week += arr[i] + ' ';
}
document.write(week + '<b>' + 'Saturday' +
'</b>' + '<b>' + 'Sunday' + '</b>');
 */
/* let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write(arr[i] + '<b>' + ' ' + '</b>');
    } else
        document.write(arr[i] + ' ');
    }

} */
/* Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а текущий день выведите курсивом.
Номер текущего дня должен храниться в переменной day.
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = arr[0];
let week = arr[1];
for (let i = 2; i < arr.length; i++) {
  week += arr[i] + '';
}
document.write('<i>' + day + '</i>' + week); */

/* Дан следующий объект с работниками и их зарплатами:
Увеличьте зарплату каждого работника на 10%.
только тем работникам, у которых она меньше или равна 400.
 */
 /* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,

};
	let str;
for (let key in obj) {
	if(obj[key]<=400) {
	str = obj[key]+ obj[key]*0.1;
	console.log(str);
} } */

/* С помощью этих массивов создайте новый объект,
сделав его ключами элементы первого массива,
а значениями - элементы второго. */
/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i <= 4; i++) {
	let key = arr1[i];
	let obj1 = arr2[i];
	obj[key] = obj1;
}
console.log(obj);  */

/* Дан следующий объект:
Найдите сумму ключей этого объекта и поделите ее на сумму значений. */

 /* let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0,
    sum_elem = 0;
let res = 0;
for (let key in obj) {
 key = +key;
  sum += key;
  sum_elem +=obj[key];
  res = sum / sum_elem;

}
 console.log(res); */

/*  Запишите ключи этого объекта в один массив, а значения - в другой. */
/*  let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e':
	5};
let arr1 = [];
let arr2 = [];
for (let key in obj) {
arr1.push(key);
arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2); */

/* Запишите в новый массив элементы,
 значение которых начинается с цифры 1 или цифры 2.
То есть у вас в результате получится вот такой массив: */
/* let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

for (let elem in obj) {
	let str = String(obj[elem]);
	if (str[0] === '1' || str[0] === '2') {
		console.log(str);
	}
}
 */
/*  Создайте из этого массива следующий объект:
{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; */
 /* let arr = ['a', 'b', 'c', 'd', 'e'];
 let arr2 = [1, 2, 3, 4, 5];
 let obj = {};
 for (let i = 0; i <= 4; i++) {
	let key = arr2[i];
	let obj1 = arr[i];
	obj[key] = obj1;
}
console.log(obj); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
obj[arr[i]] = arr2[i];
}
console.log(obj);
 */

 /*168 Многомерные массивы в JavaScript */

 /* Дан следующий массив:
Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'. */
/* let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
 console.log(arr[0][0]); */

/* Дан следующий массив:
Обращаясь к каждому элементу массива найдите сумму всех его элементов. */
/* let arr = [[1, 2], [3, 4], [5, 6]];
const res = arr.flatMap(elem => elem.reduce((acc, val) => acc + val, 0));
console.log(res);
  */


/* 169  Трехмерный массив в JavaScript
  */
 /* Дан следующий массив:
Обращаясь к каждому элементу массива найдите сумму всех его элементов. */
/* let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
/*Вызовем метод flat() с аргументом Infinity и сделаем его плоским*/
/* let sum = 0;
arr = arr.flat(Infinity)
for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
}
console.log(sum); */


/* 170 Произвольные массивы в JavaScript */


/* Дан следующий массив:
Вручную, без цикла, найдите сумму элементов этого массива */
/* let arr = [
[1, 2, 3, [4, 5, [6, 7]]],
 [8, [9, 10]]
 ];
let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] +
arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] +
arr[1][0] + arr[1][1][0] + arr[1][1][1]
console.log(sum) */
/* let arr = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]]
];
let sum = 0;

arr = arr.flat(Infinity)

for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
}

console.log(sum);
 */


/*171  Перебор многомерных массивов в JavaScript */


/* Давайте выведем все его элементы в консоль.
Для этого нам необходимо запустить два вложенных друг в друга цикла:
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9,
	10]];

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}

 */

/*  Дан двухмерный массив с числами:
С помощью вложенных циклов найдите сумму элементов этого массива. */
/* let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
	sum += +elem;}
}
		console.log(sum);
 */

/*  Дан трехмерный массив с числами:
С помощью вложенных циклов найдите сумму элементов этого массива. */
/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
		for (let el of elem){
	sum += +el;}
}
}
		console.log(sum); */


/* 172 Перебор через обычный for в JavaScript */


/* Массивы также можно перебирать не через цикл for-of, а через обычный for: */
/* let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9,
	10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
 */

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
	for (let k = 0; k < arr[j].length; k++){
		sum += arr[i][j][k]

	}
}
}console.log(sum); */

/* 173 Заполнение многомерных массивов JavaScript */

/* Пусть теперь мы хотим в цикле создать
 какой-нибудь многомерный массив с числами.
 Решим поставленную задачу, применив два вложенных цикла.
 Внешний цикл будет создавать подмассивы,
 а внутренний - заполнять эти подмассивы числами: */
/* [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}
console.log(arr);
 */
/* Сформируйте с помощью двух вложенных циклов следующий массив: */
/*
[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3,
	4, 5]]
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1);
}}
console.log(arr); */

/* [
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
]
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i].push('x');
}}
console.log(arr); */

/* Сформируйте с помощью трех вложенных циклов следующий массив:
let arr = [];
for(let i = 0; i < 3; i++) {
arr[i] = [];

 for(let j = 0; j < 2; j++) {
 arr[i].push([]);

  for(let k = 0; k < 5; k++) {
  arr[i][j][k] = k+1;
  }
 }
}
console.log(arr) */


/* 174 Проблемы при заполнении многомерных массивов в JavaScript */
//Давайте рассмотрим следующий код:

/* let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // обратите внимание на эту строчку В этом коде важное место занимает создание пустого подмассива.

	for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr); */


/* 175 Заполнение многомерных массивов по порядку в JavaScript */

/* В предыдущих примерах все числа в подмассивах были одинаковыми.
Давайте теперь сделаем так, чтобы числа возрастали, вот так:

Для этого нужно сделать специальную переменную-счетчик,
которая будет увеличивать свое значение на 1 при каждой
итерации внутреннего цикла. Значение этого счетчика мы и
будем записывать в массив, вот так: */

/* [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1; // счетчик

for (let i = 0; i < 3; i++) {
	arr[i] = [];

	for (let j = 0; j < 3; j++) {
		arr[i].push(k); // записываем счетчик
		k++; // увеличиваем счетчик
	}
}
console.log(arr); */

/* Можно упростить код, сделав увеличение счетчика после присваивания: */
/* let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];

	for (let j = 0; j < 3; j++) {
		arr[i].push(k++);
	}
}

console.log(arr); */

/* Сформируйте с помощью двух вложенных циклов следующий массив:
let arr = [];

for (let i = 0, k = 1; i < 4; i++) {

	arr[i] = [];

	for (let j = 0; j < 3; j++) {

		arr[i].push(2*k++);
	}
}

console.log(arr);
 */

/* Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
[[[1, 2], [3, 4]], [[5, 6], [7, 8]]] */
/* let arr = [];
let k = 1;
for(let i = 0; i < 2; i++) {
arr[i] = [];

 for(let j = 0;  j < 2; j++) {
 arr[i].push([]);
for(let m = 0;  m < 2; m++){
  arr[i][j].push(k);
  k++;
}
 }
}
console.log(arr) */

/* let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];

	for (let j = 0; j < 3; j++) {
		arr[i].push(k);
		k++;
	}
}

console.log(arr); */


/* 176 Многомерные объекты в JavaScript */
/* Многомерными могут быть не только массивы, но и объекты, вот пример: */

/* let obj = {
	a: {
		key1: 'a1',
		key2: 'a2',
		key3: 'a3',
	},
	b: {
		key1: 'b1',
		key2: 'b2',
		key3: 'b3',
	},
	c: {
		key1: 'c1',
		key2: 'c2',
		key3: 'c3',
	},
}
console.log(obj['a']['key1']); // выведет 'a1'
console.log(obj.a.key1); // Можно также обращаться к элементам как к свойствам:

console.log(obj['a'].key1); // Можно комбинировать оба способа:
console.log(obj.a['key1']); // выведет 'a1' */

/* Найдите сумму элементов приведенного объекта.
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
	let sum = (obj['key1'].key1)+(obj['key1'].key2)+(obj['key1'].key3)+
	(obj['key2'].key1)+(obj['key2'].key2)+(obj['key2'].key3)+
	(obj['key3'].key1)+(obj['key3'].key2)+(obj['key3'].key3)

console.log(sum); */


/* 177 Перебор многомерных объектов в JavaScript */
/*  Пусть дан следующий двухмерный объект: */
//Давайте выведем все его элементы на экран.
// Для этого нам необходимо запустить два вложенных друг в друга цикла for-in:
/* let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
for (let key in obj) {
	let subObj = obj[key];

	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
}
 */
/*  Используя циклы, найдите сумму элементов этого объекта.
 let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum=0;
for (let key in obj) {
	let subObj = obj[key];

	for (let subKey in subObj) {
		sum += +subObj[subKey]

	}
}console.log(sum); */

/* let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let sum=0;
for (let key in obj) {
	let subObj = obj[key];
	for (let subKey in subObj){
		let subObj2 = subObj[subKey]
	for (let subKey in subObj2) {
		sum += +subObj2[subKey]
	}
	}
}console.log(sum)
 */

/* 178 Многомерные структуры в JavaScrip */

/* Можно комбинировать многомерные массивы и объекты, создавая различные структуры.
Давайте, к примеру, сделаем объект, содержащий внутри себя массивы: */
/* let days = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб',
		'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st',
		'sn'],
};
//Выведем какие-нибудь элементы из этого объекта:
console.log(days['ru'][0]); // выведет 'пн'
console.log(days['en'][2]); // выведет 'wd' */

/* Выведите на экран первого студента из третьей группы.
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]); */

/* 179 Перебор многомерных структур JavaScript */

/* Перебор многомерных структур JavaScript
Давайте выведем на экран имена всех студентов,
перебрав наш объект двумя вложенными циклами.
Как вы видите, у нас объект с массивами.
Это значит, что первый цикл должен быть по объекту, а второй - по массивам.
То есть первый цикл будет for-in, а второй - for-of, вот так: */
/* let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};
for (let group in students) {
	for (let name of students[group]) {
		console.log(name);
	}
} */
/* let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let number in data) {
	for (let data1 of data[number]) {
		console.log(data1)
}} */

/* let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let elems of data) {
	for (let number in elems) {
	console.log(elems[number]);

}} */

/* let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for (let elems of data) {
	for (let number in elems) {
		for( let el of elems[number]){
		console.log(el);
		}

}}  */

/* 180 Массив объектов в JavaScript */

/* Пусть у нас есть следующий массив с юзерами
Давайте переберем всех юзеров и выведем в консоль их имена и фамилии.
При переборе массива объектов как правило используют только один цикл по массиву,
а внутри него к объектам обращаются по ключам. Сделаем это: */

/* let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];
for (let user of users) {
	console.log(user.name + ' ' + user.surn);
}
 */
/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum =0;
for (let employee of employees) {

		sum+= +employee.salary;
}
	console.log (sum) */

	/* Выведите на экран сумму зарплат тех работников,
	возраст которых равен или более 30 лет.
	let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sum = 0;
for (let employee of employees) {
	if (employee.age >=30){
		sum+= +employee.salary;
}	}
	console.log (sum) */


	/*181 Ключи из переменных в многомерных структурах JavaScript */

	/* Пусть дан следующий объект:
	Давайте выведем какой-нибудь элемент из нашего объекта, например, элемент 'чт': */
	/* let obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб',
		'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st',
		'sn'],
}let obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб',
		'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st',
		'sn'],
};

console.log(obj['ru'][3]);
Пусть теперь язык и номер дня хранятся в переменных:

let lang = 'ru';
let day = 3;
	 */
	/* Выведем с помощью наших переменных какой-нибудь день недели: */
/* 	let obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб',
		'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st',
		'sn'],
};

let lang = 'ru';
let day = 3;
console.log(obj[lang][day]); */

/* Дан следующий объект с названиями месяцев:
Даны также следующие переменные:
Выведите на экран название месяца, соответствующее значениям переменных lang и month. */
/* let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'en'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
console.log(months[lang][month]); */
	/*
	let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let years = '2018';
let month = 12;
let day = 30;


console.log (affairs[years][month][day]); */
/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj['key2']['key4']); */


/* 182 Добавление элементов в многомерные массивы JavaScript */

/* 	Пусть у нас есть вот такой массив с юзерами:
	Давайте добавим в этот массив еще одного юзера.
	Для этого параметром метода push передадим новый объект с юзером: */
	/* let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];
users.push({
	name: 'name4',
	surn: 'surn4',
});
console.log(users); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
	employees.push({
	name: 'name4',
	salary: 600,
	age: 36,
	})
	console.log(employees); */

/* 183	Добавление элементов в многомерные объекты JavaScript */

/* Пусть у нас дан следующий объект со студентами:
	Давайте добавим еще одного студента в первую группу:
	сделаем еще одну, четвертую группу и добавим в нее студента*/
	/* let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};
students.group4 = [];
students.group1.push('student14');
students.group4.push('student41');
console.log(students) */

/* Сделайте четвертую группу, в ней сделайте подгруппу и
 добавьте в нее двух новых студентов.
let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
students.group4 = [];
students.group4.subgroup41 = [];
students.group4.subgroup41.push('student441', 'student442')
console.log(students)
	 */

/* 184 Степень и корень в JavaScript	 */

/* //Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));
	 */

	/* //Найдите квадратный корень из 245.
	console.log(Math.sqrt(245)); */

/* Дан следующий массив:
Найдите квадратный корень из суммы кубов его элементов.
Для решения воспользуйтесь циклом for. */
/* let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
let math1 = 0
for (let i=0; i<arr.length; i++){
let pow1 = 	Math.pow(arr[i],3);
sum+= pow1;
 math1 = Math.sqrt(sum)
}console.log(math1) */


/* 185 Функции округления в JavaScript */

/* //Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let a = Math.sqrt(379);
console.log(a.toFixed(2)); */

/* Найдите квадратный корень из 587.
Округлите результат в большую и меньшую стороны,
запишите результаты округления в объект с ключами 'floor' и 'ceil' */

/* let obj = {};
let a = Math.sqrt(587);
let ceil = Math.ceil(a);
let flor = Math.floor(a);

let key1 = 'ceil';
let key2 = 'flor';
obj[key2] = flor;
obj[key1] = ceil;
console.log(obj); */

/* 186 Экстремальные числа в JavaScript */

/* Найдите минимальное и максимальное число.
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10)); */


/* 187 Рандом в JavaScript */

/* Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); */

/* С помощью цикла заполните массив 10-ю случайными целыми числами.
for (let i =0; i<10; i++){
console.log(Math.random());} */

/* 188 Модули в JavaScript */

/* Даны переменные a и b. Найдите модуль разности a и b.
Проверьте работу скрипта самостоятельно для различных a и b. */
/* let a = 7;
let b = 10;
console.log(Math.abs(a-b)); */


/* 189 Регистр символов в JavaScript */

/* let str = 'js';
console.log(str.toUpperCase());
let str2 = 'JS';
console.log(str2.toLowerCase()); */


/* 190 Вырезание строк в в JavaScript */

/* Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript'
тремя разными способами (через substr, substring, slice). */

/* let str = 'я учу javascript!';
let sub = str.substr(2, 14);
console.log(sub); */

/*let str = 'я учу javascript!';
let sub = str.substring(2, 16);

console.log(sub);*/

//  191 Поиск по строкам в JavaScript


// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

// let str = prompt();// всё что вы введёте
//     let num5 = str.indexOf('http://')
//     if(num5==0){
//         console.log('+++');
//     }
//     else{
//             console.log('---');
//         }
//     //2 задача
//     let str2 = prompt();// всё что вы введёте
//     let num6 = str.lastIndexOf('.html')
//     if(num6 !==0 && num6 <=str.length-5 ){
//         console.log("+++");
//     }


//  192 Замена частей строки в JavaScript

// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.

// let str = '1-2-3-4-5';
// let newstr = str.replace(/-/g, '.');//c помощью рег выраж /-/g
// console.log(newstr);


// 193 Части строк в JavaScript

// Дана строка '1-2-3-4-5'. С помощью метода split
// запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);


// Дана строка '12345'.
// С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = '123456';
// let arr = str.split('');
// console.log(arr);

// С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);


// 194 Граничные элементы в JavaScript

// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран первый элемент этого массива.
// let arr = [1, 2, 3];
// let elem = arr.shift();
// console.log(elem);


// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран последний элемент этого массива.
// let arr = [1, 2, 3, 4];
// let del = arr.pop();
// console.log(del);

// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:
// [1, 2, 3]
// let arr = [1, 2, 3, 4, 5,];
// let sub = arr.slice(0, 3);
// console.log(sub);


// 196 Вырезание массивов в JavaScript


// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// 197 Поиск по массивам в JavaScript

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Проверьте, есть ли в этом массиве число 3.
//  let arr = [1, 2, 3, 4, 5];
//  let res = arr.includes(3);
//  console.log(res);

// Давайте найдем элемент массива, длина которого равна 2:
// let arr = ['abc', 'defg', 'kl', 'mn'];
// let res = arr.find(function(elem){
// 	return elem.length == 2;
// });
// console.log(res);

// 198 Массив ключей объекта в JavaScript
// Дан объект:
// let obj = {a: 1, b: 2, c: 3};
// Получите массив его ключей.
// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj));

// Код должен найти сумму цифр числа:
// // let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum);

// Код должен найти произведение цифр числа:
// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= Number(digit);
// }
// console.log(prod);

// 200 Основы работы с пользовательскими функциями в JavaScript

// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100
// function func(n){
// 		let sum = 0;
// 		for( let i=1; i<n; i++){
// 			sum +=i;
// 		}

// 		console.log(sum)
// 	}
// 	func(100);


// 201 Параметры функций в JavaScript

// Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
// function func(num){
// 	console.log(num**3);
// }
// func(3)

// Сделайте функцию, которая параметром принимает число и проверяет,
// положительное это число или отрицательное.
//  В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
// function func(num){
// 	if (num > 0){
// 		console.log('+++');
// 	}
// 	else{
// 		console.log('---');
// 	}
// }
// func(-5);


// 202 Несколько параметров функций в JavaScript
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// function  func(params1, params2, params3) {
// 	console.log(params1 + params2 + params3)
// }
// func(1, 2, 3)

// 203 Параметры-переменные функций в JavaScript
// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму.
// Пусть даны 3 переменные с числами:
// С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function func(num1, num2, num3){
// 	console.log(num1 + num2 + num3)
// }
// func (param1, param2, param3);


// 204 Необязательные параметры в JavaScript
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// // Эта функция вызывается следующим образом:
// func(2, 3);
// func(3);
// func()


// 205 Инструкция return в JavaScript
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа.
// С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
// function func(num){
// 	return num = num**3
// }
// let res = func(3);
// console.log(res);

// Сделайте функцию, которая параметром принимает число,
// а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3,
// затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// function func(num){
// 	return num = Math.sqrt(num);
// }
// let res1 = func(3);
// let res2 = func(4)
// let res = res1 + res2;
// console.log(res);

// 206 Последовательный вызов функций в JavaScript

// Пусть теперь у нас есть функция, возвращающая квадрат числа, и функция, находящая сумму двух чисел:
// Найдем с помощью этих функций сумму квадрата числа 2 и квадрата числа 3:
// function square(num) {
// 	return num ** 2;
// }
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3));
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// let res = (Math.sqrt(4)).toFixed(1);
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res = (sum(sqrt(2), sqrt(3), sqrt(4))).toFixed(3);
// console.log(res);

// 207 Тонкое место return в JavaScript
// Что выведется в консоль в результате выполнения следующего кода:
// function func(num) {
// 	return num;

// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) ); выведет 3 потому что после первого return код завершится

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );  100 тк 1-е условие не выполнится , а второе возведет в квадрат
// console.log( func(-5) ); 5 тк  1-е усл выполняется

// 208 Цикл и return в JavaScript

// Пусть у нас есть функция, возвращающая сумму чисел от 1 до 5:

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// let res = func();
// console.log(res); // выведет 15

// Пусть теперь мы расположим return внутри цикла, вот так:

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res);
// В этом случае цикл прокрутится лишь одну итерацию и произойдет автоматический
//  выход из функции (ну и заодно из цикла).
//  А за одну итерацию цикла в переменной sum окажется лишь число 1,
//   а не вся нужная сумма.

// 209 Применение return в циклах в JavaScript

// То, что return расположен внутри цикла,
// не всегда может быть ошибкой. В следующем примере сделана функция,
// которая определяет, сколько первых элементов массива нужно сложить,
// чтобы сумма стала больше или равна 10:
// function func(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
// }
// let res = func([1, 2, 3, 4, 5]);
// console.log(res);

// А в следующем примере сделана функция, которая вычисляет,
// сколько целых чисел, начиная с 1,
// нужно сложить, чтобы результат был больше 100:
// function func() {
// 	let sum = 0;
// 	let i = 1;
// 	while (true) { // бесконечный цикл
// 		sum += i;
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}

// 		i++;
// 	}
// }
// console.log( func() );

// Напишите функцию, которая параметром будет принимать число и делить
// его на 2 столько раз, пока результат не станет меньше 10.
//  Пусть функция возвращает количество итераций,
//  которое потребовалось для достижения результата.
// function func(num) {
// 	let i = 0;
// 	for (; num > 10; i++) {
// 	  num /= 2;
// 	}
// 	return i;
//   }
//   console.log(func(200));


// 210 Прием работы с return в JavaScript
// function func(num) {
// 	let res;

// 	if (num >= 0) {
// 		res = Math.sqrt(num);
// 	} else {
// 		res = 0;
// 	}

// 	return res;
// }

// console.log(func(3));

// Давайте перепишем этот код в более сокращенной форме,
// избавившись от ненужной здесь переменной res:

// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }
// console.log(func(3));

// function func(num1, num2) {
// 	let res;
// 	if (num1 > 0 && num2 > 0) {
// 		return  num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }

// console.log(func(3, 4));

// 211 Флаги в функциях JavaScript

// В функциях можно использовать флаги в неявном виде
// с помощью инструкции return. Давайте посмотрим,
// как это делается. Пусть у нас есть следующая функция, проверяющая,
// что все элементы массива положительные числа:
// function isPositive(arr) {
// 	let flag = true;
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			flag = false;
// 		}
// 	}
// 	return flag;
// }

// Давайте перепишем код функции с помощью неявного использования флагов:
// function isPositive(arr) {
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function evenum(arr) {
// 	for (let elem of arr) {
// 		if (elem % 2 == 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// console.log(evenum([1, 3, 6]))

// Сделайте функцию, которая параметром будет принимать
// число и проверять, что все цифры это числа являются нечетными.
// function evenum (num){
// let digits = num.toString().split('');
// let arr = digits.map(Number);
// for (let elem of arr){
// 	if (elem % 2 == 0){
// 		return false;
// 	}
// }
// return true;
// }
// console.log(evenum(135));

// Сделайте функцию, которая параметром будет принимать массив и проверять,
// есть ли в этом массиве два одинаковых элемента подряд.
// function check(a) {
// 	for (var i=1; i<a.length; ++i) {
// 	  if (a[i] === a[i-1]) {
// 		return true;
// 	  }
// 	}

// 	return false;
//   }
//   console.log(check([3, 1, -1, 12]) ? "Да" : "Нет");

// 212 Логические операторы без if в функциях JavaScript
// Пусть у нас есть функция с ифом. Вот она:

// function func(a, b) {
// 	if (a > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// в сокращенном виде
// function func(a, b) {
// 	return a > b;
// }
// console.log(func(2, 3));

// function func(a, b) {
// 	return a == b
// }
// console.log(func(2, 3));

// 213 Советы по созданию функций в JavaScript
// Напишите, какие недостатки у следующего кода, и исправьте их:
// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res / arr.length;
// }

// исправлен
// function calc(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum / arr.length;
// }
// console.log(calc([1, 2, 3, 4, 5]))

// function func(arr1, arr2) {
// 	let res1 = 0;
// 	for (let elem of arr) {
// 		res1 += elem;
// 	}
// 	let res2 = 0;
// 	for (let elem of arr) {
// 		res2 += elem;
// 	}
// 	return res1 / res2;
// }

// исправлен
// function calc(arr1, arr2){
// let sumarr1 = 0;
// for(let elem of arr1){
// 	sumarr1 += elem;
// }
// let sumarr2 = 0;
// for(let elem of arr2){
// 	sumarr2 += elem;
// }
// return sumarr1 / sumarr2
// }
// console.log(calc([1, 2, 3], [4, 5, 6]))

// 214 Поиск ошибок в коде с функциями JavaScript

// function func1(num) {
// 	return num;
// 	console.log(3);
// }
// function func2(num) {
// 	return num;
// 	console.log(5);
// }
// console.log( func1(3) + func2(5) );

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	} return res;
// }
// console.log(func(arr));

// function func1(num) {
// 	return 3;
// }
// function func2(num) {
// 	return 5;
// }

// console.log( func1(3)+ func2(5));

// let arr = [1, 2, 3, 4, 5];
// console.log(calc(arr));
// function calc(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}return sum;
// }

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
// function add(num) {
// 	if (num <= 9) {
// 		return num + '0';
// 	}
// 	return num;
// }
// console.log(add(5));

// Код должен найти сумму цифр числа:
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
// 	let arr = num.toString().split('');
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	return sum;
// }

// 215 Практика на функции в JavaScript

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function res(str){
// 	return Array.from(str);
// }
// console.log(res('1285558'));

// 216 Глобальные переменные в функциях в JavaScript

// Если у нас несколько функций, то глобальная переменная будет доступна в каждой из этих функций:
// function func1() {
// 	console.log(num);
// }
// function func2() {
// 	console.log(num);
// }
// let num = 1;
// func1(); // выведет 1
// func2(); // выведет 1

// Если в одной из функций произойдут изменения с глобальной переменной,
//то эта переменная поменяется во всех функциях, использующих эту переменную:
// function func1() {
// 	console.log(num);
// 	num++; // меняем глобальную переменную
// }
// function func2() {
// 	console.log(num);
// }
// let num = 1;
// func1(); // выведет 1
// func2(); // выведет 2

// 217 Локальные переменные в функциях в JavaScript

// function func() {
// 	let num = 5; // локальная переменная
// 	console.log(num);
// }
// console.log(num); // ничего не выведет, а выдаст ошибку
// 	в консоль

// 218 Одинаковые имена переменных в функциях в JavaScript

// Пусть и снаружи функции, и внутри есть переменная num.
//  В этом случае любые изменения с локальной переменной num
//  никак не влияют на глобальную переменную num:
// let num = 1; // глобальная переменная
// function func() {
// 	let num = 2; // локальная переменная
// 	console.log(num);
// }
// func(); // вызываем функцию, выведет 2
// console.log(num); // выведет 1 - глобальная переменная
// 	//не поменялась

// Но, если мы забудем объявить локальную переменную num через let,
// то внутри функции не создастся локальная переменная num,
// а просто изменится глобальная переменная:
// let num = 1;
// function func() {
// 	num = 2; // забыли написать let - меняем внешнюю
// 		переменную
// 	console.log(num);
// }
// func(); // вызываем функцию, выведет 2
// console.log(num); // выведет 2 - переменная поменялась

// 219 Изменение глобальных переменных в JavaScript
// Учтите, что глобальная переменная будет меняться только в момент вызова функции.
// Если вызова функции нет - переменная не изменится:
// let num = 1;
// function func() {
// 	num = 2; // не написан let - меняем внешнюю переменную
// 	console.log(num);
// }
// // func(); - закомментировали вызов функции
// console.log(num); // выведет 1 - переменная не поменялась

// let num = 1;
// function func() {
// 	num = 2;
// }
// console.log(num); // выведет 1
// func(); // меняем переменную
// console.log(num); // выведет 2

// let num = 1;
// function func() {
// 	num++;
// }
// func();
// func();
// func();
// console.log(num);//4

// 220 Глобальные переменные и параметры функций в JavaScript

// Пусть у нас есть функция, принимающая параметром число:
// function func(localNum) {
// 	console.log(localNum);
// }
// Пусть снаружи функции есть переменная num:
// function func(localNum) {
// 	console.log(localNum);
// }
// let num = 1; // внешняя глобальная переменная
// Давайте вызовем нашу функцию, передав ей параметром переменную num:
// function func(localNum) {
// 	console.log(localNum);
// }
// let num = 1;
// func(num); // вызываем функцию с параметром,
// 	выведет 1

// function func(localNum) {
// 	let num = 2;
// }

// let num = 1;
// func(num);
// console.log(num);

// 221 Совпадение имен с параметрами в JavaScript

// function func() {
// 	let num = 2;
// }

// let num = 1;
// func();
// console.log(num);

// 222 Параметры-объекты JavaScript
// // Объекты, в отличие от примитивов, передаются по ссылке.
// Это значит, что изменение объекта внутри функции приведет к тому,
// что он поменяется и снаружи функции. Смотрите пример:

// function func(obj) {
// 	obj.a = '!';
// }
// let obj = {a: 1, b: 2, c: 3};
// func(obj);
// console.log(obj);

// function func(obj) {
// 	obj = '!';
// }
// let obj = {a: 1, b: 2, c: 3};
// func(obj.a);
// console.log(obj);

// function func(arr) {
// 	arr.splice(1, 1);
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(arr) {
// 	arr.slice(1, 1);
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// 223 Исходный код функции и ее результат в JavaScript

// function func() {
// 	return '!';
// }
// console.log(func); // увидим код функции

// 224 Функция как переменная в JavaScript

// function func() {
// 	console.log('!');
// }
// func(); // выведет '!'
// func = 'string'; // затрем переменную func
// console.log(func); // выведет 'string'

// Сделайте функцию func, которая будет возвращать через return какую-либо строку.
// function func(){
// 	return 'string'
// }
// func();
// func = 123;
// console.log(func);

// 225 Запись функции в другую переменную в JavaScript

//Пусть у нас есть наша функция func:
// function func() {
// 	console.log('!');
// }
// //Давайте скопируем ее исходный код в переменную test:
// function func() {
// 	console.log('!');
// }
// let test = func; // теперь test такая же функция, как и func
// // Проверим:
// test(); //выведет '!'
// func(); //выведет '!'

// Сделайте функцию func1, которая будет возвращать через return число 3.
// function func(){
// 	return 3;
// }
// let func1 = func;
// console.log(func());
// console.log(func1());

// Выведите в консоль сумму результатов работы функций func1 и func2.
// function func(){
// 		return 3;
// 	}
// 	let func1 = func;
// 	console.log(func()+func1());

// 226 Присваивание функций в переменные в JavaScript

//Давайте посмотрим на примере:
// let func = function() {
// 	console.log('!');
// };
// func(); // выведет '!'

// Сделайте безымянную функцию, которая будет возвращать через return число 1.
//  Запишите эту функцию в переменную func1.
// let func1 = function(){
// 	return 1
// }
// func1();
// let func2 = function(){
// 	return 2
// }
// func2();
// alert(func1()+func2());

// 227 Совпадение имени функции и переменной в JavaScript
//В следующем примере функция func будет затерта и вместо нее станет строка 'string':
// function func() {
// 	return '!';
// }
// func = 'string'; // затрем переменную с функцией строкой
// func(); // получим ошибку, т.к. func - не функция

// 228 Function expression и Function declaration в JavaScript

// 1. Function expression (объявление функции)
// function func() {
// 	console.log('!');
// }
// func(); // выведет '!'

// 2. Function Expression (функциональное выражение).
// let func = function() {
// 	console.log('!');
// };
// func(); // выведет '!'

// 229 Разница объявлений функции

//Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.
// Обращаемся к функции до ее объявления:
// func(); //выведет '!'
// function func() {
// 	console.log('!');
// }

//  func();//ошибка
//  let func = function(a,b){
// 	return a+b
//  }
// console.log(func(2, 3));

// 230 Точка с запятой при объявлении функций в JavaScript

// При объявлении функции как Function Declaration после фигурной скобки } точка с запятой не ставится:
// function func() {
// 	console.log('!');
// }

// Если же функция объявлена Function Expression, то после } ставится точка с запятой:
// let func = function() {
// 	console.log('!');
// };

// 231 Нюансы функциональных выражений в JavaScript
// Например, мы можем сложить какую-нибудь строку и безымянную функцию:
// let str = 'str' + function() {return 3;};
// console.log(str); // выведет 'strfunction() {return 3;}'

// !function func() {
// 	console.log('!');
// }
// func();-ошибка так как Function Declaration

// 232 Функция с именем, но Function Expression в JavaScript

//Чтобы иметь возможность вызвать нашу функцию, ее нужно присвоить какой-нибудь переменной:
// let test = function func() {
// 	console.log('!');
// };
// test(); // выведет '!'

// 233 Именованные функциональные выражения в JavaScript
// let test = function func() {
// 	console.log('!');
// };
// test(); // выведет '!'
// func(); // выдаст ошибку

//Дело в том, что это имя будет недоступно снаружи функции, но доступно внутри этой функции.
//Давайте вызовем нашу функцию внутри нее самой:

// let test = function func() {
// 	console.log('!'); // выводим '!'
// 	func(); // вызываем сами себя
// };
// test();

// Имя func же жестко привязано к функции специально для того,
// чтобы можно было обратиться к нашей функции внутри нее самой.
// Такие Function Expression с именем функции называются именованными функциональными выражениями.

// 234 Как проверить тип функции в JavaScript
//Обратимся к этой функции до ее определения
//Поставим перед нашей функцией плюсик:

// 235 Выражение слева функции в JavaScript
// А вот если после 1 влепить еще один плюс, то функция станет Function Expression:

// +1+
// function func() {
// 	console.log('!');
// }
// Почему так: потому что на первой строчке незавершенное выражение
//  - стоит плюс и после него ничего. Поэтому интерпретатор JavaScript считает,
//  что этот плюс относится к строке ниже,
//  то есть к нашей функции.

//236 Выражение справа функции в JavaScript
// function func() {
// 	console.log('!');
// }
// +1; // просто команда
// func();

// +function func() { // это Function Expression
// 	console.log('!');
// } + 1;
// func();

// function func() {
// 	console.log('!');
// } + console.log('!');
// func();

//237 Массив с анонимными функциями в JavaScript
//Давайте, например, выведем в консоль содержимое нулевого элемента массива:

// let arr = [
// 	function() {console.log('1')},
// 	function() {console.log('2')},
// 	function() {console.log('3')},
// ];
// console.log(arr[0]); // увидим исходный код первой функции

//Чтобы происходил вызов функции, к ней нужно дописать круглые скобки.
// let arr = [
// 	function() {console.log('1')},
// 	function() {console.log('2')},
// 	function() {console.log('3')},
// ];

// arr[0](); // выведет '1'

//Можно также перебрать наш массив с функциями циклом и в этом цикле вызвать каждую из функций:

// let arr = [
// 	function() {console.log('1')},
// 	function() {console.log('2')},
// 	function() {console.log('3')},
// ];
// for (let func of arr) {
// 	func(); // вызываем наши функции в цикле
// }

// let arr = [
// 	 	function() {return 1},
// 		function() {return 2},
// 		function() {return 3},
// 	];
// 	console.log(arr[0]() + arr[1]() + arr[2]());
// for(let func of arr){
// 	console.log(func());
// }

//238 Объект с анонимными функциями в JavaScript
//объект с ключами
// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// };
// obj.func1(); // выведет 1

// let obj = {
// 		func1: function() {return 1},
// 	 	func2: function() {return 2},
// 	 	func3: function() {return 3},
// 	 }
// console.log(obj.func1()+ obj.func2() + obj.func3())
// for(let func in obj){
// console.log(obj[func]());
// }

//239 Применение объекта с функциями в JavaScript
//Воспользуемся нашими функциями:

// let math = {
// 	square: function(num) {return num * num},
// 	cube: function(num) {return num * num * num},
// };

// console.log( math.square(2) ); // выведет 4
// console.log( math.cube(2) ); // выведет 8

// let calk = {
// sum: function(a, b) {return a+b},
// square: function(a, b) {return a**2 + b**2},
// cube: function(a, b) {return a**3 + b**3},
// }
// console.log( calk.sum(1,2));
// console.log( calk.square(1,2));
// console.log( calk.cube(1,2));

//240 Передача функций параметрами в JavaScript

//Можем, например, передать числа:
// test(1, 2); // вызываем функцию
// function test(func1, func2) {
// 	console.log(func1); // выведет 1
// 	console.log(func2); // выведет 2
// }

//А можем передать функции:
// test(
// 	function() {return 1;}, // первый параметр
// 	function() {return 2;}  // второй параметр
// );
// function test(func1, func2) {
// 	console.log(func1); // выведет 'function() {return 1;}'
// 	console.log(func2); // выведет 'function() {return 2;}'
//}

//Для этого напишем функциям круглые скобки:
// test(
// 	function() {return 1;},
// 	function() {return 2;}
// );
// function test(func1, func2) {
// 	console.log( func1() ); // выведет 1
// 	console.log( func2() ); // выведет 2
// }

//Давайте выведем в консоль сумму результатов первой и второй функции:
// test(
// 	function() {return 1;},
// 	function() {return 2;}
// );
// function test(func1, func2) {
// 	console.log( func1() + func2() ); // выведет 3
// }

// 241 Именованные функции-параметры в JavaScript

// Передадим в параметры функции test имена функций get1 и get2
// (то есть их исходный код, а не результат)
// function get1() {
// 	return 1;
// }
// function get2() {
// 	return 2;
// }
// test(get1, get2); // выведет 3
// function test(func1, func2) {
// 	console.log( func1() + func2() );
// }

//Переделаем на Function Expression:

// let get1 = function() {
// 	return 1;
// }
// let get2 = function() {
// 	return 2;
// }
// test(get1, get2); // выведет 3
// function test(func1, func2) {
// 	console.log( func1() + func2() );
// }

// function test(func1, func2, func3){
// 	console.log(func1() + func2() + func3())
// }
// let func1 = function(){return 1};
// let func2 = function(){return 2};
// let func3 = function(){return 3};
// test(func1, func2, func3);

// 242 Параметры передаваемых функций в JavaScript

// Давайте теперь вызовем функцию test, передав в нее параметром анонимную функцию.
//  Эта анонимная функции параметром будет принимать число и возвращать квадрат этого числа.
// В результате всего этого наша конструкция выведет квадрат числа 3, то есть 9:

// test(
// 	function(num) {
// 		return num * num;});
// function test(func) {
// 	console.log(func(3));}

	// 	let func = function(num) {
	// 		return num **3};
	// function test(func) {
	// 	console.log(func(3));}
	// 	test(func);


	//243 Передача числа параметром в JavaScript

	//Давайте теперь число, с которым что-то делает передаваемая функция,
	//не будем жестко хранить внутри test, а передадим первым параметром:
// 	function test(num, func) {
// 		console.log(func(num));
// 	}
// 	// Выведет 4:
// 	test(2, function(num) {
// 		return num * num;
// 	})

// 	// Найдем квадрат числа:
// test(2, function(num) {
// 	return num * num; // возвращает квадрат
// });

// function test(num, func1, func2) {
// 	console.log(func1(num)+ func2(num))
// };
// test(3, function(num){return num*num}, function(num){return num**3});

//244 Применение передачи функции параметром в JavaScript

//Давайте сделаем функцию, которая параметром будет принимать массив,
// а вторым параметром - функцию. Переданная функция должна будет
// применится к каждому элементу массива:
// function test(arr, func) {
// 	// вернем измененный массив
// }
// function test(arr, func) {
// 	// Запускаем цикл:
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]); // применяем функцию к каждому элементу
// 	}
// 	return arr; // возвращаем измененный массив
//}

//Применим нашу функцию к какому-нибудь массиву:
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test(
// 	[1, 2, 3],
// 	function(num) {return num * num;}
// );
// console.log(result); // выведет [1, 4, 9]

// function test (arr, func){
// 	for (let i = 0; i < arr.length; i++){
// 	arr[i] = func(arr[i]);}
// 	return arr;
// }
// let result = test([1, 2, 3], function(num){return num**3});
// console.log(result);

//245 Вложенные функции в JavaScript

// function square(num) {
// 	return num * num;
// }
// function func(num1, num2) {
// 	return square(num1) + square(num2);
// }
// console.log(func(2, 3)); // выведет 13
//Давайте операцию возведения в квадрат вынесем в вспомогательную функцию square:
//поместив вовнутрь func.
// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
// 	return square(num1) + square(num2);
// }
// console.log(func(2, 3)); // выведет 13

// function func(num1, num2){
// 	function square(num){
// 		return num*num;
// 	}
// 	function cube(num){
// 		return num**3;
// 	}
// 	return square(num1) + cube(num2);
// }
// console.log(func(2,3))

//246 Область видимости вложенных функций в JavaScript

// function test() {
// 	let num = 1;
// 	function func() {
// 		console.log(num);
// 	}

// 	func();
// }
// test();

//247 Параметры внешней функции в JavaScript

//Параметры внешней функции также будут доступны во внутренней:
// function test(num) {
// 	function func() {
// 		console.log(num); // выведет 1
// 	}
// 	func(); // вызываем внутреннюю функцию
// };
// test(1); // передаем параметром число

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
// 	num1 = 2;
// 	func();
// }
// test(1, 2); //выведет 4

// 248 Параметры внешней и внутренней функций в JavaScript

//Передадим параметр внешней функции в вызов внутренней функции:

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum); // выведет 1
// 	}
// 	func(num); // передаем параметр
// }
// test(1); // передаем параметром число

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2; // меняем переменную num
// 		console.log(localNum);
// 	}
// 	func(num); // передаем параметр
// }
// test(1); // передаем параметром число
// console.log(test());

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);//выведет 2
// 	}
// 	func(num + 1);
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(num);// выведет 1
// 	}
// 	func(num + 1);
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(num);// выведет 1
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(localNum);//ошибка
// }
// test(1);

//249 Одноименные параметры в JavaScript

//В этом случае во внутренней функции будет локальная переменная num.
// Ее изменение во внутренней функции никак не будет влиять на внешнюю переменную num:
// function test(num) {
// 	function func(num) {
// 		num = 2; // меняем локальную переменную num
// 	}
// 	func(num);
// 	console.log(num); // выведет 1 - ничего не поменялось
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);// выведет 2
// 	}
// 	num = 2;
// 	func(num);
// }
// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);// выведет 1
// 	}
// 	func(num);
// 	num = 2;
// }
// test(1);

//250 Функция, возвращающая функцию в JavaScript

//Давайте теперь вместо строки, по аналогии, вернем анонимную функцию:
// function func() {
// 	return function() {
// 		return '!';
// 	};
// }
// let result = func(); // в переменной result будет функция
// console.log(result); // выведет 'function() {return '!';}'
// console.log( result() ); // выведет '!'

// function func() {
// 	return function() {
// 		return '!';
// 	};
// }
// console.log( func()() ); // выведет '!'

//251 Любой уровень вложенности в JavaScript
//Могут быть и такие вызовы функций: func()()() и func()()()() - и так далее до бесконечности.

// function func() {
// 	return function() {
// 	return function() {
// 		return function() {
// 			return '!';
// 		};
// 	};
// }
// }
// console.log( func()()()() ); // выведет '!'

//252 Параметры возвращаемой функции в JavaScript

//Давайте сделаем так, чтобы и первая функция принимала параметр, и вторая.
// //А результатом вызова сделаем сумму этих параметров:
// function func(num1) {
// 	return function(num2) {
// 		return num1 + num2;
// 	};
// }
// console.log( func(1)(2) ); // выведет 3

// function func(num1) {
// 	return function(num2){
// 		return function(num3){
// 			return num1 + num2 + num3;
// 		};
// 	};
// }
// console.log( func(1)(2)(3))

// function func(num1) {
// 		return function(num2){
// 			return function(num3){
// 			return function(num4){
// 				return function(){
// 				return  [num1, num2, num3, num4];
// 			};
// 		};
// 	}
// }
// }
// 	console.log( func(1)(2)(3)(4)())

//253 Функции-коллбэки в JavaScript

//Пусть мы хотим сделать функцию, которая первым параметром будет принимать массив,
 //а вторым - коллбэк, который будет применять к каждому элементу массива:
//Напишем реализацию нашей функции:

// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
// 	return result;
// }

// var numbers = [1,2,3,4,5,6,7,8];
// numbers.forEach(function(element, index, array){
//     array[index] = element* element;
// });
// console.log(numbers);

// var arr = [1, 2, 3, 4, 5]
// var result = each(arr, function(elem) {
// 	return elem ** 3;
// });
// console.log(result);

// function each(arr, func){
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++){
// 		result[i] = func(arr[i]);
// 	return result;

// 	}
// }

//254 Нюансы коллбэков в JavaScript
// function square(num) {
// 	return num * num;
// }
// let result = each([1, 2, 3, 4, 5], square);
// console.log(result);

//255 Стрелочные функции в JavaScript

//let func1 = function(num1, num2) {
// 	let result = num1 * num2;
// 	return result;
// }
// let func2 = (num1, num2) => {
// 	let result = num1 * num2;
// 	return result;
// }

// Если параметр стрелочной функции один - круглые скобки можно не писать:
// let func1 = function(num) {
// 	return num * num;
// }
// let func2 = num => num * num

// let func1 = function() {
// 	console.log('!!!');
// }
// let func2 = () => console.log('!!!')

//256 Применение стрелочных функций в JavaScript

//Вызовем эту функцию, передав ей коллбэк:
// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = filter([1, 2, 3, 4, 5], elem => elem
// 	% 2 == 0);

//257 Доступ к внешним переменным функций в JavaScript

// Добавим вызовы функции:
// let num = 1; // функция в этот момент узнает, что
// 	num = 1
// func(); // выведет 1
// function func() {
// 	console.log(num);
// }
// func(); // выведет 1
// num = 2; // функция в этот момент узнает, что
// 	num = 2
// func(); // выведет 2

//258 Лексическое окружение функций в JavaScript

// Значение любой переменной лексического окружения всегда равно текущему значению этой переменной:
// let num1 = 1; // окружение {num1: 1}
// let num2 = 2; // окружение {num1: 1, num2: 2}
// // Поменяем переменную num1:
// num1 = 123; // окружение {num1: 123, num2: 2}
// function func() {
// }

//259 Применение лексического окружения функций в JavaScript

//Давайте теперь вызовем родительскую функцию test и результат ее работы запишем в переменную func:
// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// let func = test();
// func(); // выведет 1

// function test() {
// 	return function() {
// 		console.log(num);
// 	}
// }
// let num = 1; // глобальная переменная
// let func = test();
// func(); // выведет 1

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func());//выведет 3

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()());//выведет 3

// function test() {
// 	let num1 = 1;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func = test();
// console.log(func());//выведет 3

//260 Замыкания в JavaScript
// Если же какая-то функция получает переменную из своего лексического окружения,
// то говорят "переменная берется из замыкания".

//261 Счетчик на замыканиях в JavaScript

//Получается, что мы реализовали счетчик вызова функций,
//используя замыкание (точнее используя переменную num из замыкания нашей функции).
// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5

// function test(){
// 	let num = 10;
// 	return function(){
// 		if(num > 0){
// 		console.log(num)
// 		num--}
// 		else{
// 			console.log('----')
// 		}
// 	}
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

//262 Локальная переменная счетчика в JavaScript

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// //То есть каждый вызов функции test таким образом: test()(),
// //создает свою функцию со своим замыканием и сразу же вызывает эту функцию.
// test()(); // выведет 1
// test()(); // выведет 1
// test()(); // выведет 1
// test()(); // выведет 1
// test()(); // выведет 1

// function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// let test = func;
// test()();
// test()();
// test()();// выведет 0

//263 Глобальная переменная счетчика в JavaScript

//Вынесем переменную num за функции, тем самым сделав ее глобальной:
// let num = 1; // глобальная переменная
// function test() {
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// //В этом случае все возвращаемые функции будут изменять
// //эту глобальную переменную и счетчики будут работать уже зависимо друг от друга:
// let func1 = test(); // первый счетчик
// func1();  // выведет 1
// func1();  // выведет 2
// let func2 = test(); // второй счетчик
// func2();  // выведет 3
// func2();  // выведет 4

//264 Вызов функции на месте в JavaScript
//Такая конструкция называется Immediately Invoked Function Expression (IIFE).
//Давайте теперь не будем присваивать нашу функцию в переменную,
//а вызовем ее сразу же, "на месте". Для этого после функции поставим круглые скобки:
// +function() {
// 	console.log('!'); // выведет '!'
// }();

// function() {
// 	console.log('!');
// }();// ошибка

//265 Присваивание функции в переменную в JavaScript

// let result = function() {
// 	return '!';
// }();
// console.log(result); // выведет '!'

//266 Применение вызова функции на месте в JavaScript

//Давайте применим вызов функции на месте в качестве одного из слагаемых:
// let sum = 1 + function() {
// 	return 2;
// }();
// console.log(sum); // выведет 3

// let result = function() {return 1;}() + function()
// 	{return 2;}();
// console.log(result);

//267 Круглые скобки в IIFE в JavaScript
//Обычно при вызове функции на месте вместо плюса используются круглые скобки,
//так как такой способ оформления считается более очевидным:
// (function() {
// 	console.log('!');
// }());

// let result = (function() {
// 	return '!';
// }());
// console.log(result); // выведет !

// let result = (function() {
// 	return '!';
// })();
// console.log(result);

//268 Параметры функции при вызове на месте в JavaScript

//Давайте вызовем нашу функцию на месте, передав ей строку для вывода в консоль:
// (function(str) {
// 	console.log(str); // выведет '!!!'
// })('!!!');

// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);

//269 Множественные вызовы IIFE в JavaScript
// (function() {
// 	return function() {
// 		console.log('!');
// 	};
// })()(); // выведет '!'

// (function() {
// 	return function(){
// 		return function(){
// 			alert('!')
// 		}
// 	}
// })()()();

// (function(num1){
// 	return function(num2){
// 		console.log(num1 + num2)
// 	}
// })(1)(2);

//270 Подводные камни IIFE в JavaScript

//Первый:
// let result = 1
// +function() {
// 	return 2;
// }();
// console.log(result); //выведет 3

// Второй:
// let result = 1;
// +function() {
// 	return 2;
// }();
// console.log(result); //выведет 1

//271 Точка с запятой для безопасности в IIFE

//Поэтому, всегда-всегда ставьте точку с запятой перед вызовом функции на месте,
// ;(function() {
// 	console.log(1); // выведет 1
// })();

//272 Замыкания и вызов функции на месте в JavaScript

//Как вы уже знаете, можно вызвать анонимную функцию на месте и
//присвоить результат работы какой-либо переменной:

// let result = function() {
// 	return '!';
// }();
// console.log(result); // выведет '!'

//Если добавить еще num++, то функция func станет готовым счетчиком:
// let func = (function() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// })();
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5

// let func = (function() {
// 	let num = 1;
// 	return function() {
// 	  console.log(num);
// 	  num = num === 5 ? 1 : num + 1;
// 	}
//   })();
//   func();
//   func();
//   func();
//   func();
//   func();
//   func();
//   func();
//   func();

//273 Работа с рекурсией в JavaScript

// let i = 1;
// function func(){
// 	console.log(i);
// 	i++;
// 	if (i <= 10){
// 		func(); // здесь функция вызывает сама себя
// 	}
// }
// func();

//274 Пример с параметром через рекурсию в JavaScript

//Давайте пока без рекурсии используя метод shift выведем все элементы массива по очереди:
// function func(arr) {
// 	console.log(arr.shift()); // выведет 1
// 	console.log(arr); // выведет [2, 3] - массив уменьшился
// 	console.log(arr.shift()); // выведет 2
// 	console.log(arr); // выведет [3] - массив уменьшился
// 	console.log(arr.shift()); // выведет 3
// 	console.log(arr); // выведет [] - массив пуст
// }
// func([1, 2, 3]);

//Давайте теперь используем рекурсию:
// function func(arr) {
// 	console.log(arr.shift(), arr);
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func([1, 2, 3]);


//275 Сумма элементов массива при рекурсии в JavaScript
// function getSum(arr) {
// 	let sum = arr.shift();
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// console.log(getSum([1, 2, 3]));

//let arr = [1, 2, 3, 4, 5];
//С помощью рекурсии найдите сумму квадратов элементов этого массива.
// function getSum(arr){
// 	let sum = arr.shift()**2;
// 	if (arr.length !==0){

// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// console.log(getSum(arr));

//276 Рекурсия и многомерные структуры в JavaScript

//Для начала сделаем функцию, в которую параметром будем передавать наш массив,
 //а в функции сделаем цикл для перебора нашего массива:

// function func(arr) {
// 	for (let elem of arr) {
// 		console.log(elem);
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


//Давайте теперь будем разделять в цикле элементы-примитивы и элементы-массивы:
// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			// элемент - массив
// 		} else {
// 			// элемент - примитив
// 			console.log(elem);
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);// выведет 1

//А теперь сделаем так, чтобы если наш элемент - массив, функция вызывала сама себя,
//передавая параметром этот массив:
// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]); // выведет 1,2,3,4,5,6,7

// function func (obj){
// for (let elem in obj){
// 	if(typeof obj[elem] == 'object'){
// 	console.log(obj[elem]);
// 	}else{
// 		console.log(elem)
// 	}
// 	for(let elem2 in obj[elem]){
// 		if(typeof obj[elem][elem2] =='object'){
// 			console.log(obj[elem][elem2]);
// 		}
// 		else{
// 			console.log(elem)
// 		}
// 	}
// }
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

//Напишите код, который развернет наш многомерный массив в одномерный
// function func(arr){
// 	let result = [];
// 	for(let i = 0; i < arr.length; i++){
// 		const currentValue = arr[i];
// 		if(Array.isArray(currentValue)){
// 			result = result.concat(func(currentValue));
// 		} else{
// 			if(currentValue != null){
// 				result.push(currentValue);
// 			}
// 		}
// 	}
// 	return result;
// }
// const testArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// const result = func(testArray);
// console.log(result);

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let arrRes = [];
// function func(arr) {
//          let res = [];
//             for (let elem of arr) {
//                 if (typeof elem == 'object') {
//                     res.push(func(elem));
//                 } else {
//                     arrRes.push(elem);
//                 }
//             }
//             return arrRes;
//         }
// console.log(func(arr));

//277 Сумма элементов массива через рекурсию в JavaScript

//Давайте найдем сумму примитивных элементов нашего массива:
// function func(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += func(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// function func(obj){
// let sum = 0;
// for (let elem in obj) {
// 	if (typeof obj[elem] == 'object') {
// 		sum += func(obj[elem]);
// 	} else {
// 		sum += obj[elem];
// 	}
// }
// return sum
// }
// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}))

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let arrRes = [];
// function func(arr) {
//          let res = [];
//             for (let elem of arr) {
//                 if (typeof elem == 'object') {
//                     res.push(func(elem));
//                 } else {
//                     arrRes.push(elem);
//                 }
//             }
//             return arrRes;
//         }
// console.log(func(arr));

//278 Манипуляции с элементами в JavaScript

// Давайте что-нибудь сделаем с перебираемыми элементами массива, к примеру,
//  запишем им в конец знак '!'. В этом случае нам придется воспользоваться обычным циклом for,
//   а не for-of, вот так:

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] + '!';
// 		}
// 	}
// 	return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++){
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i]**2;
// 		}
// 	}
// 	return arr
// }
// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]))

// 279 Метод map для перебора массива в JavaScript
// let новый массив = массив.map(function(элемент, индекс, массив) {
// 	код
// 	return измененный элемент;
// });

//Создадим массив, каждый элемент которого вдвое больше соответствующего элемента начального массива:
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem) {
// 	return elem * 2;
// });
// console.log(res);

//Создадим массив, каждый элемент которого получается так - значение элемента умножается
//на его порядковый номер в массиве:
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem, index) {
// 	return elem * index;
// });
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem){
// return Math.sqrt(elem);
// })
// console.log(res);

//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem, index){
// 	return elem
// }
// )
// console.log(res.reverse());

// let arr = ['123', '456', '789'];
// let result = arr.map(elem => elem.split("").map(Number));
// console.log(result);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num
// 	});
// });
// console.log(result);

//280 Метод forEach для перебора массива в JavaScript

// массив.forEach(function(элемент, индекс, массив) {
// 	//код, который выполнится для всех элементов
// });

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(elem) {
// 	console.log(elem);
// });

//Давайте выведем элементы и их номера в консоль:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem, ind) {
// 	console.log(elem, ind);
// });

//Давайте найдем сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem;
// });
// console.log(sum);

// let arr = [2, 4, 6, 8];
// let sum = 0;
// arr.forEach(elem => sum += elem**2);
// console.log(sum);

//281 Метод filter для фильтрации массива в JavaScript
// let новый массив = массив.filter(function(элемент, индекс, массив) {
// 	код
// 	return true или false
// });

//Давайте отфильтруем массив, оставив в нем только положительные числа:
// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let res = arr.filter(function(elem) {
// 	if (elem >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(res);

//Сократим код, воспользовавшись стрелочной функцией:
// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let res = arr.filter(elem => elem > 0);
// console.log(res);

// let arr = [1, -2, 5, -9, 1, 25];
// let res = arr.filter(elem => elem > 0 && elem < 10);
// console.log (res);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['kkkkk', 'jjjjjjjjjj', 'mmmm'];
// let res = arr.filter(elem => elem.length < 5);
// console.log(res);

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let res = arr.filter( elem => Array.isArray);
// console.log(res);

// 282 Метод every для проверки массива в JavaScript

// массив.every(function(элемент, индекс, массив) {
// 	return true или false;
// });

//Проверим, что все элементы в массиве чисел положительные:
// let arr = [1, 2, 3, 4, 5];
// let check = arr.every(function(elem) {
// 	if (elem >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(check);

//Проверим, что произведение элемента на его порядковый номер всегда меньше 30:
// let arr = [1, 2, 3, 4, 5];
// let check = arr.every(function(elem, index) {
// 	if (elem * index < 30) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(check);

// let arr = [1, 22, 66, 30, 5]
// let check = arr.every(function(elem, index){
// if (elem * index < 50) {
// 	return true;
// } else {return false;}
// })
// console.log(check);

//283 Метод some для проверки массива в JavaScript

//Проверим, к примеру, что в массиве есть хотя бы одно четное число:
// let arr = [2, 4, 6, 8];
// let result = arr.some(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);

// Упростим:
// let arr = [2, 4, 6, 8];
// let result = arr.some(elem => elem % 2 == 0);
// console.log(result);

// let arr = [0, 1, -1, 5, 3, 6];
// let result = arr.some(elem => elem < 0);
// console.log (result);

// let arr = [0, 1, -1, 5, 3, 6];
// let result = arr.some((elem, index) => elem*index > 10);
// console.log(result);

//284 Поиск по массиву через коллбэк на JavaScript

//Метод find помогает найти первый элемент в массиве согласно переданному в параметре коллбэку.
//Если элемента нет, то возвращается undefined.
// let arr = [0, 2, 1, 2, 3, 4];
// let res = arr.find(function(currentValue) {
// 	return currentValue > 0;
// });
// console.log(res);//выведет 2

//Давайте найдем элемент массива, длина которого равна 2:
// let arr = ['abc', 'defg', 'kl', 'mn'];
// let res = arr.find(function(elem) {
// 	return elem.length == 2;
// });
// console.log(res);// выведет kl

// Метод findIndex
// Метод findIndex позволяет найти индекс первого элемента согласно
//  согласно переданному в параметре коллбэку.
// Если элемент не найден, то возвращается -1

//Давайте найдем индекс первого четного элемента массива:
// let arr = [1, 2, 3, 4, 5];
// let res = arr.findIndex(function (elem){
// 	return elem % 2 == 0;
// });
// console.log(res);

// Метод findLast ищет первый элемент с конца массива согласно переданному в параметре коллбэку.
// Если элемента нет, то в результат возвращается undefined.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.findLast(function(elem) {
// 	return elem > 0;
// });
// console.log(res);

// Метод findLastIndex помогает найти индекс первого элемента с конца массива,
// соответствующий условию согласно переданному в параметре коллбэку.
//  Если элемента нет, то возвращается undefined.
//Давайте найдем индекс положительного числа в массиве:
// let arr = [-12, -13, 14, 15];
// let res = arr.findLastIndex(function(elem) {
// 	return elem > 0;
// });
// console.log(res);

//285 Свертка массива на JavaScript

// Метод reduce
// массив.reduce(function(промежуточный результат, элемент, индекс, массив) {
// 	return новый промежуточный результат;
// }, начальное значение);

//Найдем сумму элементов массива:
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(res);

//Давайте найдем сумму всех положительных чисел массива:
// let arr = [1, -2, -3, 4, 5, -6];
// let res = arr.reduce(function(sum, elem) {
// 	if (elem >= 0) {
// 		return sum + elem;
// 	} else {
// 		return sum;
// 	}
// });
// console.log(res);

// Метод reduceRight работает точно так же как и reduce - смотрите его для полного понимания.
// Единственное отличие: reduce перебирает элементы слева направо,
// а reduceRight - справа налево.
// массив.reduceRight(function(промежуточный результат, элемент, индекс, массив) {
// 	return новый промежуточный результат;
// }, начальное значение);

//Давайте найдем сумму элементов массива:
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.reduceRight(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(res);

//Давайте сольем двумерный массив в одномерный:
// let arr = [['a', 'b'], ['c'], ['d', 'e']];
// let res = arr.reduceRight(function(elem1, elem2) {
// 	return elem1.concat(elem2);
// }, []);
// console.log(res);

//286 Оператор ..., spread в JavaScript

// //Пусть у нас также есть массив из трех элементов:
// let arr = [1, 2, 3];
// //Очевидно, что мы не можем просто взять и передать этот массив параметром функции, вот так:
// let arr = [1, 2, 3];
// func(arr);
// //Ведь в этом случае весь массив попадет в первый параметр функции, а в этот параметр необходимо передавать число (да и в остальные параметры тоже).
// //Конечно же, можно поступить следующим образом:
// let arr = [1, 2, 3];
// func(arr[0], arr[1], arr[2]);
// //Но есть и более простой путь - использовать оператор spread:
// let arr = [1, 2, 3];
// func(...arr);

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }
// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));

//288 Экстремальные значения массива через spread в JavaScript

// let arr = [1, 2, 3, 4, 5]
// let max = Math.max(...arr);
// Данный код, не смотря на его простоту, очень мощный.
// Ведь Math.max может принимать любое количество параметров,
//  а значит с помощью оператора spread мы можем использовать массив произвольного размера!

// let arr =  [1, 6, 7, 8];
// let min = Math.min(...arr);
// console.log(min);

//289 Оператор spread и слияние массивов

//Задача, в общем-то, решаема через метод splice. Однако,
//гораздо проще эта задача решается через spread:
// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, ...arr1, 2, 3];
// console.log(arr2); // выведет [1, 'a', 'b', 'c', 2, 3]

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];
// let arr  = [0, ...arr3];
// console.log(arr);

//290 Оператор spread для строк в JavaScript

// Оператор spread, примененный к строке, разбивает эту строку посимвольно:
// ...'abcde'; // разобьет строку в символы через запятую: 'a','b','c','d','e'

// let arr = [...'abcde'];
// console.log(arr);

// 291 Оператор spread и числа в JavaScript

//Оператор spread не применим к числам:
// let arr = [...12345]; // будет ошибка
// //Для решения проблемы следует преобразовывать число в строку, вот так:
// let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5']

//292 Оператор rest в JavaScript

//Оператор rest позволяет получить все лишние параметры в виде массива.
// Для этого в функцию добавляется еще один параметр (обязательно последним),
// перед которым пишутся 3 точки:
// function func(a, b, ...rest) {
// }
//Если лишних параметров не будет, то в переменную rest запишется пустой массив:
// func(1, 2);
// function func(a, b, ...rest) {
// 	console.log(a);    // выведет 1
// 	console.log(b);    // выведет 2
// 	console.log(rest); // выведет []
// }

//293 Функция, находящая сумму чисел с помощью операторов rest и spread в JavaScript

//запустим цикл по переданному массиву и найдем сумму переданных чисел:
// function func(...nums) {
// 	let sum = 0;
// 	for (let num of nums) {
// 		sum += num;
// 	}
// 	return sum;
// }
// let result = func(1, 2, 3);
// console.log(result); // выведет 6

// function func(...nums) {
// 	let avr = 0;
// 	let sum = 0;
// 	for(let elem of nums) {
// 		sum += elem;

// 	}
// 	return sum == 0 ? sum : sum / nums.length;
// }
// let res = func(1,2,3,4);
// console.log(res);

//294 Функция, сливающая массивы в двухмерный в JavaScript
//Давайте сделаем функцию unite, которая параметрами будет принимать произвольное
//количество массивов и сливать их в один двухмерный.
//Вот пример работы описанной функции:
// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]

// function unite(...arrs) {
// 	return arrs;
// }

//295 Функция, сливающая массивы в один в JavaScript
// Давайте теперь реализуем функцию merge, параметрами принимающую произвольное количество массивов
//  и сливающую их элементы в один массив.
// Вот пример работы нашей функции:
// merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// function merge(...arrs){
// 	console.log(arrs); // выведет  [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]
// }

// let arrs   = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];
// let result = [].concat(...arrs);
// console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Давайте добавим этот код в нашу функцию merge:
// function merge(...arrs) {
// 	return [].concat(...arrs);
// }
// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

//296 Деструктуризация массивов в JavaScript

// Синтаксис этой операции следующий:
// let [переменная1, переменная2, переменная3] = массив;
// Давайте запишем год, месяц и день в соответствующие переменные, используя деструктуризацию:
// let arr = [2025, 12, 31];
// let [year, month, day] = arr;
// Посмотрим на содержимое наших переменных:
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(salary);

//297 Деструктуризация массива из функции в JavaScript

// function func() {
// 	return [2025, 12, 31];
// }
// //Деструктуризируем возвращаемое этой функцией значение:
// let [year, month, day] = func();
// console.log(day);

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let [name, surname, department, position, salary] = func();
// console.log(position);

//298 Пропуск элементов массива при деструктуризации в JavaScript

//Для этого при указании переменных перед первой переменной поставим запятую,
//вот так: [, month, day]:
// let arr = [2025, 12, 31];
// let [, month, day] = arr;
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

//Можно пропустить не одно значение, а несколько:
// let arr = [2025, 12, 31];
// let [,, day] = arr;
// console.log(day);   // выведет 31

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [,, department, position,] = arr;
// console.log(position);

//299 Лишние значения при деструктуризации массива в JavaScrip

// Если в массиве меньше элементов, чем переменных, то в "лишние" переменные запишется undefined:
// let arr = [2025, 12];
// let [year, month, day] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет undefined

// Для примера добавим в наш массив еще часы, минуты и секунды - от этого ничего не поменяется:
// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 3

//300 Остаток массива при деструктуризации в JavaScript

//Если в массиве больше элементов, чем переменных,
//при необходимости лишние элементы можно записать в массив с помощью оператора rest:
// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day, ...time] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31
// console.log(time);  // выведет [23, 59, 59]

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;
// console.log(info);

//301 Значения по умолчанию при деструктуризации массива в JavaScript

//В следующем примере переменной day по умолчанию указано значение 1:
// let arr = [2025, 12];
// let [year, month, day = 1] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 1

// А вот если для переменной day будет значение в массиве - значение по умолчанию будет проигнорировано:
// let arr = [2025, 12, 31];
// let [year, month, day = 1] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position = 'trainee'] = arr;
// console.log(position);

//302 Функции по умолчанию при деструктуризации массива в JavaScript

// function func() {
// 	return (new Date).getDate();
// }
// //Давайте укажем эту функцию в качестве значения переменной day:
// let arr = [2023, 12]
// let [year, month, day = func()] = arr;
// let d = new Date()
// console.log(day);

//303 Объявление переменных при деструктуризации массива в JavaScript

// Это, однако, приведет к ошибке, так как нельзя одну и туже переменную объявлять два раза через let
//  (получится, что year объявлена два раза).
// let arr = [2025, 12, 31];
// let year;
// let [year, month, day] = arr;

//304 Деструктуризация объектов в JavaScript

//Давайте выполним его деструктуризацию:
// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };
// let {year, month, day} = obj;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
//
// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(width);

// 305 Имена переменных при деструктуризации объектов в JavaScript

// Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:
// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };
// let {year: y, month: m, day: d} = obj;
// console.log(y); // выведет 2025
// console.log(m); // выведет 12
// console.log(d); // выведет 31

// Переделайте этот код через деструктуризацию согласно изученной теории.
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let c = options.color;
// let w = options.width;
// let h = options.height;
//
// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = options;
// console.log(h);

//306 Значения по умолчанию при деструктуризации объектов в JavaScript

//необязательной может быть любая переменная - не обязательно с конца массива
// let obj = {
// 	month: 12,
// 	day:   31,
// };
// let {year = 2025, month, day} = obj;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31

//Переделайте этот код через деструктуризацию согласно изученной теории.
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let width  = options.width;
// let height = options.height;
//
// let options = {
// 	width: 400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;
// console.log(color);
// console.log(width);

//307 Переменные и значения по умолчанию в JavaScript

//Можно также менять названия переменных на свои при этом задавая значения по умолчанию:
// let obj = {
// 	month: 12,
// 	day:   31,
// };
// let {year:y = 2025, month, day} = obj;
// console.log(y);     // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31

//Переделайте этот код через деструктуризацию согласно изученной теории.
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }
// let w = options.width;
// let h = options.height;

// let options = {
// 	width: 400,
// 	height: 500,
// };
// let { color: c = 'black', width, height} = options;
// console.log(c);

//308 Объявление переменных при деструктуризации объектов в JavaScript

// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };
// let year, month, day;
// ({year, month, day} = obj);
// console.log(month);

// 309 Деструктуризация параметров функций в JavaScript

// func([2025, 12, 31]);
// function func([year, month, day]) {
// 	console.log(year);  // выведет 2025
// 	console.log(month); // выведет 12
// 	console.log(day);   // выведет 31
// }


// func( ['John', 'Smit', ['development', 'programmer', 2000]] );
// function func([name, surname, info]){
// 	console.log(info);
// }

// func( ['John', 'Smit', 'development'] );
// function func(name, surname, department, position = 'джуниор'){
// 	console.log(position);
// }

//Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
//
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );
// function func(department, [name, surname], [year, month, day]){
// 	console.log(month);
// }

//310 Деструктуризация oбъектов параметров функций в JavaScript

//Аналогичным образом можно деструктуризировать параметры-объекты:
// function func({year, month, day}) {
// 	console.log(year);  // выведет 2025
// 	console.log(month); // выведет 12
// 	console.log(day);   // выведет 31
// }
// func({year: 2025, month: 12, day: 31,});

// function func({color, width, height}){
// 	console.log(height);
// }
// func( {color: 'red', width: 400, height: 500} );

//311 Работа с объектом Date в JavaScript

// let date = new Date();
// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день

// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

//312 Форматирование даты в JavaScript

// let date = new Date();
// console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

//чтобы дата выводилась с нулями перед номерами дней и месяцев из одной цифры.
//Для решения проблемы напишем функцию addZero, которая будет добавлять нули перед числами от 0 до 9:
// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// let date = new Date();
// console.log(
// 	addZero(date.getFullYear()) + '-' + 
// 	addZero(date.getMonth() + 1) + '-' +
// 	addZero(date.getDate())
// );

//313 Смена формата даты в JavaScript

// в переменной date лежит дата '2025-12-31'. Давайте преобразуем эту дату в '31/12/2025'

// let str = '2025-12-31';
// let arr = str.split('-');
// console.log(arr); // получим массив ['2025', '12', '31']

//Теперь, обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку:
// let str = '2025-12-31';
// let arr = str.split('-');
// let res = arr[2] + '/' + arr[1] + '/' + arr[0];
// console.log(res); // получим строку '31/12/2025'

//Можно также использовать комбинацию методов split, reverse и join:
// let str = '2025-12-31';
// let res = str.split('-').reverse().join('/');
// console.log(res); // получим строку '31/12/2025'

//2023-12-14 в 14.12.2023
// let str = '2023-12-14';
// let res = str.split('-').reverse().join('.');
// console.log(res);

//314 Получения дня недели на JavaScript

// let date = new Date();
// console.log(date.getDay());

// console.log(checkDate('06.02.2021'));
// console.log(checkDate('04.02.2021'));
// function checkDate(dateStr) {
//   const [day, month, year] = dateStr.split('.');
//   const date = new Date(year, month - 1, day);
//   return (date.getDay() == 0 || date.getDay() == 6);
// }

// let datestring = document.querySelector('#date').innerText; // получаем дату "Ч"
// let regexp = /(\d{2})\.(\d{2})\.(\d{4})/;
// let dateX = new Date(datestring.replace(regexp, '$2/$1/$3')); // парсим из нее дату с заменой строки в понятный JS формат (имеется в виду же 1 марта?)
// let dateToday = new Date(); // дата на момент захода на страницу
// let days = Math.floor((dateX - dateToday) / 86400000);
// document.write('осталось ВСЕГО ' +  days + ' дней');

//315 Вывод частей даты словом в JavaScript

//Для начала напишем код, который будет выводить номер текущего дня недели:
// let date = new Date();
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];//составим массив дней недели days и начнем его с воскресенья
// console.log(days[day]);

// let date = new Date();
// let month = date.getMonth();
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// console.log(months[month]);

// 316 Установка времени в объекте Date в JavaScript

//Возможность задания момента времени можно использовать, например, для того, чтобы узнать день недели за определенную дату:
// let date = new Date(1987, 3, 4); // установим 04/04 1987 года
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

//317 Получение времени в формате timestamp в JavaScript

//При работе с датой существует специальный формат timestamp, который в JavaScript показывает количество миллисекунд, 
//прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.
// let date = new Date();
// console.log(date.getTime());

//Получим заданный момент времени в формате timestamp:
// let date = new Date(2015, 0, 1,);
// console.log(date.getTime());

// 318 Разность между датами в формате timestamp в JavaScript

//Давайте для примера получим разницу в миллисекундах между текущим и заданным моментом времени:
// let now  = new Date();
// let date = new Date(1987, 3, 4, 7, 0, 59);
// let diff = now.getTime() - date.getTime();
// console.log(diff);

// let now = new Date(2024, 0, 1);
// let date = new Date(1987, 3, 4);
// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 365));
// console.log(diff)
// 1158084636731
// 36.7226180213724

// 319 Разница между объектами с датой в JavaScript

// Для примера давайте выведем количество миллисекунд, которые прошли с 25 мая 2015, 12:59:59 по настоящий момент времени:
// let now  = new Date();
// let date = new Date(2015, 4, 25, 12, 59, 59);
// let diff = now - date; // вычитаем два объекта с датами друг от друга
// console.log(diff);     // увидим разницу в миллисекундах

// 320 Автоматическая корректировка дат в JavaScript

//Как вы знаете, даты 35 января не существует. JavaScript в таком случае просто прибавит эти лишние 4 дня к следующему месяцу:
// let date = new Date(2018, 0, 35);
// console.log(date); // получится 4 февраля
// let date1 = new Date(2018, 12, 1); // указываем 12-тый месяц
// console.log(date1); // получится 1 января 2019 года
// let date2 = new Date(2018, 1, 0); // указываем нулевой день
// console.log(date2); // получится 31 января

// 321 Нахождение последнего дня месяца в JavaScript

//определим количество дней в марте 2020 года. Для этого при создании объекта с датой укажем нулевой день апреля
// let date = new Date(2020, 3, 0);
// console.log(date.getDate());

// let date = new Date(2025, 5, 0);
// function getDate(year, month){
// 	console.log(date.getDate());
// }
// getDate();

// let date = new Date(2025, 5, 0); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

//322 Определение високосного года в JavaScript

//Для этого нам нужно взять нулевой день марта:
// let date = new Date(2020, 2, 0);
// console.log(date.getDate()); // выведет 29, тк 2020 год - високосный

//Усовершенствуем наш код так, чтобы тип года выводился текстом:
// let date = new Date(2020, 2, 0);
// if (date.getDate() == 29) {
// 	console.log('високосный');
// } else {
// 	console.log('обычный');
// }

// 323 Проверка корректности даты в JavaScript

//Давайте сделаем описанное:
// let year  = 2025;
// let month = 0;
// let day   = 32;
// let date = new Date(year, month, day);
// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }

//Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, 
//если дата корректна и false, если нет.
 //Пример работы этой функции для 31 января и 32 января:
// function checkDate(year, month, day) {
// 	let dt = new Date(year, month, day);
// 	return dt.getFullYear() == year && dt.getMonth() == month && dt.getDate() == day;
//   }
//   checkDate();
//   console.log(checkDate(2025, 0, 31)); // выведет true
//   console.log(checkDate(2025, 0, 32)); // выведет false

// 324 Получение дня текущего года в JavaScript

// let now  = new Date(); 
// let date = new Date(now.getFullYear(), 2, 8); // получаем нашу дату
// //Полученный момент времени мы можем использовать, например, чтобы определить день недели, 
// //соответствующий этой дате:
// console.log(date.getDay());

//Определите, какой день недели будет 31 декабря текущего года.
// let now = new Date();
// let date = new Date(now.getFullYear(), 11,31);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);
 
// 325 День следующего или предыдущего месяца

//Давайте узнаем день недели первого числа предыдущего месяца. 
//Для этого от текущего месяца отнимем единицу:
// let now = new Date();
//  let date = new Date(now.getFullYear(), now.getMonth() - 1, 21);
//  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//  console.log(days[date.getDay()]);

// 326 День следующего или предыдущего года

//Давайте получим объект с датой, содержащий 21 января следующего года. 
//Для этого прибавим к текущему году единицу:
// let now  = new Date();
// let date = new Date(now.getFullYear() + 1, 0, 21);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

//Определите, какой день недели будет 31 декабря следующего года.
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 31);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 327 Разность моментов

//Давайте найдем разность между двумя моментами времени:
// let date1 = new Date();
// let date2 = new Date(2015, 4, 25, 12, 59, 59);
// console.log(date1 - date2); // разность в миллисекундах

//Определите, сколько дней между 1 января и 10 сентября текущего года.
// let date1 = new Date(2023, 8, 10);
// let date2 = new Date(2023, 0, 1);
// let diff = date1- date2;
// console.log(diff/(1000*60*60*24));

// 328 Момент времени дня

//Давайте получим объект с датой, содержащий полдень сегодняшнего дня:
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
// console.log(date)

//Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
// let now  = new Date();
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12);
// let diff = date1- date2;
// console.log(diff/(1000*60*60));

//329 Начало дня в JavaScript

//Определите, сколько часов прошло между началом дня и текущим моментом времени.
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// let diff = now - date;
// console.log(diff/(1000*60*60));

// 330 Конец дня в JavaScript

//Давайте получим объект с датой, содержащий конец текущего дня:
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
// console.log(date);

//Можно посчитать концом текущего дня полночь следующего (разница в 1 секунду):
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
// console.log(date);

//Определите, сколько часов осталось до конца дня. Опустим нули:
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
// let diff = date - now;
// console.log(diff/(1000*60*60));

// 331 Циклическая проверка моментов времени в JavaScript

//Давайте найдем все первые числа месяцев текущего года, которые являются воскресеньем:
// let now  = new Date();
// let year = now.getFullYear();
// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
	
// 	if (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }

//Рассмотрите промежуток от 2000 года до текущего года. Определите, 
//сколько раз 1 января в этом промежутке попадало на выходной день,
//то есть на субботу или на воскресенье.
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// for (let year = 2000; year <= 2023; year++) {
// let date = new Date(year, 0, 1);
// if (date.getDay() == 0 || date.getDay() == 6) {
// console.log(year + '-' + month + '-1');
// }
// }

// 332 Практика на получение моментов времени в JavaScript

//Определите, сколько секунд прошло с начала дня до настоящего момента времени.
// let now = new Date();
// let data = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// let diff = now - data;
// console.log(diff/(1000*60*60));

//Определите, сколько дней осталось до нового года.
// let now = new Date();
// let date = new Date(2023, 11, 31, 23, 59);
// let diff = date - now;
// console.log(diff/(1000*60*60*24));

// 333 Строковое сравнение дат на JavaScript

//Пусть у нас есть две даты в следующем текстовом формате: какая из этих дат больше:
// let date1 = '2020-12-01';
// let date2 = '2019-12-01';
// console.log(date1 > date2); // выведет true

//Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
// if(date1 > date2){
// 	console.log(date1)
// }
// else{
// 	console.log(date2)
// }

// 334 Сравнение даты без года в JavaScript

//Необязательно сравнивать года. Дата может состоять просто из месяца и дня:
// let date1 = '12-01';
// let date2 = '11-01';
// console.log(date1 > date2);

// 335 Попадание даты в промежуток

//Пусть есть три промежутка: с 1 января по 8 марта, с 9 марта по 17 июня, с 18 июня по 31 декабря.
//Пусть у нас также есть какая-то дата, содержащая месяц и день. 
//Давайте определим, в какой промежуток попадает эта дата:
// let date = '08-20';
// if (date >= '01-01' && date <= '03-08') {
// 	console.log('1 промежуток');
// }
// if (date >= '03-09' && date <= '06-17') {
// 	console.log('2 промежуток');
// }
// if (date >= '06-18' && date <= '12-31') {
// 	console.log('3 промежуток');
// }

// 336 Сравнение объектов с датами в JavaScript

//Можно сравнивать не только строки, но и объекты с датами.
// let date1 = new Date(2020, 1, 1);
// let date2 = new Date(2019, 1, 1);
// console.log(date1 > date2); // выведет true

//был ли уже полдень или нет.
// let now = new Date();
// let date = new Date(2023, 11, 23, 12, 0, 0);
// now-date >=0 ? console.log ('yes') : console.log('no');

//337 Основы работы с DOM в JavaScript

// 338 DOM элементы в JavaScript

// 339 Получение DOM элемента в JavaScript

//У нашей кнопочки есть атрибут id со значением button. Значит,
//мы можем найти это кнопку по селектору #button. Итак, давайте 
//найдем нашу кнопочку и запишем ссылку на нее в переменную:
// let elem1 = document.querySelector('#elem1');
// console.log(elem1);
// let elem2= document.querySelector('#elem2');
// console.log(elem1);
// let elem3 = document.querySelector('#elem3');
// console.log(elem1);

//340 Сложные селекторы DOM элемента в JavaScript

//Давайте получим ссылку на инпут, находящийся внутри блока #parent:
// let elem = document.querySelector('#parent input');
// console.log(elem);

// let elem = document.querySelector('.block p')
// console.log(elem);

// 341 Привязывание обработчиков к элементам в JavaScript

// Получим теперь ссылку на кнопку в переменную:
// let button = document.querySelector('#button');
// //Давайте, например, по клику на кнопку выведем какой-нибудь текст:
// button.addEventListener('click', function() {
// 	console.log('!!!');
// });

// Даны 3 кнопки:
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, 
// а по клику на третью - число 3.
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// let button3 = document.querySelector('#button3')
// button1.addEventListener('click', function(){
// 	console.log(1);
// })
// button2.addEventListener('click', function(){
// 	console.log(2);
// })
// button3.addEventListener('click', function(){
// 	console.log(3);
// })

//342 Именованные обработчики событий в JavaScript

// Давайте сделаем так, чтобы по клику на кнопку выполнилась наша функция func. 
// Для этого параметром addEventListener передадим имя нашей функции, вот так:
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log('!!!');
// }

// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1,
//  а по клику на вторую - функция func2.
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);
// function func1() {
// 	console.log(1);
// }
// function func2() {
// 	console.log(2);
// }

// 343 Один обработчик ко многим элементам в JavaScript

//Одну функцию можно привязать сразу к нескольким элементам. 
//Пусть для примера у нас есть следующая функция:
// function func() {
// 	console.log('!!!');
// }
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func);
// button2.addEventListener('click', func);


// function func(){
// 	console.log('message')
// }
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// 344 Несколько обработчиков одного события в JavaScript

// Пусть у нас есть две функции:
// А теперь давайте привяжем к нашей кнопке в качестве обработчиков клика и первую, и вторую функции:
// Получим ссылку на нашу кнопку в переменную:
// function func1() {
// 	console.log('1');
// }
// function func2() {
// 	console.log('2');
// }
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);

//345 Обработчики разных событий в JavaScript

// к одному элементу можно привязывать обработчики различных типов событий. 
// Давайте, например, привяжем к одному элементу реакцию на наведение курсора и реакцию на уход:
// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function(){
// 	console.log('message');
// });

// 346 Работа с текстом элементов на JavaScript

// Получим ссылку на этот тег в переменную:
// Прочитаем текст тега:
// Поменяем текст тега:
// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// elem.textContent = '!!!';

//Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function(){
// 	console.log(elem.textContent);
// })

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	console.log((+elem1.textContent + +elem2.textContent ));
// 	elem.textContent = (+elem1.textContent + +elem2.textContent );
// })

// 347 Работа с HTML кодом элементов на JavaScript

//Получим ссылку на этот тег в переменную: Прочитаем HTML код тега: Поменяем текст тега:
// let elem = document.querySelector('#elem');
// console.log(elem.innerHTML);
// elem.innerHTML = '<i>!!!</i>';

//Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.innerHTML = '<b>New text</b>'
// })

// 347 Атрибуты тегов как свойства в JavaScript

//Получим ссылку на наш элемент в переменную: Выведем значения нужных нам атрибутов: А теперь для примера поменяем значение атрибута:
// let elem = document.querySelector('#elem');
// console.log(elem.id);   // выведет 'elem'
// console.log(elem.type); // выведет 'text'
// elem.type = 'submit';

//Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.innerHTML = '<b>elem.type</b>'
// })

//Пусть у вас есть ссылка в виде тега a, кнопка и абзац. 
//По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
// let elem = document.querySelector('#elem');
// let a = document.querySelector('#href')
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	a.innerHTML = a.href
// })

// Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. 
// Пусть даны также кнопка и абзац. Сделайте так, 
// чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
// let img = document.querySelector('#leon');
// let p = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	p.innerHTML = img.src
// 	img.width = '300'
// })

// 349 Работа с текстовыми полями в JavaScript

//Получим ссылку на этот инпут в переменную: А теперь выведем на экран текущий текст инпута:
//А теперь поменяем текст инпута на другой:
// let elem = document.querySelector('#elem');
// console.log(elem.value);
// elem.value = 'new text';

//Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.value = 'happy new year!'
// })

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
// let num = document.querySelector('#num');
// let result = document.querySelector('#result');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	result.value = Math.pow(num.value, 2)
// })

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, 
// а во второй инпут - значение первого. 
// Ваш код должен работать универсально, для любых значений инпутов.
// let num = document.querySelector('#num');
// let result = document.querySelector('#result');
// let button = document.querySelector('#button');
// let elem;
// button.addEventListener('click', function(){
// 	elem = num.value;
// 	num.value = result.value;
// 	result.value = elem;
// })

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. 
// По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let num1 = document.querySelector('#num1');
// let num2 = document.querySelector('#num2');
// let num3 = document.querySelector('#num3');
// let num4 = document.querySelector('#num4');
// let num5 = document.querySelector('#num5');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// let sum= (+num1.value + + num2.value + +num3.value + +num4.value + +num5.value);
// let getAvarage = sum/5;
// elem.innerHTML = getAvarage;
// })

// 350 Фокус текстовых полей в JavaScript cобытие focus позволяет отловить получение фокуса инпутом, 
//а событие blur - потерю. Попробуем на практике. Пусть у нас инпут:

//Получим ссылку на него в переменную:
//А теперь сделаем так, чтобы по получению фокуса в консоль вывелся текущий текст инпута:
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	console.log(elem.value);
// });

//Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){
// 	elem.value = '1';
// })
// elem.addEventListener('blur', function(){
// 	elem.value = '2';
// })

//Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function(){
// 	let input = document.querySelector('#elem').value;
// 	elem.value = input**2;
// })

// 351 Исключения при работе с атрибутами в JavaScript

//При работе с атрибутами существует исключение - это атрибут class. 
//Давайте выведем значение атрибута class для нашего инпута:
// let elem = document.querySelector('#elem');
// console.log(elem.className); // выведет 'aaa bbb'

//Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	elem.innerHTML = elem.className;
// })

//Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	elem.className = 'clik';
// })

// document.querySelector('#button').addEventListener('click', function() {
// 	var elementOne = document.getElementById('one');
// 	var elementTwo = document.getElementById('two');
// 	if (elementOne.classList.contains("hidden")) {
// 	  elementOne.classList.remove("hidden");
// 	  elementTwo.classList.add("hidden");
// 	} else {
// 	  elementOne.classList.add("hidden");
// 	  elementTwo.classList.remove("hidden");
// 	}
//   })

// 352 Цепочки методов и свойств в JavaScript

//Давайте выведем на экран текст инпута:
// let elem = document.querySelector('#elem');
// console.log(elem.value); // выведет 'text'
// //На самом деле можно не вводить переменную elem, а строить цепочку из точек таким образом:
// console.log( document.querySelector('#elem').value ); // выведет 'text'

//Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
// let image = document.querySelector('#image');
// console.log(image.src);
//console.log(document.querySelector('#image').src)

// 353 Преимущества и недостатки цепочек в JavaScript

//Сравните два примера - сейчас я ввел переменную elem и могу записывать любое количество атрибутов, 
//при этом querySelector вызывается только один раз:
// let elem = document.querySelector('#elem');
// elem.value = 'www';
// elem.type  = 'submit';
// //А сейчас я не ввожу новую переменную и поэтому мне приходится вызывать querySelector два раза:
// document.querySelector('#elem').value = 'www';
// document.querySelector('#elem').type  = 'submit'

//Укажите на недостатки данного кода. Исправьте их.
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);
// let elem = document.querySelector('#image');
// elem.width = '50';
// elem.height = '70'
// console.log(elem.width);
// console.log(elem.height);
// console.log(elem.src);

// 354 Объект this в JavaScript

// //Давайте получим ссылку на него в переменную elem:
// let elem = document.querySelector('#elem');
// //Привяжем к нему функцию-обработчик события blur:
// elem.addEventListener('blur', func);
// //Внутри этой функции func будет доступен объект this, указывающий на наш инпут:
// function func() {
// 	console.log(this); // содержит ссылку на наш элемент
// }
// //Выведем содержимое атрибута value нашего инпута:
// function func() {
// 	console.log(this.value); // выведем содержимое атрибута
// }
// function func() {
// 	this.value = '!!!';
// }
// //Можно использовать и анонимную функцию:
// elem.addEventListener('blur', function() {
// 	this.value = '!!!';
// });

//Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. 
//Для обращения у инпуту внутри функции-обработчика используйте объект this.
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){
// 	this.value = '1'
// })
// elem.addEventListener('blur', function(){
// 	this.value = '2'
// })

// Дана кнопка, значением которой служит число 1. 
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function(){
// 	let res = this.value
// 	this.value = +res  + +1;
// 	elem.value = this.value;
// })

// 355 Преимущество this в JavaScript

//преимущество this? 
//Оно проявляется, когда у нас несколько элементов, и к каждому привязана одна и та же функция.
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// //Привяжем к этим кнопкам одну и ту же функцию:
// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// //А внутри функции будем выводить this.value:
// function func() {
// 	console.log(this.value);
// }

//Даны 5 абзацев с какими-то текстами. 
//По клику на любой абзац запишите в конец его текста восклицательный знак.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);
// function func() {
// 	this.value = 'text';
// 	this.innerHTML = this.value + '!';
// }

//Даны 3 инпута, в которых записаны какие-то числа. 
//По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// inp1.addEventListener('blur', func);
// inp2.addEventListener('blur', func);
// inp3.addEventListener('blur', func);
// function func(){
// 	let num = this.value;
// 	this.value = num**2;
// }

// 356 Получение группы элементов в JavaScript

//Для этого существует метод querySelectorAll, получающий все теги, 
//подпадающие под CSS селектор, в виде массива элементов

//Давайте получим массив этих абзацев, переберем их циклом и в цикле выведем тексты 
//найденных абзацев в консоль:
// let elems = document.querySelectorAll('.www');
// for (let elem of elems) {
// 	console.log(elem.textContent);
// }
//А теперь давайте в конец текста каждого абзаца добавим восклицательный знак:
// let elems = document.querySelectorAll('.www');
// for (let elem of elems) {
// 	elem.textContent = elem.textContent + '!';
// }

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и 
// установите текст каждого абзаца в значение 'text'.
// let elems = document.querySelectorAll('.www');
// let button = document.querySelector('#button')
// for (let elem of elems){
// button.addEventListener('click', function(){
// 	elem.textContent = 'text';
// })
// }

//Даны абзацы с текстом и кнопка. 
//По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
// let elems = document.querySelectorAll('.www');
// let button = document.querySelector('#button');
// for (let elem of elems) {
// 	const el = elem.textContent;
// 	button.addEventListener('click', function(){
// 		elems.forEach(function(val, index) {
// 			elems[index].textContent =  el + index;
// 		  });  	 
// })
//  }

// Даны инпуты с числами, абзац и кнопка. 
// По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// let elems = document.querySelectorAll('.inp');
// let button = document.querySelector('#button');
// let p = document.querySelector('#p');
// let sum = 0;
// 	button.addEventListener('click', function(){
// 		for(let i = 0;  i < elems.length; i++){
// 		console.log(elems[i].value);
// 		sum += +elems[i].value;
// 		p.textContent += sum;
// 	}
// })

// 357 Добавление обработчиков в цикле в JavaScript

// function func() {
// 	console.log('!');
// }
// //Давайте переберем наши абзацы в цикле и каждому абзацу добавим в качестве обработчика клика функцию func:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// //Давайте пойдем дальше и сделаем так, чтобы по клику на любой абзац выводился текст этого абзаца.
// function func() {
// 	console.log(this.textContent); // выводим текст абзаца
// }

//Дана следующая функция:
//Даны также инпуты. 
//Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// let elems = document.querySelectorAll('.inp');
// for (let elem of elems){
// 	elem.addEventListener('blur', func);
// }

//Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
// function func(){
// 	this.value = Number(this.value)*Number(this.value);
// }
// let elems = document.querySelectorAll('.inp');
// for(let elem of elems){
// 	elem.addEventListener('click', func);
// }

// 358 Добавление анонимных обработчиков в цикле в JavaScript

//Давайте навесим на элементы анонимные обработчики:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }

//Дан следующий код:Сделайте функцию-обработчик анонимной.
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', func);
// }
// function func() {
// 	this.textContent++;
// }
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function(){
// 		this.textContent++;
// 	})
// }

// 359 Отвязывание событий в JavaScript

//привязали его вот так: addEventListener('click', func), 
//то и отвяжем с теми же параметрами, вот так: removeEventListener('click', func).
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// }

//Дана ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута 
//href в круглых скобках. 
//Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let a = document.querySelector('#dzen');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func(){
// 	a.textContent = a.textContent + '(' + a.href + ')';
// 	//a.innerHTML= a.href;
// 	this.removeEventListener('click', func);
// }

//Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее 
//значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - 
//отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
// let elems = document.querySelector('#button');
// 	elems.addEventListener('click', func);
// 	function func()
// 	{
// 		this.value = Number(this.value)+1
// 		if(this.value >= 10){
// 			this.removeEventListener('click', func)
// 		}
// 	}

// 360 Отвязывание обработчиков событий в цикле в JavaScript

//Давайте к каждому из этих абзацев обработчиком клика привяжем функцию func:
//элемент, в котором произошло событие, можно получить в функции-обработчике через this. 
//Это значит, что нужно выполнять отвязывание обработчика от this, вот так
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// function func() {
// 	console.log(this.textContent);
// 	this.removeEventListener('click', func); // отвязываем обработчик
// }

//Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
//Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let elems = document.querySelectorAll('p');
// for (let elem of elems){
// 	elem.addEventListener('click', func);
// }
// function func(){
// 	this.textContent = this.textContent + '!';
// 	this.removeEventListener('click', func);
// }

// 361 Отвязывание анонимных функций в JavaScript

//Пусть теперь к нашим абзацам привязана анонимная функция:
//чтобы отвязать ее нужно дать имя функции, 
//сделав из нее именованное функциональное выражение. Сделаем это:
//Теперь эту функцию можно отвязать внутри нее самой:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		console.log(this.textContent);
// 		this.removeEventListener('click', func); // отвязываем функцию
// 	});
// }

//Дан список ul, в каждом пункте которого записано число. 
//Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
// let elems = document.querySelectorAll('li');
// for (let elem of elems){
// 	elem.addEventListener('click', function func(){
// 		this.textContent = Number(this.textContent) + 1;
// 		this.removeEventListener('click', func);
// 	})
// }

// 362 Советы по написанию кода на примере DOM в JavaScript

//let elems = document.querySelectorAll('p');
//получить наши абзацы в виде массива и вывести этот массив в консоль
//console.log(elems);
//нужно перебрать наши абзацы циклом и вывести каждый из них в консоль по отдельности:
//for (let elem of elems) {
//console.log(elem);
//выведем тексты наших абзацев:
//console.log(elem.textContent);
//Теперь давайте выведем тексты тех абзацев, чье число делится на 3:
// let text = +elem.textContent;
// 	if (text % 3 === 0) {
// 		console.log(text);
// 	}
// }
//Убедившись, что мы получаем правильные абзацы, можно приступать к суммированию их чисел:
// let elems = document.querySelectorAll('p');
// let sum = 0;
// for (let elem of elems) {
// 	let text = +elem.textContent;
// 	if (text % 3 === 0) {
// 		sum += text;
// 	}
// }
// console.log(sum);

//Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
// let elems = document.querySelectorAll('li');
// let sum = 0;
// for (let elem of elems){
// 	let num = + elem.textContent;
// 	while(num){
// 		sum += num % 10;
// 		num = Math.floor(num / 10);	
// 		};
// 	if(sum === 6){
// 		console.log (num)
// 	}
// 		//console.log(sum);
// 			//console.log(num);
// 	}
	
	// Function to compute the sum of digits in a number
// function sumOfDigits(num) {
// 	let sum = 0;
// 	// Keep adding the last digit of the number to the sum and remove it until there are no digits left
// 	while (num) {
// 	  sum += num % 10;
// 	  num = Math.floor(num / 10);
// 	}
// 	return sum;
//   }
//   // Initial list of years
//   const yearsList = document.querySelector('ul');
//   const years = Array.from(yearsList.children).map(li => parseInt(li.textContent));
//   // Filter the list of years to include only the ones whose sum of digits is 6
//   const filteredYears = years.filter(year => sumOfDigits(year) === 6);
//   console.log('Result: ' + filteredYears); // [2004, 2031]

// 363 Поиск ошибок в коде с DOM в JavaScript

// Код должен добавить текст в конец каждого абзаца:
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
// elem.textContent += '!';
// }

//По клику на абзац его значение должно увеличиться на единицу:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = +this.textContent +  Number(1);
// 	});
// }

//По клику на кнопку текст абзаца должен стать жирным:
// let button = document.querySelector('#button');
// let elem   = document.querySelector('#p');
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<u>' + elem.innerHTML + '</u>';
// });

//По клику на кнопку должна вывестись сумма чисел из абзацев:
// let button = document.querySelector('#button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	let sum = 0;
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
// 	console.log(sum);
// });

//По клику на абзац ему в конец должен добавиться заданный текст:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', () => {
// 		elem.textContent += '!';
// 	});
// }

//По клику на кнопку текст каждого абзаца должен стать жирным:
// let button = document.querySelector('#button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>'+elem.innerHTML+'</b>';
// 	}
// });

//По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
// let button = document.querySelector('#button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;
// for (let elem of elems) {
// 	sum += Number(elem.textContent);
// 	button.addEventListener('click', function() {
// 		console.log(sum);
// 	});
// }

// В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
// let button = document.querySelector('#button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;
// 	button.addEventListener('click', function() {
// 		for (let elem of elems) {
// 			sum += +elem.value;
// 		}console.log(sum);
// 	});

//В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value;
// });

// В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// btn.addEventListener('click', function() {
// 	res.innerHTML = +inp1.value + +inp2.value;
// });

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		console.log(input.dataset);
// 		console.log(String(input.value));
// 		if (String(input.value) === input.dataset) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
// 	}
// });

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'1',
// 	'1',
// 	'1',
// ];
// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		for (let text of texts) {
// 			if (input.value === text) {
// 				input.classList.add('right')
// 			} else {
// 				input.classList.add('wrong')
// 			}
// 		}
// 	}
// });

//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;
// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
// 	console.log(sum);
// });

//В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let digits = (inp.value).split('');
// 	let sum = 0;
// 	for (let digit of digits) {
// 		sum += +digit;
// 	}	
// 	console.log(sum);
// });

// 364 Отработка изученного материала на работу с DOM

//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let inp = document.querySelector('#inp');
// let p = document.querySelector('#p');
// inp.addEventListener('blur', function(){
// 	p.textContent = p.textContent +  inp.value;
// })

//Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, 
//стоящие в этих инпутах и запишите их сумму в абзац.
// let inps = document.querySelectorAll('input');
// let p = document.querySelector('#p');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let sum = 0;
// 	for(let inp of inps){
// 	console.log(inp.value);
// 	sum += +inp.value;
// 	}
// 	p.textContent = p.textContent + sum;
// })

//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function(){
// 	let digits = (inp.value).split('');
// 	let sum = 0;
// 	for(let digit of digits){
// sum += +digit;
// 	}
// 	inp.value = sum;
// })

//Дан инпут. В него вводятся числа через запятую. 
//По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function(){
// 	let digits = (inp.value).split(',');
// 	let sum = 0;
// 	for(let digit of digits){
// 		sum += +digit;
// 		let avarage = sum/digits.lenght;
// 	}console.log(sum/digits.length);
// 	console.log(sum);
// })

//Даны 4 инпута. В первый инпут вводится ФИО через пробел. 
//По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let inp1 = document.querySelector('#inp1');
// let inp = document.querySelectorAll('input');
// inp1.addEventListener('blur', function(){
// 	let fio = (inp1.value).split(' ');
// 	console.log(fio);
// inp[1].value = fio[0];
// inp[2].value = fio[1];
// inp[3].value = fio[2];
// })

//Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
//Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, 
//имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function(){
// 	let fio = (inp1.value).split(' ');
// 	let f = fio[0];
// 	let i = fio[1];
// 	let o = fio[2];
// 	console.log(f[0].toUpperCase() + f.slice(1))
// 	inp1.value = f[0].toUpperCase()+ f.slice(1) + ' ' + i[0].toUpperCase() + i.slice(1) + ' ' 
// 	+ o[0].toUpperCase() + o.slice(1);
// })

//Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function(){
// 	let text = (inp1.value).split(' ');
// 	console.log(text.length)
// })

//Дан инпут. В него вводится дата в формате 31.12.2016. 
//По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let inp1 = document.querySelector('#inp1')
// inp1.addEventListener('blur', function(){
// 	let data = (inp1.value).split('.')
// 	let [day, month, year] = data;
// console.log(data)
// 	let res = year + '-' + month + '-' + day
// 	inp1.value = res;
// })

//Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, 
//что это слово читается с начала и с конца одинаково (например, мадам).
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function(){
// 	let word = (inp1.value).split('');
// 	console.log(word);
// 	let word2 = word.toString();
// 	let res = word.reverse().toString();
// 	console.log(res)
// 	console.log(word2);
// 	  console.log(word2 === res); //true
// })

//Дан инпут. В него вводится число.
//Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function(){
// 	let nums = (inp1.value).split('');
// 	console.log(nums);
// for(let num of nums){
// 	console.log(num == 3)
// 	//if (num == 3){
// 		//console.log(num == 3)
// 		//num == 3 ? console.log('Yes'): console.log('No')
// 	//}
// }
// })

//Даны несколько абзацев и кнопка. 
//По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let p = document.querySelectorAll('p');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// for(let i=0; i<p.length; i++){
// console.log(p[i].textContent + i);	
// p[i].innerHTML = p[i].textContent + i;
// }
// })

//Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let a = document.querySelectorAll('a');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	for(let i=0; i<a.length; i++){
// 	console.log(a[i].href)
// a[i].innerHTML = a[i].textContent + '(' + a[i].href + ')';
// }
// }
// )

//Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let a = document.querySelectorAll('a');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	for(let i = 0; i < a.length; i++){
// 		if( a[i].href.indexOf('http://')=== 0){
// 			console.log(a[i].href);
// 			a[i].innerHTML = a[i].textContent + '→';
// 		}
// 	}
// })

//Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let p = document.querySelectorAll('p');
// for (let num of p){
// num.addEventListener('click', function(){
// let res = Number(this.textContent)**2;
// console.log(res);
// this.innerHTML = res;
// })
// }

//Дан инпут. В него вводится дата в формате 31.12.2016. 
//По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let inp1 = document.querySelector('#inp1');
// let now = new Date();
// inp1.addEventListener('blur', function(){
// 	let date1 = inp1.value.split('.');
// 	let [oneday, month, years] = date1;
// 	let date2 = new Date(now.getFullYear() + oneday, month, years);
// 	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	console.log(date2);
// 	console.log(days[date2.getDay()]);
// }
// )

//Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута.
 //Сделайте так, чтобы это значение не могло стать меньше нуля.
// let inp = document.querySelector('#inp');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn2.addEventListener('click', function(){
// 	inp.value = +inp.value + 1;
// })
// btn1.addEventListener('click', function(){
// 	if(+inp.value > 0){
// 	inp.value = +inp.value - 1;}
// })

//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам
// let p = document.querySelectorAll('p');
// let inp = document.querySelector('#inp');
// for (let elem of p){
// 	elem.addEventListener('click', function(){
//     elem.clicks = (elem.clicks || 0) + 1;
//     console.log(elem.clicks);
// 	inp.value = elem.clicks;
// 	})
// }

//На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. 
//И добавьте троеточие в конец обрезанного текста
// let div = document.querySelectorAll('.text');
// for(let elem of div){
// 	elem.addEventListener('click', function(){
// 		let text1 = elem.textContent.slice(0,10) + '...';
// console.log(text1);
// 	elem.textContent = text1	
// 	})
// }

//Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let inp1 = document.querySelector('#inp');
// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener('click', function(){
//     let result = '';
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    let charactersLength = characters.length;
//     for (let i = 0; i < 8; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
// inp1.value = result;
// })

//Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
//По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn1');
// btn.addEventListener('click', function(){
// 	let result = '';
// 	let test = inp.value;
// 	let newtest = test.length;
// 	for(let i = 0; i < test.length; i++){
// 		result += test.charAt(Math.floor(Math.random() * newtest))
// 	}
// 	inp.value = result
// })

//Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. 
//По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let inp = document.querySelector('#inp');
// let p = document.querySelector('#p');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let Fah = (inp.value - 32)/1.8;
// 	p.textContent = +Fah + p.textContent;
// 	console.log(Fah);
// })

//Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let inp = document.querySelector('#inp');
// let p = document.querySelector('#p');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let num = inp.value;
// 	function factorial(num){
// 		return num? num*factorial(num-1) : 1;
// 	}
// 	console.log(factorial(num));
// 	p.innerHTML = 'factorial: ' + factorial(num);
// })

//365 Получение атрибутов в JavaScript

//Метод getAttribute считывает значение заданного атрибута у тега.
// Давайте выведем содержимое атрибута value элемента:
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

//Получите значение его атрибута class.
// let elem = document.querySelector('#elem');
// let elemclass = elem.getAttribute('class')
// console.log(elemclass);

//366 Установка атрибутов в JavaScript

//Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.
// Давайте элементу поменяем значение атрибута value:
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', '!!!');

//Установите его атрибут value в значение 'text'.
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');


// 367 Удаление атрибутов в JavaScript

// Метод removeAttribute удаляет заданный атрибут у какого-либо тега.
// Давайте для элемента удалим атрибут value:
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

//Удалите у него атрибут value.
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value')

// 368 Проверка наличия атрибутов в JavaScript

//Метод hasAttribute проверяет наличие заданного атрибута у элемента. Если атрибут есть - выведет true, если нет - выведет false.

// Давайте проверим наличие атрибута value у элемента:
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

//Проверьте наличие у него атрибута value.
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));
// console.log(elem.hasAttribute('class'));

// 369 Пользовательские атрибуты в JavaScript

//следует использовать специальное свойство dataset, после которого через точку пишется имя атрибута без data-. 
//Например, если наш атрибут называется data-test, то для обращения к нему мы будем писать elem.dataset.test
// Выведем на экран значение его атрибута data-num:
// let elem = document.querySelector('#elem');
// console.log(elem.dataset.num); // выведет 1000
// А теперь присвоим этому атрибуту другое значение:
// let elem = document.querySelector('#elem');
// elem.dataset.num = 123;

// let elem = document.querySelector('#elem');
// console.log(elem.dataset.name);

//Дан следующий код:
//Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	elem.innerHTML = elem.textContent + elem.dataset.text;
})

















































































































