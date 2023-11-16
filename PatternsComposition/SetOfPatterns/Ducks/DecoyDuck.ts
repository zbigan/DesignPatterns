import { Quackable } from "../Interfaces/Quackable";
import { Observable } from "../Observable";
import { QuackObservable } from "../Interfaces/QuackObservable";
import { Observer } from "../Interfaces/Observer";

export class DecoyDuck implements Quackable {
  private observable: QuackObservable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Squeak!");
    this.notifyObservers();
  };
  
  public notifyObservers() {
    this.observable.notifyObservers();
  }

  public registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
}
