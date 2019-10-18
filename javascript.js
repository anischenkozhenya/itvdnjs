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


/*
        Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми
        значениями. Вывести наибольшее значение массива, наименьшее значение массива, общую сумму
        элементов, среднее арифметическое всех элементов, вывести все нечетные значения.
        let l=parseInt(prompt("Длина массива"));
        let r=new Array(l);

        let sum=0;
        let sa;
        for (let i = 0; i < r.length; i++) {
            r[i] = parseInt(prompt("ВВедите число"));
            sum+=r[i];
        }
        sa=sum/l;
        let min=r[0];
        let max=r[0];
        document.write("<hr/>");
        for (let i = 0; i < r.length; i++) {
            document.write("<p>"+r[i]);
            if(r[i]<min){
                min=r[i];
            }
            if(r[i]>max){
                max=r[i];
            }
        }
        document.write("<hr/>");
        document.write("<p> sum"+sum);
            document.write("<hr/>");
        document.write("<p> min"+min);
            document.write("<hr/>");
        document.write("<p> max"+max);
            document.write("<hr/>");
        document.write("<p> sa"+sa);
            document.write("<hr/>");
        for (let i = 0; i < r.length; i++) {

            if(r[i]%2==1){
            document.write("<p>"+r[i]);
            }

        }
        document.write("<hr/>");
        */



        /*
        Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными
        целочисленными значениями. По главной диагонали все числа со знаком (-) заменить на 0, а числа со
        знаком (+) на число 1.

        let arr =new Array();
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }
        for (let i = 0; i < 5; i++) {
            arr.push([]);
            for (let j = 0; j < 5; j++) {
                arr[i].push(getRandomInt(-100, 100));
            }
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {


                document.write(arr[i][j]+" ");
            }
            document.write("<br>");
        }document.write("<hr/>");
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (i==j) {
                    if (arr[i][j] < 0){
                        arr[i][j] = 0;
                    }else {
                        arr[i][j] = 1;
                    }
                }
                document.write(arr[i][j]+" ");
            }
            document.write("<br/>");
        }*/

        //Создайте массив размерностью N элементов, выведите все элементы массива в обратном порядке.
        /*let k= new  Array();
        k=[1,2,3,4,5,6,7,8,9,0,100]
        for (let i = k.length-1; i >= 0; i--) {
            document.write(k[i]+" ");

        }*/
        /* Создайте метод с именем Calculate, который принимает в качестве параметров три целочисленных
         значения и выводит на экран среднее арифметическое этих параметров.
         Самостоятельная деятельность учащегося
         let Calculate=function(a,b,c){
             return (a+b+c)/3;
         }
         document.write( Calculate(100,200,550));
        */





        /*
        Создайте четыре функции для арифметических действий: (Add – сложение, Sub – вычитание, Mul –
        умножение, Div – деление). Каждая функция должна принимать два параметра и выводить на экран
        результат вычисления. Функция деления должна делать проверку деления на ноль. Пользователь
        вводит значения, над которыми хочет произвести операцию и выбрать саму операцию.
        let Add=function(a,b){
            return a+b;
        }
        let Sub=function(a,b){
           return a-b;
        }
        let Mul=function(a,b){
            return a*b;
        }
        let Div=function(a,b){
            if(b!=0){
              return  a/b;
            }
        }
        let a=100;
        let b=20;

        document.write(Add(a,b)+"<hr/>");

        document.write(Sub(a,b)+"<hr/>");

        document.write(Mul(a,b)+"<hr/>");

        document.write(Div(a,b)+"<hr/>");
        */



        /*
        Напишите функцию, которая будет принимать число и определять:
        1. Является ли введенное число положительным или отрицательным.
        2. Является ли оно простым
        3. Делится ли оно на 2, 5, 3, 6, 9 без остатка
        let f = function (p) {
            let bool;
            let limit = Math.sqrt(p);
            if (p < 2) {
                bool = false;
            } else
                if (p == 2) {
                    bool = true;
                } else
                    if (p % 2 == 0) {
                        bool = false;
                        document.write(a + " делится на 2<br>");
                    } else { }
            for (let i = 3; i <= limit; i += 2) {
                if ((p % i) == 0) {
                    bool = false;
                }
                else {
                    bool = true;
                }
            }
            if (p % 3 == 0) {
                document.write(a + " делится на 3<br>");
            }
            if (p % 6 == 0) {
                document.write(a + " делится на 6<br>");
            }
            if (p % 9 == 0) {
                document.write(a + " делится на 9<br>");
            }
            if (p % 5 == 0) {
                document.write(a + " делится на 5<br>");
                bool = false;
            }
            if (bool == true) {
                document.write(a + " Simple");
            } else {
                document.write(a + " Not Simple");
            }
        }
        let a = parseInt(prompt("число"));
        f(a);*/



        /*Создать объект «Менеджер» с помощью блока инициализации, задать свойства «Имя, Фамилия,
        возраст …».
        Создать объект «Секретарь» с помощью конструктора, задать свойства «Имя, Фамилия, возраст …».
        
        let Manager={firstName:"Женя",lastName:"Анищенко",Age:15}
        
        document.write(Manager.firstName+" "+Manager.lastName+" "+Manager.Age+"<br><hr>");
        
        function Secretar(firstName,lastName,Age){
            this.firstName=firstName;
            this.lastName=lastName;
            this.Age=Age;
        }
        let NewSecretar=new Secretar("Дима","Постоялкин",25);
        
        document.write(NewSecretar.firstName+" "+NewSecretar.lastName+" "+NewSecretar.Age+"<br>");
       */


//Создать объект «Документ», в котором определить
// свойства «Заголовок, Тело, Футер, Дата». 
//Создать в объекте вложенный объект – «Приложение». 
//Создать в объекте «Приложение», вложенные объекты, 
//«Заголовок, Тело, Футер, Дата». Создать методы 
//для заполнения и отображения документа. 

/*
let Doc = {
    head: "",
    body: "",
    footer: "",
    data: "",
    appendix: {
        head: "",
        body: "",
        footer: "",
        data: ""
    },
    add: function (a, b, c, d) {
        this.head = a;
        this.body = b;
        this.footer = c;
        this.data = d;
        this.appendix.head = head;
        this.appendix.body = this.body;
        this.appendix.footer = this.footer;
        this.appendix.data = this.data;
    },
    show: function () {
        document.write(this.head + this.body + this.footer + this.data + this.appendix.head + this.appendix.body + this.appendix.footer + this.appendix.data);
    }
}
Doc.add("1", "2", "3", "4", "5", "6", "7", "8");
Doc.show();*/
