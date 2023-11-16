import { GooseAdapter } from "../Adapters/GooseAdapter";
import { DecoyDuck } from "../Ducks/DecoyDuck";
import { Goose } from "../Ducks/Goose";
import { MallardDuck } from "../Ducks/MallardDuck";
import { RedheadDuck } from "../Ducks/RedheadDuck";
import { AbstractDuckFactory } from "./AbstractDuckFactory";

export class DuckFactory extends AbstractDuckFactory {
  public createRedheadDuck() {
    return new RedheadDuck();
  }

  public createMallardDuck() {
    return new MallardDuck();
  }
  
  public createDecoyDuck() {
    return new DecoyDuck();
  }

  public createGooseDuck() {
    return new GooseAdapter(new Goose());
  }
}
