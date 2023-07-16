// tuple = array like structure where each element represents some property of a record
// multiple properties to describe one thing

// e.g. drink has color, carbonated, sugar

// with array first, not very clear what elements represent
['brown', true, 40];

// as object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// as tuple, annotation turns array into tuple
// javascript is weird
const pepsi: [string, boolean, number] = ['brown', true, 40];

// type alias, reusable type
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 100];

// why tuples
// this tuple doesn't tell us anything
const carSpecs: [number, number] = [400, 3354];

// better as object
const carSpecs2 = {
  horsepower: 400,
  weight: 3354,
};

// useful for csv's
