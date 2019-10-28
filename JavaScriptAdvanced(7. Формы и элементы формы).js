/*Разработайте страницу регистрации нового пользователя. 
Форма должна получать от пользователя следующие данные: 
имя, фамилия, логин, пароль, подтверждение пароля, 
email, пол (мужчина/женщина). 
Форма должна проверять: 
1) Все поля вводов должны быть заполнены. 
2) Пароль и подтверждение пароля должны совпадать.  
3) Email должен быть указан в правильном формате. 
При не удовлетворении этих правил форма должна выводить 
сообщение об ошибке (не через alert). 

window.onload = function () {
    let fname = this.document.task70.fname;
    let txtinput = this.document.getElementsByTagName("input");
    let pname = this.document.getElementsByTagName("span");
    let watermark = "Введите данные";
    for (let i = 0; i < 6; i++) {
        initInput();
        function initInput() {
            txtinput[i].value = watermark;
            txtinput[i].style.color = "grey";
        }
        initInput();
        txtinput[i].onfocus = function () {
            if (txtinput[i].value == watermark) {
                txtinput[i].value = "";
                txtinput[i].style.color = "black";
            }
        }
        txtinput[i].onblur = function () {
            if (txtinput[i].value == "") {
                initInput();
            }
        }
    }
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        return re.test(String(email).toLowerCase());
    }
    let sbm = this.document.getElementsByName("reg")[0];
    let sex = this.document.getElementsByName("sex")[0];
    sbm.onclick = function () {
        //sex
        if (sex.options[sex.selectedIndex].value == "") {
            pname[7].style.opacity = 1;
            pname[7].style.color = "red";
        }
        else {
            pname[7].style.opacity = 0;
        }
        //password
        if (txtinput[3].value == watermark || txtinput[3].value == "") {
            pname[3].style.opacity = 1;
            pname[3].style.color = "red";
        } else {
            pname[3].style.opacity = 0;
        }
        if (txtinput[4].value == watermark || txtinput[4].value == "") {
            pname[4].style.opacity = 1;
            pname[4].style.color = "red";
        } else {
            pname[4].style.opacity = 0;
        }
        if (txtinput[3].value != txtinput[4].value) {
            pname[5].style.opacity = 1;
            pname[5].style.color = "red";
        } else {
            pname[5].style.opacity = 0;
        }
        //Имя фамилия логин
        if (txtinput[0].value == watermark || txtinput[1].value == "") {
            pname[0].style.opacity = 1;
            pname[0].style.color = "red";
        } else {
            pname[0].style.opacity = 0;
        }
        if (txtinput[1].value == watermark || txtinput[1].value == "") {
            pname[1].style.opacity = 1;
            pname[1].style.color = "red";
        } else {
            pname[1].style.opacity = 0;
        }
        if (txtinput[2].value == watermark || txtinput[1].value == "") {
            pname[2].style.opacity = 1;
            pname[2].style.color = "red";
        } else {
            pname[2].style.opacity = 0;
        }
        alert(validateEmail(txtinput[6].value));
        if (!validateEmail(txtinput[6].value)) {
            pname[6].style.opacity = 1;
            pname[6].style.color = "red";
        } else {
            pname[6].style.opacity = 0;
        }
    }
}*/
//

//
/*
Задание 1
Разработайте страницу заказа пиццы.
Требования к странице:
Можно заказать три вида пиццы - маленькая, большая, средняя.
Можно самостоятельно выбрать ингредиенты к пицце - грибы, бекон
, помидоры, сыр, оливки.
На странице должна вводиться информация о покупателе
(его телефон и адрес доставки).

Подумайте, какие данные следует проверять
на странице, реализуйте эту проверку.
Также реализуйте подсчет стоимости пиццы,
при выборе размеров и ингредиентов, автоматические
должна пересчитываться сумма заказа. Цены на размер
пиццы и отдельные ингредиенты выберите произвольно.
/////////////////////////////////////////////////////////////

window.onload = function () {
    let prices = [10, 15, 20, 1, 1.5, 2.2, 1.5, 2.2];
    let main = prices[0];
    let totalprice = prices[0];
    let input71 = this.document.getElementsByName("task71")[0].getElementsByTagName("input");
    let al=this.document.getElementsByName("alert")[0];
    al.innerHTML="";
    al.style.color="red";
    input71[8].value = "";
    input71[9].value = "";
    for (let i = 0; i < 3; i++) {
        input71[i].onclick = function () {
            if (input71[i].checked) {
                totalprice -= main;
                main = prices[i];
                totalprice += main;
            }
            totalPriceHtml.innerHTML = totalprice + "рублей";
        }
    }
    for (let i = 3; i < 8; i++) {
        input71[i].onclick = function () {
            if (input71[i].checked) {
                totalprice += prices[i];
            } else {
                totalprice -= prices[i];
            }
            totalPriceHtml.innerHTML = totalprice + "рублей";
        }
    }
    let totalPriceHtml = this.document.getElementsByName("totalprice")[0];
    totalPriceHtml.innerHTML = totalprice + "рублей";
    input71[10].onclick = function () {
        if (input71[8].value == "" ||
            input71[9].value == "") {
                al.innerHTML="Введены не все данные";
        }
        else {
            al.innerHTML="";
            alert("Заказ отправленсумма заказа :" + totalprice + "рублей");
        }
    }
}
*/
/*
Задание 2
Реализуйте модуль для работы атрибута watermark,
который будет отображать подсказку для поля ввода
в который еще не вводилось значение. Поля вводов
с применением модуля должны выглядеть так
<input type=”text” name=”login” watermark=”Введите свой логин” />
При загрузке страницы с такой формой в поле ввода
должно отображаться сообщение «Введите свой логин»,
при клике на поле ввода это сообщение должно исчезать.

window.onload = function () {
    let logininput = this.document.getElementsByName("login")[0];
    let watermark = logininput.getAttribute("watermark");
    function initInput() {
        logininput.value = watermark;
        logininput.style.color = "grey";
    }
    initInput();
    logininput.onfocus = function () {
        if (logininput.value == watermark) {
            logininput.value = "";
            logininput.style.color = "black";
        }
    }
    logininput.onblur = function () {
        if (logininput.value == "") {
            initInput();
        }
    }
}
*/
