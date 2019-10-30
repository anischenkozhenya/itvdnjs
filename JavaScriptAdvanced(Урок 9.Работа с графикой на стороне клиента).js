/*Создайте страницу с произвольным количеством изображений. 
Создайте сценарий, который выведет адреса всех изображений 
которые загруженные на страницу, после чего с интервалом в 
одну секунду по очереди, каждому изображению добавит красную 
рамку. 

window.onload = function () {
    let imgs = this.document.getElementsByTagName("img");
    let p90=this.document.getElementsByName("p90")[0];
    for (let i = 0; i < imgs.length; i++) {
        p90.innerHTML +=imgs[i].src+"<br>";
    }
    let itimer=0;    
    let go=this.setInterval(function () {       
        if(itimer < imgs.length){
            imgs[itimer].style.border="30px solid red";
            itimer++;
        }else
        {
            clearTimeout(go);
        }
    },1000);
    
}
*/
/*
Задание 1
Создайте страницу с тремя кнопками, при нажатии на каждую из
кнопок должно меняться изображение выводимое на странице.

window.onload=function(){
    let btn91=document.getElementsByTagName("input");
    let img91=document.getElementsByTagName("img")[0];
    //alert(btn[0].getAttribute("imgsrc"));
    function chooseimg(nameBtn) {
        img91.setAttribute("src", nameBtn.getAttribute("imgsrc"));
    }
    for (let i = 0; i < btn91.length; i++) {
        btn91[i].addEventListener("click",function () {
            chooseimg(btn91[i]);
        },false);
    }
}
*/
/*
Задание 2
Создайте страницу-галерею. На странице должен выводиться список
картинок preview небольших размеров. При нажатии на каждое
изображение превью должно отображаться большое изображение.

window.onload=function () {
    let img92=document.getElementsByTagName("img");
    let prevImg="";
    for (let i = 0; i < img92.length; i++) {        
        img92[i].addEventListener("click",function(){
            img92[i].style.width="500px";
            if(prevImg==""){
                prevImg=img92[i];
            }else{
                prevImg.style.width="100px";
                prevImg=img92[i];
            }
        },false);
    }
}
*/
/*
Задание 3
Используя элемент canvas, напишите модуль, с помощью которого
на странице будет отображаться диаграмма в соответствии с
данными переданными массивом в модуль.
window.onload = function () {
    let d92 = this.document.getElementById("d93");
    let context = d92.getContext("2d");
    let array = [10, 20, 40, 5, 80, 90, 10, 50, 54, 105];
    createBarChart(d92, array, 1400, 500, "red")
}
function createBarChart(canvas, data, width, height, color) {
    if (typeof canvas == "string") canvas = document.getElementById(canvas);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }
    let scale = height / max;
    let barWidth = Math.floor(width / data.length);
    for (let i = 0; i < data.length; i++) {

        let barHeight = data[i] * scale,
            x = barWidth * i,
            y = height - barHeight;

        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 2, barHeight);
    }
}*/