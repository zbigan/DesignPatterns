import { Quackable } from "../Interfaces/Quackable";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): Quackable;
  public abstract createRedheadDuck(): Quackable;
  public abstract createDecoyDuck(): Quackable;
  public abstract createGooseDuck(): Quackable;
}

