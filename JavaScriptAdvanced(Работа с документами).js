/*Создайте страницу, разместите на странице 
в произвольном порядке несколько параграфов, 
ссылок и элемент Div c id=test_div. Разместите 
на странице три кнопки – «выбрать все параграфы», 
«выбрать все ссылки», «выбрать DIV». При нажатии 
на каждую кнопку должна запускаться функция 
обработчик, которая добавит рамку определенного 
цвета на соответствующие элементы. Сделайте код JS ненавязчивым. 

let lens
let Method1=function(){
    lens=document.getElementsByTagName("p"); 
    for (let i = 0; i < lens.length; i++) {
        lens[i].style="border-style: solid;border-color: red;";        
    }   
}
let Method2=function(){
    lens=document.getElementsByTagName("a");
    for (let i = 0; i < lens.length; i++) {
        lens[i].style="border-style: solid;border-color: blue;";        
    }     
}
let Method3=function(){
    lens=document.getElementById("test_div");    
        lens.style="border-style: solid;border-color: green;";       
       
}
*/
//////////////////////////////////////////////////////////////////////////////
/* 
Задание 1 
Разработайте страницу с произвольным количеством HTML элементов. 
Создайте модуль, который после загрузки страницы поменяет текст 
во всех параграфах на PARAGRAPH. Вы должны разработать две 
версии модуля с использованием объекта в качестве 
пространства имен и с использованием анонимной функции. 

window.onload=function () {
    lens=document.getElementsByTagName("p"); 
    for (let i = 0; i < lens.length; i++) {
        lens[i].innerHTML="PARAGRAPH";        
    }  
}
//////////////
(function() {
    lens=document.getElementsByTagName("p"); 
    for (let i = 0; i < lens.length; i++) {
        lens[i].innerHTML="PARAGRAPH";        
    }})();
*/
///////////////////////////////////////////////////////////////////////////

/* 
Задание 2 
Создайте страницу с кнопкой, при нажатии по кнопке на странице 
должен создаваться параграф с произвольным текстом. 
После создания 10 параграфов все они должны быть удалены. 

let Method5=function(){
    let elem=document.getElementsByTagName("p");
    let divs=document.getElementById("div");
    if (elem.length<10) {
        let p =document.createElement("p");
        p.innerHTML="параграф";
        divs.appendChild(p);
    }else{
        for (let i = 9; i >= 0; i--) {
           divs.removeChild(elem[i]);  
        }
    }
}
*/
/////////////////////////////////////////////////////////////////////
/* 
Задание 3  
Разработайте модуль, который будет содержать функцию для 
получения элементов на странице с определенным значением в 
атрибуте с именем class. Пример использование модуля. 
var arr = MyQuery.FindClass(“redButton”); - 
возвращает массив элементов с атрибутом class=”redButton” 

function redButton() {
    function MyQuery() {        
    }
    MyQuery.FindClass = function(a) {
        this.redBtn = document.getElementsByClassName(a);        
        this.arr =new Array();
        for (let i = 0; i < this.redBtn.length; i++) {
            this.arr[i] = this.redBtn[i].tagName;            
        }        
        return this.arr;
    }
    let arr1 =MyQuery.FindClass("redButton"); 
    let out = document.getElementById("out"); 
    for (let i = 0; i < arr1.length; i++) {        
        out.innerHTML+=arr1[i]+" ";
    }
}
*/
