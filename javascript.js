//Создайте 3 переменные   x = 6, y = 15, и z = 4: 
//Выполните и отобразите результат следующих операций для этих переменных:  
//· x += y - x++ * z ; 
//· z = -- x - y * 5 ; 
//· y /= x + 5 % z ;  
//· z = x++ + y * 5 ; 
//· x = y - x++ * z ; 
//let x = 6;
//let y = 15;
//let z = 4;
//x += y - (x++) * z;
//document.write("<p>x=" + x);
//z = (--x) - y * 5;
//document.write("<p>z=" + z);
//y /= x + 5 % z;
//document.write("<p>y=" + y);
//z = (x++) + y * 5;
//document.write("<p>z=" + z);
//x = y - (x++) * z
//document.write("<p>x=" + x);
//document.write("<hr/>");

//Вычислите среднее арифметическое трех целочисленных значений и выведите его на экран.
//let n1= parseInt(prompt("Первое число"));
//let n2= parseInt(prompt("Второе число"));
//let n3= parseInt(prompt("Третье число"));
//let result=(n1+n2+n3)/3;
//document.write("<p>"+result);
//document.writeln("<hr/>");

//Напишите программу расчета объема - V и площади поверхности - S цилиндра.  
//Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h. 
//Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h). 
//Результаты расчетов выведите на экран. 
//let r=parseInt(prompt("Введите радиус"));
//let h=parseInt(prompt("Введите высоту"));
//let V= Math.PI*r*2*h;
//let S= 2*Math.PI*r*(r+h);
//document.write("<p>V = πr 2 h="+V);
//document.write("<p>S = 2π rh + 2π r 2 = 2π r (r+ h)="+S);
//document.write("<hr>");

//Дано два числа A и B где (A<B).  
//Выведите на экран сумму всех чисел расположенных
// в числовом промежутке от А до В.  
//Выведите на экран все нечетные значения, 
//расположенные в числовом промежутке от А до В. 
//let a = parseInt(prompt("Введите A"));
//let b = parseInt(prompt("Введите В"));
//let result=0;    
//for(i=a;i<=b;i++){
//    result=result+i;
//}
//document.write("<p>"+result);
//document.write("<hr/>");        
//for(i=a;i<=b;i++){
//    if(i%2==1){
//    document.write("<p>"+i);
//    }
//}

//Напишите программу, которая будет 
//рассчитывать и выводить на экран
// количество возможных вариантов доставки 
//товара. Для решения задачи, используйте 
//факториал N!, рассчитываемый с помощью 
//цикла do-while . 
//let k=parseInt(prompt("Введите число"));
//let result=1;
//let n=1;
//do{
//    result*=n;
//    n++;
//}while(n<=k);
//document.write("<p>"+result);


//Используя циклы нарисуйте в браузере 
//с помощью пробелов (&nbsp) и звездочек (*): 
//· Прямоугольник 
//· Прямоугольный треугольник  
//· Равносторонний треугольник 
//· Ромб. 
/*for (i = 0; i < 5; i++) {
    for (j = 0; j < 10; j++) {
        document.write("*&nbsp");
    }
    document.write("<br>");
}
document.write("<hr>");
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        if (i <= j) {
            document.write("*&nbsp");
        }
    }
    document.write("<br>");
}
document.write("<hr>");
 
let l=parseInt(prompt("Введите нечетное число"));
let n = 1;
let k = l-1;
for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
        
        if (j == k) {
            for (t = 0; t < n;t++) {
                document.write("&nbsp*&nbsp");                    
            j += 1;
            }
        }
        else {
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
        k-=1;
        n+=1;
}
document.write("<hr>")
 
let nn = 1;
let kk = l-1;
let nnn = l-1;
let kkk = 0;
for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
        
        if (j == kk) {
            for (t = 0; t < nn;t++) {
                document.write("&nbsp*&nbsp");                    
            j += 1;
            }
        }
        else {
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
        kk-=1;
        nn+=1;
 
}
for (i = 0; i < l-1; i++) {
    document.write("&nbsp&nbsp");   
    for (j = 0; j < l-1; j++) {
        
        if (j == kkk) {
            for (t = nnn; t > 0;t--) {
                document.write("&nbsp*&nbsp");                    
            }
            j+=nnn;
        }
        else {
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
    nnn--;
    kkk++;    
}*/


//Создать объект «Документ», в котором определить
// свойства «Заголовок, Тело, Футер, Дата». 
//Создать в объекте вложенный объект – «Приложение». 
//Создать в объекте «Приложение», вложенные объекты, 
//«Заголовок, Тело, Футер, Дата». Создать методы 
//для заполнения и отображения документа. 
doc ={
    head;
    body;
    footer;
    data;
    add = function (a, b, c, d) {
        this.head = a;
        this.body = b;
        this.footer = c;
        this.data = d;

    }
}
let a = new doc();
a.Add("q", "w", "e", "r");
document.write(a.head + " " + a.body + " " + a.footer + " " + a.data);