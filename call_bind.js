function welcome()
{
    console.log("welcome  "+this.user_name);
}

const student=
{
    user_name:"jeni"
}

welcome.call(student);

const student2={
    user_name:"priya"
}
welcome.call(student2)

function total(eng,mat,tam,sci,soci)
{
    console.log(this.user_name + " got  "+ (eng+mat+tam+sci+soci) + "  Marks");
}

// total.call(student,45,67);
// total.call(student2,78,78);

let marks=[100,45,67,78,56];

total.apply(student,marks);


const fun=total.bind(student2,23,45,56,78,56);
fun();

// we can borrow method from one object to another object

const person1={
    firstName:"sasi",
    lastName:"priya",
    fullName:function()
    {
        return this.firstName+ " "+this.lastName;
    }
};

const person2={
    firstName:"senthil",
    lastName:"kumar"
};

console.log(person1.fullName.call(person2));
console.log(person1.fullName());