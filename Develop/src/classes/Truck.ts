// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;
  wheels: Wheel[];

// TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  towingCapacity: number,
  wheels: Wheel[],
  ) {
    super();
    
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel(),];
    } else {
      this.wheels = wheels;
    }
  }

// TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(
        `Truck ${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}.`
      );
    } else {
      console.log(
        `Truck ${this.make} ${this.model} cannot tow ${vehicle.make} ${vehicle.model} because it exceeds the towing capacity.`
      );
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Towing capacity: ${this.towingCapacity} lbs`);
    this.wheels.forEach((Wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${Wheel.getDiameter} inch with a ${Wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Truck class as the default export
export default Truck;
