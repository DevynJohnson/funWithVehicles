// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle { // Create the Motorbike class that extends the Vehicle class
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(); // Call the constructor of the parent class, Vehicle
    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    
    
    if (wheels.length !== 2) { // Check if the wheels array has 2 elements
      this.wheels = [new Wheel(), new Wheel()]; // If not, create 2 new Wheel objects
    } else {
      this.wheels = wheels; // Otherwise, use the provided wheels array
    }
  }

  wheelie(): void { // Implement the wheelie method
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`); // Log that the motorbike is doing a wheelie
    }

  override printDetails(): void { // Override the printDetails method from the Vehicle class
    super.printDetails(); // Call the printDetails method of the parent class

    console.log(`VIN: ${this.vin}`); // Log the VIN of the Motorbike
    console.log(`Color: ${this.color}`); // Log the color of the Motorbike
    console.log(`Make: ${this.make}`); // Log the make of the Motorbike
    console.log(`Model: ${this.model}`); // Log the model of the Motorbike
    console.log(`Year: ${this.year}`); // Log the year of the Motorbike
    console.log(`Weight: ${this.weight} lbs`); // Log the weight of the Motorbike
    console.log(`Top Speed: ${this.topSpeed} mph`); // Log the top speed of the Motorbike
    console.log(`Wheels: ${this.wheels.length}`); // Log the number of wheels of the Motorbike
  }
}



// Export the Motorbike class as the default export
export default Motorbike;
