/*Задание для урока
Создайте функцию-конструктор Box(коробка)
для создания объекта со свойствами Height(высота),
Width(ширина), Depth(глубина) и Material(материал).
Также в объекте должны быть методы Volume -
для получения объема и equals() – для сравнения
объектов, объекты должны считаться равными если
содержат одинаковые значения в свойстве Material.

function Box(h,w,d,m) {
    this.Height=h;
    this.Width=w;
    this.Depth=d;
    this.Material=m;
    this.Volume=function() {
        return this.Height*this.Width*this.Depth;
    }
    this.Show=function () {
        document.write(this.Height+"*"+this.Width+"*"+this.Depth+"="+this.Volume());
    }
    this.equals=function(box) {
        if(this.Material==box.Material){
            document.write("true");
        }else{
            document.write("false");
        }
    }
}
let a=new Box(1,2,3,"мясо");
let b=new Box(3,4,5,"мясо");
let c=new Box(6,7,8,"мясо1");
a.Show();
document.write("<hr>");
b.Show();
document.write("<hr>");
c.Show();
document.write("<hr>");
c.equals(b);
document.write("<hr>");
a.equals(b);
document.write("<hr>");
 */
/*
Задание 1
Создайте функцию конструктор, которая
создает объект со свойством экземпляра,
свойством функции-конструктора, с методом
экземпляра и методом функции-конструктора
имена выберите произвольно.


function Myclass(params) {
    this.X=params;
    this.Method=function(){
        document.write("Method");
    }
}
Myclass.Y=100;
Myclass.Method2=function(){
    document.write("Method2");
}

var instance=new Myclass();
instance.Method();
document.write("<hr>");
Myclass.Method2();
*/

////////////////////////////////////////////////////////////////////////////////
/*
Задание 2
Разработайте функцию-конструктор,
которая будет создавать объект Human(человек)
создайте массив объектов и реализуйте функцию,
которая будет сортировать элементы массива по
значению свойства Age по возрастанию или по убыванию.

function Human(age) {
    this.Age = parseInt(age);
}
let b = new Human(21);
let a = new Human(12);
let c = new Human(14);
let d = new Human(1);
let e = new Human(15);
let f = new Human(40);
let humans = [a, b, c, d, e, f];
humans.sort(function compare(a, b) {
    if (a.Age < b.Age) {
        return -1;
    }
    if (a.Age > b.Age) {
        return 1;
    }
    return 0;
});
for (let i = 0; i < humans.length; i++) {
    document.write(humans[i].Age + "<hr>");
}
*/

///////////////////////////////////////////////////////////////////////////////
/*
Задание 3
Разработайте функцию-конструктор,
которая будет создавать объект Human(человек)
добавьте на свое усмотрение свойства и методы
в этот объект. Подумайте какие методы и свойства
следует сделать уровня экземпляра, а какие уровня
функции-конструктора.

function Human(Fname,Lname,Age) {
    this.Firstname=Fname;
    this.Lastname=Lname;
    this.Age=parseInt(Age);       
}
Human.prototype.toString=function(){
    return this.Firstname+" "+this.Lastname+" age:"+this.Age;
}
Human.prototype.Fullname=function(){
    return this.Firstname+" "+this.Lastname;
}
Human.prototype.SayHello=function(){
    document.write("Hello "+this.Fullname()+"!!!");
}

let me= new Human("Женя","Анищенко",13);
document.write(me.Firstname+"<br>"+me.toString()+"<br>");
me.SayHello();
 */

//////////////////////////////////////////////////////////////////////////////
/*
Задание 4
Создайте пример демонстрирующий назначение метода
toString()
function Class(name) {
    this.Name=name;
    this.toString=function() {
        return "hello "+this.Name+"!<hr>";
    }
}
let instance=new Class("Jenua");
document.write(instance.toString());
*/