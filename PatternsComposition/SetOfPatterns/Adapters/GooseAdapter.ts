import { Quackable } from "../Interfaces/Quackable";
import { Goose } from "../Ducks/Goose";
import { QuackObservable } from "../Interfaces/QuackObservable";
import { Observable } from "../Observable";
import { Observer } from "../Interfaces/Observer";

export class GooseAdapter implements Quackable {
  private observable: QuackObservable;

  constructor(public goose: Goose) {
    this.observable = new Observable(this);
  }
  
  public quack(): void {
    this.goose.honk()
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer); 
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();    
  }
} 

