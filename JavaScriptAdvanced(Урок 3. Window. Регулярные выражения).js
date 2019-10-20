/*
Реализуйте страницу, которая после 5 секунд 
после загрузки отобразит пользователю новое 
окно с произвольным контентом.

window.onload=function(){
    setTimeout(function(){
        alert("Страница польностью загружена");
    },5000);
}*
//////////////////////////////////////////////////////////////////
/*
Задание 1
Разработайте программу секундомер. Секундомер 
должен иметь три кнопки «Старт», «Стоп», «Сбросить». 
Секундомер должен выводить время в формате 00:00:00.

window.onload = function () {
    let counter = 0;
    let intervalHandler;    
    let get = function (a) {
        return document.getElementById(a);
    }
    let p=get("Secundomer");
    let msst,sst,mst;
    let m = 0, s = -1, ms = 0 ;
    function count() {
        if (counter % 100 == 0) {
            s++;
            
            ms = 0;
        }
        ms = counter % 100;        
        if (s == 60) {
            m++;
            s = 0;
        }
        if (ms < 10) {
            msst = "0" + ms;
        } else {
            msst = ms;
        }
        if (s < 10) {
            sst = "0" + s;
        } else {
            sst = s;
        }
        if (m < 10) {
            mst = "0" + m;
        } else {
            mst = m;
        }
        p.innerHTML = mst + ":" + sst + ":" + msst;
        counter++;
    }
    get("strbtn").onclick = function () {
        intervalHandler = setInterval(count, 10);
    }    
    get("stpbtn").onclick =function(){
        clearInterval(intervalHandler);
    }
    get("clrbtn").onclick = function () {
        clearInterval(intervalHandler);
        m = 0, s = -1, ms = 0 ;
        counter = 0;
        p.innerHTML ="00:00:00";
    }
}
*/
//////////////////////////////////////////////////////////////////
/*
Задание 2
Разработайте страницу, которая будет выводить
сумму двух GET параметров a и b. Например,
если на страницу заходят по адресу,
page.html?a=100&b=200 то в теле страницы
должно отображаться сообщение «сумма 300»

function getQueryString() {
    var args = {};                                  // пустой объект
    // login=admin password=123
    var query = location.search.substring(1);       // Получение строки запроса.
    var pairs = query.split("&");                   // Разделение строки по амперсанду

    for (var i = 0; i < pairs.length; i++) {

        var pos = pairs[i].indexOf('=');            // Проверка пары "name=value"
        if (pos == -1) {                            // Если не найдено - пропустить
            continue;                    
        }

        var argname = pairs[i].substring(0, pos);   // Получение имени
        var value = pairs[i].substring(pos + 1);    // Получение значения

        args[argname] = value;                   // Сохранение как свойства

    }
    return args;
}
window.onload=function(){
    let mass=getQueryString();
    let sum=this.parseInt(mass.a)+this.parseInt(mass.b);
    let p=document.getElementById("task32");    
    p.innerHTML="Сумма "+sum;
}
*/
///////////////////////////////////////////////////////////////////////
/*
Задание 3
Создайте приложение, которое от пользователя
должно принимать строки в формате «10 + 20»
или «50 - 6». При получении такой строки
приложение должно отобразить результат
арифметического действия.

window.onload = function () {
    let t = document.getElementById("task33");
    let str = t.value;
    let pattern1 = new this.RegExp("\\+{1}");
    let pattern2 = new this.RegExp("\\-{1}");
    if (str.match(pattern1)) {
        var pos = str.indexOf('+');            // Проверка пары "name=value"
        var x1 = str.substring(0, pos);   // Получение имени
        var x2 = str.substring(pos + 1);
        t.value = this.parseInt(x1) + parseInt(x2);
    }
    if (str.match(pattern2)) {
        var pos = str.indexOf('-');            // Проверка пары "name=value"
        var x1 = str.substring(0, pos);   // Получение имени
        var x2 = str.substring(pos + 1);
        t.value = this.parseInt(x1) - parseInt(x2);
    }
}
*/
//////////////////////////////////////////////////////////////////////
/*
Задание 4
Создайте страницу с тремя ссылками:
«JS Урок 1», «JS Урок 2», «JS Урок 3».
При нажатии по каждой из ссылок должно
отображаться окно с описанием
соответствующих уроков этого курса.
Если окно с описание в данный момент
отображается, текст ссылки должен быть
«JS Урок № (открыт)». При повторном
нажатии на ссылку окно должно исчезать
и текст ссылки должен меняться на исходный.

window.onload = function () {
    let get = function (a) {
        return document.getElementById(a);
    }
    get("js1").onclick = function () {
        if (document.location == get("js1").href) {
            alert("JS Урок №1 (открыт)");
        } else {
            alert("Описание первого урока");
        }

    }
    get("js2").onclick = function () {
        if (document.location == get("js2").href) {
            alert("JS Урок №2 (открыт)");
        } else {            
            alert("Описание второго урока");
        }
    }
    get("js3").onclick = function () {
        if (document.location == get("js3").href) {
            alert("JS Урок №3 (открыт)");
        } else {
            alert("Описание третьего урока");
        }
    }
}
*/
///////////////////////////////////////////////////////////////////
/*
Задание 5
Создайте бегущую строку. Пользователь
вводит текст в поле ввода и нажимает
на кнопку. После чего в элементе страниц,
отображается бегущая строка с введенным текстом.
*/