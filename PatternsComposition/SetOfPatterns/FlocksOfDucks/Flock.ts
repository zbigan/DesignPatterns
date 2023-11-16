import { Quackable } from "../Interfaces/Quackable";
import { Observer } from "../Interfaces/Observer";

export class Flock implements Quackable {
  private quacks: Quackable[] = [];


  public quack(): void {
    this.quacks.forEach(q => {
      q.quack();
    });
  }

  public add(quack: Quackable) {
    this.quacks.push(quack);
  }

  public registerObserver(observer: Observer): void {
    this.quacks.forEach(q => {
      q.registerObserver(observer);
    });
  }

  public notifyObservers(): void {}
}

