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
*/
function Myclass(x){
    this.x=x;
    this.InnerClass=function() {
        this.Method=function() {   
            document.write("qwe")         
        }
    }
    this.Method=function () {        
    }
}
let instance=new Myclass("wer");
instance.InnerClass.Method();

/*
Задание 2
Разработайте функцию-конструктор, 
которая будет создавать объект Human(человек) 
создайте массив объектов и реализуйте функцию, 
которая будет сортировать элементы массива по 
значению свойства Age по возрастанию или по убыванию.
 */





/*
Задание 3
Разработайте функцию-конструктор, 
которая будет создавать объект Human(человек) 
добавьте на свое усмотрение свойства и методы 
в этот объект. Подумайте какие методы и свойства 
следует сделать уровня экземпляра, а какие уровня
функции-конструктора.
 */





/*
Задание 4
Создайте пример демонстрирующий назначение метода 
toString()
*/