/*
Создайте страницу, которая будет отображать 
дату последнего посещения пользователя. 
После закрытия страницы информация должна 
сохранятся в cookie на протяжении одного месяца. 

window.onload = function () {
    let but = document.getElementById("check");
    let p = document.getElementById("p80");
    //alert(getCookieName("lastVisit"));
    if (getCookieName("lastVisit") !== undefined) {
        p.innerHTML = getCookieName("lastVisit");
    }
    but.addEventListener("click", function () {
        setParameters();
    });
}
function setParameters() {
    let now = new Date().toLocaleDateString();
    let age = 1 * 31 * 24 * 60 * 60;
    document.cookie = "lastVisit=" + encodeURIComponent(now) + ";max-age=" + age;
}
function getCookieName(name) {
    let str = document.cookie;
    let pos = str.indexOf(name + "=");
    if (pos !== -1) {
        let start = pos + name.length + 1;
        let end = str.indexOf(";", start);
        if (end == -1) {
            end = str.length;
        }
        return decodeURIComponent(str.slice(start, end));
    }
}
*/
/*
Создайте страницу, которую пользователь сможет
персонализировать. На странице должен находиться
выпадающий список с названиями цветов и поле ввода,
в которое можно будет ввести только целочисленное
значение. При нажатии на кнопку сохранить, цвет
выбранный в выпадающем списке должен быть присвоен
фону странице, а целочисленное значение из поля ввода,
должно использоваться для изменения размера шрифта на
странице. Выбранные настройки должны сохраниться в
cookie набор и при повторном заходе пользователя на
страницу, настройки должны восстановиться.

window.onload = function () {
    let color = this.document.getElementById("color");
    let text81 = this.document.getElementById("text81");
    let btn81 = this.document.getElementById("btn81");
    let form81 = this.document.getElementById("form81");
    let age = 1 * 31 * 24 * 60 * 60;
    //text
    let name="text";
    let clr="color";
    let str = document.cookie;
    let pos = str.indexOf(name + "=");
    if (pos !== -1) {
        let start = pos + name.length + 1;
        let end = str.indexOf(";", start);
        if (end == -1) {
            end = str.length;
        }
        form81.style.fontSize=decodeURIComponent(str.slice(start, end));
    }
    str = document.cookie;
    pos = str.indexOf(clr + "=");
    if (pos !== -1) {
        start = pos + clr.length + 1;
        end = str.indexOf(";", start);
        if (end == -1) {
            end = str.length;
        }
        form81.style.backgroundColor=decodeURIComponent(str.slice(start, end));
    }
    btn81.addEventListener("click", function () {
        document.cookie = name+"=" + text81.value + "pt;max-age=" + age;
        document.cookie = clr+"=" + color.value + ";max-age=" + age;
    }, true);
    text81.addEventListener("blur", function () {
        form81.style.fontSize = text81.value + "pt";
    }, true);
    color.addEventListener("blur", function () {
        form81.style.backgroundColor = color.value;
    }, true);    
}
*/
/*
Задание 2
Создайте вторую версию сайта описанную в первом
задании используя localStorage.
window.onload = function () {
    let color = this.document.getElementById("color");
    let text81 = this.document.getElementById("text81");
    let btn81 = this.document.getElementById("btn81");
    let form81 = this.document.getElementById("form81");
    form81.style.backgroundColor =window.localStorage.getItem("color");
    form81.style.fontSize =window.localStorage.getItem("fontsize");
    btn81.addEventListener("click", function () {
        window.localStorage.setItem("fontsize", text81.value + "pt");
        window.localStorage.setItem("color",color.value); 
    }, true);
    text81.addEventListener("blur", function () {
        form81.style.fontSize = text81.value + "pt";
    }, true);

    color.addEventListener("blur", function () {
        form81.style.backgroundColor = color.value;
    }, true);
}*/