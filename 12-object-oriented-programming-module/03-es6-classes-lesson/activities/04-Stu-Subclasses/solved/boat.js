import Vehicle from './vehicle.js';

class Boat extends Vehicle {
    constructor(crew, sound) {
        super('Boat', 0, sound);
        this.crew = crew;
    }
    crewSoundOff() { for (let member of this.crew) { console.log(`Crew member ${member} present`); }}
    useHorn() { console.log(`${this.sound}`);}
}

export default Boat;

