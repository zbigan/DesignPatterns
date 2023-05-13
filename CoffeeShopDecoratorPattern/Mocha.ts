import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  public getDescription() {
    return `${this.beverage.description}, Mocha`
  }

  public cost() {
    return this.beverage.cost() + 0.20
  }
}