function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  console.log("Some generic sound");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sound = function () {
  console.log("Woof! Woof!");
};

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sound(); // Outputs: "Woof! Woof!"
