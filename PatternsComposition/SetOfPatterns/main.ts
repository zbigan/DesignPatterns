import { CountingDuckFactory } from "./Factories/CountingDuckFactory";
import { Flock } from "./FlocksOfDucks/Flock";
import { Quackologist } from "./Quackologist";

const duckFactory = new CountingDuckFactory();

const mallardDuck = duckFactory.createMallardDuck();
const decoyDuck = duckFactory.createDecoyDuck()
const redheadDuck = duckFactory.createRedheadDuck()
const gooseDuck = duckFactory.createGooseDuck()

const quackologist = new Quackologist()

const flock1 = new Flock();
flock1.add(mallardDuck)
flock1.add(decoyDuck)
flock1.add(redheadDuck)
flock1.add(gooseDuck)

flock1.registerObserver(quackologist)

console.log('Triggering flock to quack...')
flock1.quack()

console.log("Triggering single duck do quack...");
mallardDuck.quack()
