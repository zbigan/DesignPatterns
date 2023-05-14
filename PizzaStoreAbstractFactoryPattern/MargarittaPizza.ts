import Pizza from "./Pizza";
import { IngredientsFactory } from "./PizzaStore";

export default class Margaritta extends Pizza {
  ingredientsFactory: IngredientsFactory
  constructor(ingredientsFactory: IngredientsFactory) {
    super()
    this.ingredientsFactory = ingredientsFactory
  }

  public prepare(): void {
    console.log(`\n======== Preparing ${this.name} ========`)
    this.dough = this.ingredientsFactory.createDough()
    this.sauce = this.ingredientsFactory.createSauce()
    this.cheese = this.ingredientsFactory.craeteCheese()
  }
}