import { Observer } from "../Interfaces/Observer";
import { Quackable } from "../Interfaces/Quackable";

export class CountingDuckDecorator implements Quackable {
  private quackCount = 0;
  
  constructor(public duck: Quackable) {}

  public quack(): void {
    this.duck.quack();
    this.quackCount++;
  }
 
  public getQuackCount() {
    return this.quackCount;
  }
  
  public notifyObservers() {
    this.duck.notifyObservers()
  }

  public registerObserver(observer: Observer) {
    this.duck.registerObserver(observer)
  }

}
