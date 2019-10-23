/*
Создайте страницу-калькулятор.
Разместите на странице два поля
ввода и кнопки для арифметических
операций над данными введенными в
поля ввода. Реализуйте данную страницу
двумя способами – с использованием модели
DOM Level 0 (через свойства) и DOM Level 2.

window.onload = function () {
    let txt1 = document.getElementById("x1");
    let txt2 = document.getElementById("x2");
    let res = document.getElementById("result");
    let sum = document.getElementById("btnsum");
    let sub = document.getElementById("btnsub");
    let mul = document.getElementById("btnmul");
    let div = document.getElementById("btndiv");
    let ton = document.getElementById("btnost");

////////////////////////////////////////////////////////////////////
    /* dom0
        sum.onclick = function () {
            alert();
            res.innerHTML = parseInt(txt1.value) + parseInt(txt2.value);
        }
        sub.onclick = function () {
            res.innerHTML = parseInt(txt1.value) - parseInt(txt2.value);
        }
        mul.onclick = function () {
            res.innerHTML = parseInt(txt1.value) * parseInt(txt2.value);
        }
        div.onclick = function () {
            res.innerHTML = parseInt(txt1.value) / parseInt(txt2.value);
        }
        ton.onclick = function () {
            res.innerHTML = parseInt(txt1.value) % parseInt(txt2.value);
        }
    }
    dom2

    if (sum.addEventListener) {
        sum.addEventListener("click", function () {
            res.innerHTML = parseInt(txt1.value) + parseInt(txt2.value);
        }, false);
    }
    if (sub.addEventListener) {
        sub.addEventListener("click", function () {
            res.innerHTML = parseInt(txt1.value) - parseInt(txt2.value);
        }, false);
    }
    if (mul.addEventListener) {
        mul.addEventListener("click", function () {
            res.innerHTML = parseInt(txt1.value) * parseInt(txt2.value);
        }, false);
    }
    if (div.addEventListener) {
        div.addEventListener("click", function () {
            res.innerHTML = parseInt(txt1.value) / parseInt(txt2.value);
        }, false);
    }
    if (ton.addEventListener) {
        ton.addEventListener("click", function () {
            res.innerHTML = parseInt(txt1.value) % parseInt(txt2.value);
        }, false);
    }
}
*/
////////////////////////////////////////////////////////////////////
/*
Задание 1
Переделайте сценарий предыдущего примера
таким образом, что бы в поля вводов можно
было вводить только целочисленные значения.
Используйте для этого модель обработки событий DOM Level 2.


window.addEventListener("load", function () {
    var loc=this.document.getElementById("locker");
    loc.addEventListener("keypress",function(e){
        if(String.fromCharCode(e.charCode)!="0"&&
        String.fromCharCode(e.charCode)!="1"&&
        String.fromCharCode(e.charCode)!="2"&&
        String.fromCharCode(e.charCode)!="3"&&
        String.fromCharCode(e.charCode)!="4"&&
        String.fromCharCode(e.charCode)!="5"&&
        String.fromCharCode(e.charCode)!="6"&&
        String.fromCharCode(e.charCode)!="7"&&
        String.fromCharCode(e.charCode)!="8"&&
        String.fromCharCode(e.charCode)!="9"){
            e.preventDefault();
        }
    },true);
}, false);
///////////////////////////////////////////////////////////
/*
Задание 2
Разработайте JavaScript модуль, который поможет
привязывать обработчики событий для элементов с
использованием модели DOM Level 2 если она доступна
или с помощью событий IE если DOM Level 2 не
поддерживается браузером.

window.onload=function(){
    let divq=this.document.getElementById("locker");
    if(divq.addEventListener){
        divq.addEventListener("click",function(){alert();
        },true);
    }else{
        divq.attachEvent("onclick",function(){alert();

        });
    }
}
////////////////////////////////////////////////////////////////////////////////
6
Разработайте страницу, на которой должен быть
размещен DIV с высотой и шириной в 25 пикселей.
Реализуйте обработчики событий таким образом,
что бы при нажатии на кнопки со стрелками DIV
перемещался в соответствующие стрелками направлениям
на 10 пикселей.

window.onload = function () {
    let bdr = this.document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.height = "25px";
    div.style.width = "25px";
    div.style.position = "absolute";
    bdr.appendChild(div);
    let btnup = document.createElement("input");
    btnup.type = "button";
    btnup.value = "up";
    bdr.appendChild(btnup);
    let btndown = document.createElement("input");
    btndown.type = "button";
    btndown.value = "down";
    bdr.appendChild(btndown);
    let btnl = document.createElement("input");
    btnl.type = "button";
    btnl.value = "left";
    bdr.appendChild(btnl);
    let btnrt = document.createElement("input");
    btnrt.type = "button";
    btnrt.value = "rigth";
    bdr.appendChild(btnrt);
    let topc = 0;
    let leftc = 0;
    btndown.addEventListener("click", function () {
        if (window.innerHeight + 25 > topc) {
            topc += 25;
            div.style.top = topc + "px";
        }
    }, false);
    btnup.addEventListener("click", function () {
        if (!(topc - 25 < 0)) {
            topc -= 25;
            div.style.top = topc + "px";
        }
    }, false);
    btnl.addEventListener("click", function () {
        if (!(leftc - 25 < 0)) {
            leftc -= 25;
            div.style.left = leftc + "px";
        }
    }, false);
    btnrt.addEventListener("click", function () {
        if (!(leftc + 25 > window.innerWidth)) {
            leftc += 25;
            div.style.left = leftc + "px";
        }
    }, false);
}
*/
/////////////////////////////////////////////////////////////////////
/*
Задание 1
Разработайте странице «текстовый редактор».
На странице должно быть размешено поле ввода
и кнопка «Сохранить» (фактического сохранения
данных из поля ввода делать не надо). Если
пользователь пытается закрыть окно браузера
не «сохранив» данные в поле ввода, должно
запускаться окно, которое потребует
подтверждения операции закрытия окна.

не поддерживается!!!
*/

/*
Задание 2
Создайте страницу с несколькими блоками текста.
Реализуйте обработчики событий таким образом,
что бы при нажатии на кнопку r – текст становился
красного цвета, кнопка g- сделает цвет текста
зеленым, а b – синим.
window.onload = function () {
    let body = this.document.getElementsByTagName("body")[0];
    let div = this.document.createElement("div");
    body.appendChild(div);
    let txt1 = this.document.createElement("input");
    txt1.type = "text";
    div.appendChild(txt1);
    let txt2 = this.document.createElement("input");
    txt2.type = "text";
    div.appendChild(txt2);
    let txt3 = this.document.createElement("input");
    txt3.type = "text";
    div.appendChild(txt3);
    div.addEventListener("keypress", function (e) {
        if (String.fromCharCode(e.charCode) == "r") {
            e.target.style.color = "red";
            
        }
        if (String.fromCharCode(e.charCode) == "g") {
            e.target.style.color = "green";
        }
        if (String.fromCharCode(e.charCode) == "b") {
            e.target.style.color = "blue";
        }
    }, false);
}
*/
//////////////////////////////////////////////////////////////////////
/*
Задание 3
Сделайте кнопку с надписью «получить скидку».
При наведение кнопка должна «убегать» от
курсора не давая пользователю нажать себя.

window.onload=function(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let body=this.document.getElementsByTagName("body")[0];
    let button=this.document.createElement("input");
    button.type="button";
    button.value="получить скидку";
    button.style.top="100px";
    button.style.backgroundColor="red";
    button.style.left="100px";
    button.style.position="absolute";
    body.appendChild(button);
    button.addEventListener("click",function(){alert("попал")},false);
    button.addEventListener("mouseenter",function(){
        button.style.top=getRandomInt(window.innerHeight-button.style.height)+"px";
        button.style.left=getRandomInt(window.innerWidth-button.style.width)+"px";
        
    },false);
}
 */
///////////////////////////////////////////////////////////////////////
/*
Задание 4
Разработайте страницу, которая будет выводить
сообщение «сохранено» при нажатии на клавиши
Ctrl + S, «выбрано все» при нажатии на
Ctrl + A и «сохранено все» при нажатии
на комбинацию Ctrl + Shift + S

window.onload = function () {
    let bd = this.document.getElementsByTagName("body")[0];
    let s = false;
    let c = false;
    bd.addEventListener("keypress", function (e) {
        if (String.fromCharCode(e.charCode) == "s" || String.fromCharCode(e.charCode) == "S") {

            if (this.s == true && this.c == true) {
                alert("сохранено все");
            }
            if (this.s == false && this.c == true) {
                alert("сохранено");
            }
        }
    }, true);
    bd.addEventListener("keypress", function (e) {
        if (String.fromCharCode(e.charCode) == "a" || String.fromCharCode(e.charCode) == "A") {
            if (this.c == true) {
                alert("выбрано все");
            }
        }
    }, true);
    bd.addEventListener("keydown", function (e) {
        if (e.ctrlKey) {
            this.c = true;
        }
        if (e.shiftKey) {
            this.s = true;
        }
    }, true);
    bd.addEventListener("keyup", function (e) {
        if (e.ctrlKey) {

            this.c = false;
        }
        if (e.shiftKey) {

            this.s = false;
        }
    }, true);
}*/