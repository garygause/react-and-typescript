// yay! all that i love about java is now in javascript. interfaces, classes, inheritance

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// reason why we use interfaces is to avoid long annotations
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  // es2015 template string
  console.log(`name: ${vehicle.name}; year: ${vehicle.year}`);
};

printVehicle(oldCivic);

// rewrite with interface
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}; year: ${vehicle.year}`);
};

// can contain functions
interface Vehicle2 {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${this.name}; year: ${this.year}`;
  },
};

// interface properties can be optional
interface Vehicle3 {
  name?: string;
  year?: number;
  broken?: boolean;
  summary(): string;
}
