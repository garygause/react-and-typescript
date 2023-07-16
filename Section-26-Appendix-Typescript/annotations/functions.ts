const add = (a: number, b: number): number => {
  return a + b;
};

// this is why we always add return annotations
// no warning on no return
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = (a: number, b: number): number => {
  return a * b;
};

// void function will not return anything
const logger = (message: string): void => {
  console.log(message);
};

// never means function will never finish
// if throwing an error in normal function with expected return
// annotated with expected return value
const throwError = (message: string): never => {
  throw new Error(message);
};

// if throwing an error in normal function with expected return
// annotated with expected return value

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);

// ES2015 allows destructuring, left off return annotation to prevent prettier formatting
const logWeather2015 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
};
