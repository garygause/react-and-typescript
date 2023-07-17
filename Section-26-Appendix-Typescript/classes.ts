class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // alternate method, variable definition needed above
  // constructor(public color: string) {}

  public drive(): void {
    console.log('driving');
  }

  protected honk(): void {
    console.log('honk');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }

  public drive(): void {
    this.honk();
    this.startDrivingProcess();
  }

  private startDrivingProcess(): void {
    console.log('driving process started');
  }
}

const car = new Car('blue');
car.drive();
