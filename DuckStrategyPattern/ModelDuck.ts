import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyBehaviour";
import { Quack } from "./QuackBehaviour";

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log("I am a model ducK!");
  }
}
