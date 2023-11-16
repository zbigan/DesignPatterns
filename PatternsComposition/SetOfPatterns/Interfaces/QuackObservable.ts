import { Observer } from "../Interfaces/Observer";

export interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}
