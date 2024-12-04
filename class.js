//ES5
// function Person(name)
// {
//   this.name=name
// }

// Person.prototype.sayhello= function() {
//     console.log("hello!"+ this.name);
// }

// var person1=new Person("sasi");
// console.log(person1);

// person1.sayhello();


//ES 6

class Person{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
  sayhello()
  {
    const date=new Date();
    console.log("Hello !"+ this.name +" you are " + (date.getFullYear() - this.year));
  }

}

class Student extends Person{
    constructor(name,year,age)
    {
        super(name,year,age);
        this.age=age;
    }
}
var person1=new Person("priya",1989);
var student1=new Student("kumar",1987,39);

console.log(student1.age);
person1.sayhello();