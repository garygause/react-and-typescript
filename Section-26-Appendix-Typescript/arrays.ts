// can be inferred so no need for annotation
const carMakers = ['ford', 'toyota', 'chevy'];

// cannot be inferred, must annotate
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

// inferred string[][]
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
// infers value will be string based on typing on array
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
//carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types infers (string | Date)[]
const importantDates = [new Date(), '2030-10-10'];

// explicit
const otherDates: (Date | string)[] = [];
