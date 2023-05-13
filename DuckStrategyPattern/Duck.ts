import { FlyBehaviour, QuackBehaviour } from "./types";

export abstract class Duck {
  public flyBehaviour!: FlyBehaviour;

  public quackBehaviour!: QuackBehaviour;

  public performFly() {
    this.flyBehaviour.fly();
  }

  public performQuack() {
    this.quackBehaviour.quack();
  }

  public swim() {
    console.log("Swimming!!!");
  }

  public setFlyBehaviour(fb: FlyBehaviour) {
    this.flyBehaviour = fb;
  }

  public setQuackBehaviour(qb: QuackBehaviour) {
    this.quackBehaviour = qb;
  }
}
