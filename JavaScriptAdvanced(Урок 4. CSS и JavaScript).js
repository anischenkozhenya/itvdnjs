/*
Задание для урока 
Создайте страницу. Разместите на странице 5 
элементов div и кнопку. Создайте CSS файл, 
определите в файле правила, которые зададут 
всем дивам следующее оформление – высота и 
ширина 100 px, float=left и зеленый цвет фона. 
Создайте сценарий, который будет обрабатывать 
нажатие по кнопке и менять цвет одного из 
дивов на красный. Смена цвета должна 
происходить циклически, при первом нажатии 
первый div становиться красный остальные 
остаются зелеными, при втором нажатии – все 
div становятся зелеными, а второй красный и т.д. 

window.onload=function(){    
    let divarr=document.getElementsByTagName("div");  
    let pre=divarr.length-1;  
    let currentdiv=0;    
    document.getElementById("btnchangecolor").onclick=function(){       
        divarr[currentdiv].style.backgroundColor="red";
        divarr[pre].style.backgroundColor="green";
        currentdiv++;
        currentdiv%=divarr.length;
        pre++;        
        pre%=divarr.length;
    }
}
//////////////////////////////////////////////////////////////////
*/
/*
Задание 1 
Разработайте игру «Угадай значение». Страница 
загадывает число от 1 до 100. Пользователь в 
поле ввода вводит значение пытаясь угадать 
загаданное число. Если пользователь не угадывает 
значение страница выводит сообщение с текстом 
«загаданное значение больше введенного вами» 
или «загаданное значение меньше введенного вами». 
Подумайте как можно применить DHTML в таком  приложении. 
*/


/*
Задание 2 
Создайте страницу для авторизации. На странице 
должны находиться поля вводов для логина и пароля, 
кнопка «Вход» и checkbox «Запомнить меня». 
С помощью CSS, который расположен в отдельном файле, 
выровняйте форму для авторизации по центру страницы. 
Разработайте сценарий, который будет проверять 
срабатывать по нажатию на кнопку «Вход». Сценарий должен 
реализовывать следующее поведение: 
· Если при нажатии на кнопку поля ввода пустые – 
выводиться сообщение (в теле страницы, не через alert) 
«Вы не заполнили поля логин и пароль», также поля вводов 
должны получить красный фон. 
· Если введен логин admin и пароль 12345 то отобразить
 пользователю зеленым цветом сообщение «Вы авторизированы». 
 

 window.onload=function(){
    document.getElementsByTagName("body")[0].style.height=(window.innerHeight-50)+"px";
    let Mybody = this.document.getElementsByClassName("main")[0];
    let msgnp=document.createElement("p");
    msgnp.innerHTML="-";
    Mybody.appendChild(msgnp);    
    let lgn=document.createElement("input");
    lgn.type="text";
    Mybody.appendChild(lgn);
    let lgnp=document.createElement("p");
    lgnp.innerHTML="Login";
    Mybody.appendChild(lgnp);
    let psw=document.createElement("input");
    psw.type="text";
    Mybody.appendChild(psw);
    let pswp=document.createElement("p");
    pswp.innerHTML="password";
    Mybody.appendChild(pswp);
    let btnlogin=document.createElement("input");
    btnlogin.type="button";
    btnlogin.value="Вход";
    btnlogin.onclick=function(){
        if (lgn.value==false||psw.value==false) {
            msgnp.innerHTML="Вы не заполнили поля логин и пароль";
            lgn.style.backgroundColor="#f10303cc";
            psw.style.backgroundColor="#f10303cc";
        } 
        if (lgn.value=="admin"||psw.value=="12345") {
            msgnp.innerHTML="Вы авторизированы";
            lgn.style.backgroundColor="#79f1038f";
            psw.style.backgroundColor="#79f1038f";
        }        
    }
    Mybody.appendChild(btnlogin);
    let chk=document.createElement("input");
    chk.type="checkbox";
    Mybody.appendChild(chk);
    let chkp=document.createElement("p");
    chkp.innerHTML="Запомнить меня";
    Mybody.appendChild(chkp);

 }*/
 ////////////////////////////////////////////////////////
/*
Задание 3 
Разработайте сценарий, который каждую секунду будет 
случайным образом менять положение трех элементов div. 
Задайте элементам фиксированную ширину и высоту и 
запустите сценарий при загрузке страницы. 

window.onload = function () {
    let Mybody = this.document.getElementsByTagName("body")[0];
    let div1 = this.document.createElement("p");
    div1.style.width = "100px";
    div1.style.height = "100px";
    div1.style.backgroundColor = "red";
    div1.style.position = "absolute";
    div1.style.left = 0;
    div1.style.top = 0;
    Mybody.appendChild(div1);
    let div2 = this.document.createElement("p");
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.backgroundColor = "green";
    div2.style.position = "absolute";
    div2.style.left = 0;
    div2.style.top = 0;
    Mybody.appendChild(div2);
    let div3 = this.document.createElement("p");
    div3.style.width = "100px";
    div3.style.height = "100px";
    div3.style.backgroundColor = "black";
    div3.style.position = "absolute";
    div3.style.left = 0;
    div3.style.top = 0;
    Mybody.appendChild(div3);
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }    
    setInterval(function () {        
        div1.style.left = getRandomInt(window.innerWidth-100)+"px";
        div1.style.top =  getRandomInt(window.innerHeight-100)+"px";
        div2.style.left =  getRandomInt(window.innerWidth-100)+"px";
        div2.style.top =  getRandomInt(window.innerHeight-100)+"px";
        div3.style.left =  getRandomInt(window.innerWidth-100)+"px";
        div3.style.top = getRandomInt(window.innerHeight-100)+"px";
    }, 1)
}
*/
////////////////////////////////////////////////////////////////////////
/*
Задание 4
Разработайте страницу, разместите на ней четыре кнопки
– «вверх», «вниз», «влево», «вправо». Поместите на
странице div с текстом. При нажатии на кнопки должна
запускаться анимация, которая перемещает div на 100
px в соответствующем направлении.
window.onload = function () {
    let Mybody = this.document.getElementsByTagName("body")[0];
    let bntDown = this.document.createElement("input");
    let bntUp = this.document.createElement("input");
    let bntLeft = this.document.createElement("input");
    let bntrigth = this.document.createElement("input");
    bntDown.type = "button";    
    bntDown.id = "btn1";
    bntDown.value = "Кнопка Вниз"
    bntUp.type = "button";
    bntUp.id = "btn2";
    bntUp.value = "Кнопка Вверх"
    bntLeft.type = "button";
    bntLeft.id = "btn3";
    bntLeft.value = "Кнопка Влево"
    bntrigth.type = "button";
    bntrigth.id = "btn4";
    bntrigth.value = "Кнопка Вправо"
    let newdiv = this.document.createElement("div");
    newdiv.innerHTML = "какой-то текст";
    newdiv.style.position = "absolute";
    let p = this.document.createElement("p");    
    newdiv.appendChild(p);
    Mybody.appendChild(bntDown);
    Mybody.appendChild(bntUp);
    Mybody.appendChild(bntLeft);
    Mybody.appendChild(bntrigth);
    Mybody.appendChild(newdiv);
    let topc = 0;
    let leftc = 0;
    bntDown.onclick = function () {
        if (window.innerHeight + 100 > topc) {
            topc += 100;
            newdiv.style.top = topc + "px";
        }        
    }
    bntUp.onclick = function () {
        if (!(topc - 100 < 0)) {
            topc -= 100;
            newdiv.style.top = topc + "px";
        }
    }
    bntLeft.onclick = function () {
        if (!(leftc-100<0)) {            
            leftc -= 100;
            newdiv.style.left = leftc + "px";
        }
    }
    bntrigth.onclick = function () {
        if (!(leftc+100>window.innerWidth)) {            
            leftc += 100;
            newdiv.style.left = leftc + "px";
        }
    }
}
*/