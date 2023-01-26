import Car from './car.js';
import Boat from './boat.js';

const peopleCarrier = new Car(4, 'toot toot', 'black', 6);
peopleCarrier.printInfo();
peopleCarrier.checkPassengers();
peopleCarrier.useHorn();

const blackPig = new Boat(['Captain Pugwash','Master Mate','Barnabas','Willy','Tom the cabin boy'],'Arrrr!!!');
blackPig.printInfo();
blackPig.crewSoundOff();
blackPig.useHorn();