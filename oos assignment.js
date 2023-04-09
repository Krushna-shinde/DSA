// OOP In JavaScript

/*
Javascript Class
Create a JavaScript class called Animals which accepts 2 input parameters (name and specie) as arguments and stores them internally. Now create a proto function called sing that prints the name of the animal with 'can sing' returned at the end.
Example 1:
Input:
Billi Cat
Output:
Billi can sing
 */

class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return this.name + " can sing";
    }
}

const animal = new Animals("Billi", "Cat");
console.log(animal.sing());


/*
Javascript Function Constructor
Create a JavaScript constructor function called Animals which accepts 2 input parameters (name and specie) as arguments and stores them internally.
Now create a proto function called details that prints the name of the animal and species as shown in the example.
Example 1:
Input:
animal = Dog
species = Pogo
Output:
Animal is Dog and species is Pogo
 */


function Animalses(name, specie) {
    this.name = name;
    this.specie = specie;
}

Animalses.prototype.details = function () {
    return "Animal is " + this.name + " and species is " + this.specie;
}

const animals = new Animalses("Dog", "Pogo");
console.log(animals.details());

/*
Javascript Object
Given a string like an object , convert it into an object having 2 properties fname and lname .Return a string having fname and lname with space seperated using that object.
Example 1:
Input:
{"fname": "Dillion","lname": "Megida"}
Output:
Dillion Megida
 */

const obj = {
    "fname": "Dillion",
    "lname": "Megida"
}
console.log(obj.fname + " " + obj.lname);