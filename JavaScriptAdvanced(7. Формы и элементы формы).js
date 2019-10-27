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
*/
window.onload = function () {
    let fname = this.document.task7.fname;
    let txtinput = this.document.getElementsByTagName("input");
    let pname = this.document.getElementsByTagName("span");
    let pattern = new this.RegExp("\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b");
    let watermark = "Введите данные";
    let ck = false;
    for (let i = 0; i < 6; i++) {
        initInput();
        function initInput() {
            txtinput[i].value = watermark;
            txtinput[i].style.color = "grey";
            if (ck == true) {
                // pname[i].style.opacity="1";
            }
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
    ck = true;
    this.document.getElementById("res").addEventListener("click", function () {
    }, false);
    let eml = this.document.getElementsByName("email")[0];
    let msg = "";
    let ch = false;
    this.document.getElementsByName("reg")[0].addEventListener("click", function () {
        for (let i = 0; i < 6; i++) {
            pname[i].style.opacity = "0";
            if (txtinput[i].value == "" || txtinput[i].value == watermark) {
                msg += "Введены не все данные ";
                ch = true;
                pname[i].style.opacity = "1";
            }
        }
        if (pattern.test(eml.value) == false) {
            alert("sd");
        }
        if (document.getElementsByName("sex")[0].value != "Men" && document.getElementsByName("sex")[0].value != "Women") {
            msg += "Не выбран пол";
            pname[6].style.opacity = "1";
            ch = true;
        }
        if (document.getElementsByName("password")[0].value != document.getElementsByName("cpassword")[0].value) {
            msg += "Пароли не совпадают";
            ch = true;
        }
        if (ch) {
            //alert(msg);
            ch = false;
        }
        msg = "";
    }, false);
}

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
*/
window.onload = function () {
    let prices = [10, 15, 20, 1, 1.5, 2.2, 1.5, 2.2];
    let main = prices[0];
    let totalprice = prices[0];
    let input71 = this.document.getElementsByName("task71")[0].getElementsByTagName("input");
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
}

/*
Задание 2
Реализуйте модуль для работы атрибута watermark,
который будет отображать подсказку для поля ввода
в который еще не вводилось значение. Поля вводов
с применением модуля должны выглядеть так
<input type=”text” name=”login” watermark=”Введите свой логин” />
При загрузке страницы с такой формой в поле ввода
должно отображаться сообщение «Введите свой логин»,
при клике на поле ввода это сообщение должно исчезат.
 */