import { GooseAdapter } from "../Adapters/GooseAdapter";
import { CountingDuckDecorator } from "../Decorators/CountingDuckDecorator";
import { DecoyDuck } from "../Ducks/DecoyDuck";
import { Goose } from "../Ducks/Goose";
import { MallardDuck } from "../Ducks/MallardDuck";
import { RedheadDuck } from "../Ducks/RedheadDuck";
import { AbstractDuckFactory } from "./AbstractDuckFactory";

export class CountingDuckFactory extends AbstractDuckFactory {
  public createRedheadDuck() {
    return new CountingDuckDecorator(new RedheadDuck());
  };

  public createMallardDuck() {
    return new CountingDuckDecorator(new MallardDuck());
  }

  public createDecoyDuck() {
    return new CountingDuckDecorator(new DecoyDuck());
  }

  public createGooseDuck() {
    return new CountingDuckDecorator(new GooseAdapter(new Goose()));
  }
}
