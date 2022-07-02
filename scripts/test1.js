function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}
this.bark = function () {
    console.log("I'm barking");
}
class Cat {
    construstor(name, age, color) {
        this.name = name,
        this.arkingge = age,
        this.color = color;
    }

    meow() {
        console.log("I'm meowing");
    }
}
function testObjects() {

    //object literal
    let dog1 = {
        name: "Fido", 
        age: 4, 
        color: "green"
    };
    
    let dog2 = {
        name: "Fido",
        age: 4
    };
   console.log(dog1, dog2);
}
   //object constructor
let dog3 = new Dog("Fido", 3, "green");
let dog4 = new Dog("Lola", 7, "pink");
console.log(dog3, dog4);
console.log(dog3.name);
dog3.bark();

   //classes
   let cat1 = new Cat("DrMeowsalot", 4, "gray");
   let cat2 = new Cat("MsNails", 2, "white");
   console.log(cat1, cat2);
   console.log(cat1.name)
   cat1.meow();


function runTests() {
    console.log("- TESTS -");

    testObjects();
}