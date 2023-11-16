import { QuackObservable } from "../Interfaces/QuackObservable";
import { Quackable } from "../Interfaces/Quackable";
import { Observable } from "../Observable";
import { Observer } from "../Interfaces/Observer";

export class RedheadDuck implements Quackable {
  private observable: QuackObservable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Quack!");
    this.notifyObservers();
  };

  public registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }
}

