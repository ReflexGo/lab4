//задача 1
/*
function MyFirstFunction() {
    document.write("<p>Hello from MyFirstFunction!");
    document.write("<p>How are you?");
    document.write("<p>Goodbye!");
}

function MySecondFunction() {
    document.write("<p>Hello from MySecondFunction!");
}
MyFirstFunction();

document.write("<hr/>");

// Вызов функций.
MySecondFunction();

document.write("<hr/>");
*/

// задача 2,3
/*
var name;
var sname;
var age;

function ask() {
    name = prompt("Введите свое имя:");//записали значение глобальной переменной
    sname = prompt("Введите свою фамилию:");//записали значение глобальной переменной
    age = prompt("Введите свой возраст:");//записали значение глобальной переменной
}

function say() {
    document.write("Имя: " + name + "<br />");//вызвали значение глобальной переменной
    document.write("Фамилия: " + sname + "<br />");//вызвали значение глобальной переменной
    document.write("Возраст: " + age + "<br />");//вызвали значение глобальной переменной
    document.write("<hr/>");
}

 // Вызов функций.

do {
    ask();
    say();
    repeater = confirm("Пройти заполнение еще раз?");
}while (repeater);
*/

// задача 4
/*
var a = 10;
var b = 15;
var c = 20;
var d = 21;
var x1;
var x2;
function Sum1(){
    var result = a + b;
    document.write("<p>Sum1 result: " + result);
}

function Sum2(x1, x2){
    var result = x1 + x2;
    document.write("<p>Sum2 result: " + result);
}
Sum1();
Sum2();
Sum2(c, d);
*/

// задача 5
/*
function print(msg, count)
{
    if(count == undefined)
    {
        count = 3;
    }

    for(var i = 0; i < count; i++)
    {
        document.write("<p>" + msg);
    }

    document.write("<hr/>");
}

print("hello");
print("world", 7);
*/

//задача 6
/*
function Sum(a, b) {  
    alert('Hello!'); // return прерывает выполнение кода
    return a + b;
}
function step(a, b){
    var step = a;
    for(i = 1; i < b; i++){
        a *= step;
    }
    return a;
}
var res = Sum(2, 3);
document.write(res + "<br />");

var res2 = step(2,3);
document.write(res2);
*/

//задача 7
/*
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function stp(a, b){
    var step = a;
    for(i = 1; i < b; i++){
        a *= step;
    }
    return a;
}
function sqrt(a){
    return Math.sqrt(a);
}
var operand1 = prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * / stp sqrt");
if(sign != "sqrt"){
    var operand2 = prompt("Введите второе число: ");
}
var result = undefined;

operand1 = parseInt(operand1);//глобальный метод parseInt
operand2 = parseInt(operand2);//глобальный метод parseInt
switch (sign) {
    case "+":
        result = add(operand1, operand2);
        break;
    case "-":
        result = sub(operand1, operand2);
        break;
    case "*":
        result = mul(operand1, operand2);
        break;
    case "/":
        result = div(operand1, operand2);
        break;
    case "stp":
        result = stp(operand1, operand2);
        break;
    case "sqrt":
        result = sqrt(operand1);
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.");
}

if (result != undefined && sign != "sqrt"){
    document.write("<p>" + operand1 + " " + sign + " " + operand2 + " = " + result);
}else{
    document.write("<p>" + sign + " " + operand1 + " = " + result);
}
*/

//Задача 8
/*
function max(a, b, c) {
    //функция показывает максимальное значение аргумента, котороый передан при вызове
    console.log(arguments);
    var maxValue = Number.NEGATIVE_INFINITY; //присваеваем изначально
    //минус бесконечность
    document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
    //перебираем циклом аргументы
    for (
      var i = 0;
      i < arguments.length;
      i++ // arguments - свойство объекта max - который есть функцией
    )
      if (arguments[i] > maxValue) maxValue = arguments[i];

    return maxValue;
}
var res = max(-33, 33, 777, -666, -22, 888);
document.write("<p>Максимальное значение одного из аргументов функции = " + res);
*/
/*
Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями
Number.NEGATIVE_INFINITY - Специальное значение для представления отрицательной бесконечности; возвращается при переполнении.
Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
Всё прекрасно работает.
*/

//Задача 9

function f(x, y, z)
{
    if(arguments.length != 3)
    {
        document.write("<p><b style='color:red;'>ERROR:</b> <em>Требуется три аргумета при вызове. Функция вызвана с " + arguments.length + "параметрами!</em>");
    }
    else
    {
        document.write("<p><b style='color:green;'>Правильный вызов функции.</b> Аргументы: ");
    

    for(var i = 0; i < arguments.length; i++)        
        document.write(arguments[i] + ", ");
    }
}
f(1, 2, 3, 4);
f(1, 2, 3);
f(1, 2)        
