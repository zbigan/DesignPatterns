import { Observer } from "./Interfaces/Observer";
import { QuackObservable } from "./Interfaces/QuackObservable";

export class Quackologist implements Observer {
  public update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck.constructor.name} just quacked.`);
  }
}
