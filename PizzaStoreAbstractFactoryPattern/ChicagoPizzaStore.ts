import CheesePizza from "./CheesePizza";
import ChicagoPizzaIngredientsFactory from "./ChicagoPizzaIngredientsFactory";
import Margaritta from "./MargarittaPizza";
import PepperoniPizza from "./PepperoniPizza";
import Pizza from "./Pizza";
import PizzaStore, { IngredientsFactory, PizzaType } from "./PizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
  pizzaIngredientFactory: IngredientsFactory

  constructor() {
    super()
    this.pizzaIngredientFactory = new ChicagoPizzaIngredientsFactory()
  }

  public makePizza(type: PizzaType): Pizza | null {
    let pizza = null
    
    if (type==='cheese') {
      pizza = new CheesePizza(this.pizzaIngredientFactory)
      pizza.setName('Chicago style cheese pizza')
    }
    if (type==='pepperoni') {
      pizza = new PepperoniPizza(this.pizzaIngredientFactory)
      pizza.setName('Chicago style pepperoni pizza')
    }
    if (type==='margaritta') {
      pizza = new Margaritta(this.pizzaIngredientFactory)
      pizza.setName('Chicago style margaritta pizza')
    }
    
    return pizza
  }
}
