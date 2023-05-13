import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyBehaviour";
import { Quack } from "./QuackBehaviour";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log("I am Mallard DUck!!")
  }
}