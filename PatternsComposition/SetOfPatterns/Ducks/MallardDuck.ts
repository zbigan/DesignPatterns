import { QuackObservable } from "../Interfaces/QuackObservable";
import { Quackable } from "../Interfaces/Quackable";
import { Observable } from "../Observable";
import { Observer } from "../Interfaces/Observer";

export class MallardDuck implements Quackable {
  private observable: QuackObservable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Quack!");
    this.notifyObservers();
  };

  public notifyObservers() {
    this.observable.notifyObservers();
  }

  public registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
}

