const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // ES2015 syntax, function in object
  setAge(age: number): void {
    this.age = age;
  },
};

// normal destructuring ES2015
//const { age } = profile;

// annotated
const { age }: { age: number } = profile;

// no annotations
//const { coords: { lat, lng } } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
