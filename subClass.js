class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
}

class Cat extends Pet {
	constructor(name, age, lives = 9) {
		super(name, age);
		this.lives = lives;
	}
	meow() {
		return `meow!`;
	}
}

const c = new Cat("Lil", 5);

class Dog extends Pet {
	bark() {
		return `woof!`;
	}
}

const d = new Dog("Bull", 5);
