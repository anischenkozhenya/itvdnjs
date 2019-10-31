/*
Создайте две HTML страницы с разным контентом. 
Создайте страницу, в которой находиться сценарий 
загружающий и отображающий контент двух страниц 
при нажатии на кнопку. Контент должен загружаться 
асинхронно. 

window.onload = function () {
    let btn10 = this.document.getElementById("btn10");
    let bd10 = this.document.getElementsByTagName("body")[0];
    btn10.addEventListener("click", function () {
        let xhr=new XMLHttpRequest();
        xhr.open("get","index1.html");
        xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("p101").innerHTML=xhr.responseText;
        }}
        xhr.send();
        xhr.open("get","index2.html");
        xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("p101").innerHTML=xhr.responseText;
        }}
        xhr.send();
    }, false);
}
*/
/*
Задание 1 
Разработайте страницу с двумя полями ввода и 
кнопкой. Пользователь должен вводить в поля 
вводов целочисленный значения, а нажатие по 
кнопке должно приводить к асинхронному запросу 
на сервер. Запрашивать следует обработчик 
CalcHandler.ashx, который находиться вместе 
с примерами в уроке номер 10, обработчик 
принимает два post параметра с именами 
‘a’ и ‘b' Результат который возвращает 
обработчик выведите на страницу. 

window.onload = function () {
    let btn101 = this.document.getElementById("btn101");
    let inp101=this.document.getElementById("d101").getElementsByTagName("input");
    btn101.onclick = function () {
        let xhr=new XMLHttpRequest();
        xhr.open("get","/CalcHandler.ashx?a="+inp101[0].value+"&b="+inp101[1].value);
        xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("p101").innerHTML=xhr.responseText;
        }}
        xhr.send();
    }
}*/