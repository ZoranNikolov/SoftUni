class Vehicle {
	constructor(_wheels) {
		this.numWheels = _wheels;
	}
	get wheels() {
		return this.numWheels;
	}
	set wheels(_wheels) {
		this.numWheels = _wheels;
	}
	static accelerate() {
		console.log("go faster");
	}
	static decelerate() {
		console.log("go slower");
	}
	justAMethod() {
		//like a function
	}
}

let car = new Vehicle(4);
let car1 = new Vehicle(2);
let car2 = new Vehicle(6);
car.wheels = 7;
console.log(car.wheels);
Vehicle.accelerate();

class Car extends Vehicle {
	constructor(_wheels, _make, _model, _year) {
		super(_wheels);
		this.make = _make;
		this.model = _model;
		this.year = _year;
	}

	info() {
		console.log(
			"The", this.make, this.model, "was made in", 
			this.year, "and has", this.wheels, "wheels"
		);
	}
}

let ferrari = new Car(4, "Ferrari", "Testarosa", 1985);
ferrari.info()
Car.accelerate()