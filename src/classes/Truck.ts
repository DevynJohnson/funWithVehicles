// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle implements AbleToTow { // Create the Truck class that extends the Vehicle class and implements the AbleToTow interface
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


  constructor( // Create a constructor that accepts the properties of the Truck class
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    super(); // The constructor should call the constructor of the parent class, Vehicle
    // The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }


  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void { // Implement the tow method from the AbleToTow interface
    if (vehicle.vin === this.vin) { // Check if the VIN of the vehicle is the same as the truck's VIN
    console.log(`The vehicle cannot tow itself.`);
    return; // Log that the vehicle cannot tow itself if it is
    }
    if (vehicle.weight <= this.towingCapacity) { // Check if the vehicle's weight is less than or equal to the truck's towing capacity
      console.log(`${vehicle.make} ${vehicle.model} is being towed.`); // Log that the vehicle is being towed if it is
    } else {
      console.log(`The vehicle is too heavy to be towed.`); // Log that the vehicle is too heavy to be towed if it is not
    }
  }

  override printDetails(): void { // Override the printDetails method from the Vehicle class
    super.printDetails(); // The method should call the printDetails method of the parent class
    // The method should log the details of the Truck
    console.log(`VIN: ${this.vin}`); 
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;
