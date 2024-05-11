class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

class Mammal extends Animal {}

class Bird extends Animal {}

class Enclosure {
    constructor(size, enclosureType) {
        this.size = size;
        this.enclosureType = enclosureType;
    }
}

class Food {
    constructor(foodType, quantity) {
        this.foodType = foodType;
        this.quantity = quantity;
    }
}

class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class ZooInventory {
    constructor(animals, employees, food) {
        this.animals = animals;
        this.employees = employees;
        this.food = food;
    }

    displayAnimals() {
        console.log("Animals in the zoo:");
        this.animals.forEach(animal => {
            console.log(`${animal.name} - ${animal.species}`);
        });
    }

    displayEmployees() {
        console.log("Employees in the zoo:");
        this.employees.forEach(employee => {
            console.log(`${employee.name} - ${employee.role}`);
        });
    }

    displayFood() {
        console.log("food in the zoo:");
        this.food.forEach(food => {
            console.log(`${food.foodType} - ${food.quantity}`);
        });
    }
}


const lion = new Mammal("Leonio", "Lion");
const tiger = new Mammal("Tonio", "Tiger");
const coala = new Mammal("coalinio", "coala");
const zebra = new Mammal("zebrainio", "zebra");
const shark = new Mammal("sharkinio", "shark");
const wolf = new Mammal("wolfinio", "wolf");




const zookeeper = new Employee("Serhiy", "Zookeeper");
const zookeeper2 = new Employee("Vitaliy", "Zookeeper");
const vet = new Employee("Maria", "Veterinarian");
const manager = new Employee("Natasha", "manager");


const fish = new Food('fish', '10kg');
const meat = new Food('meat', '20kg');
const meat2 = new Food('meat', '22kg');
const hay = new Food('hay', '21kg');
const bamboo = new Food('bamboo', '5kg');



const zooInventory = new ZooInventory([lion, tiger, coala, zebra, shark, wolf ], [zookeeper, vet, manager, zookeeper2], [fish, meat, meat2, hay, bamboo]);
zooInventory.displayAnimals();
zooInventory.displayEmployees();
zooInventory.displayFood();
