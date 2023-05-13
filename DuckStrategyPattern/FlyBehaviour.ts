import { FlyBehaviour } from "./types";

export class FlyWithWings implements FlyBehaviour {
  public fly(): void {
    console.log("I ma FLYING!");
  }
}

export class FlyNoWay implements FlyBehaviour {
  public fly(): void {
    console.log("I can NOT FLYY :/")
  }
}

export class FlyRocketPowered implements FlyBehaviour {
  public fly(): void {
    console.log("I am flying with a ROCKET!");
  }
}