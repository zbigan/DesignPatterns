import { QuackBehaviour } from "./types";

export class Quack implements QuackBehaviour {
  public quack(): void {
    console.log("Quack!");
  }
}

export class MuteQuack implements QuackBehaviour {
  public quack(): void {
    console.log("<< Silence >>");
  }
}

export class Squeak implements QuackBehaviour {
  public quack(): void {
    console.log("Squeak!");
  }
}
