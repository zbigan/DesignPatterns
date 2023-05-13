import Beverage from "./Beverage";

export default abstract class CondimentDecorator extends Beverage {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public abstract getDescription(): string
}
