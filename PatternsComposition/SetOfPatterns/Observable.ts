import { Quackable } from "./Interfaces/Quackable";
import { Observer } from "./Interfaces/Observer";
import { QuackObservable } from "./Interfaces/QuackObservable";

export class Observable implements QuackObservable {
  private observers: Observer[] = [];

  constructor(private duck: Quackable) {}

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public notifyObservers(): void {
    this.observers.forEach(o => {
      o.update(this.duck)
    })
  }
}

