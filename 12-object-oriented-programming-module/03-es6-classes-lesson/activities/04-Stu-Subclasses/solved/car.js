import Vehicle from './vehicle.js';

class Car extends Vehicle {
    constructor(numberOfWheels, sound, colour, passengers) {
        super('Car', numberOfWheels, sound);
        this.colour = colour;
        this.passengers = passengers;
    }
    checkPassengers() { if (this.passengers > 4) console.log('Too many passengers'); }
    useHorn() { console.log(`${this.sound}`);}
}

export default Car;

