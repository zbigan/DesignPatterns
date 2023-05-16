import CheesePizza from "./CheesePizza";
import IngredientsFactory from "./IngredientsFactory";
import Margaritta from "./MargarittaPizza";
import NYPizzaIngredientsFactory from "./NYPizzaIngredientsFactory";
import PepperoniPizza from "./PepperoniPizza";
import Pizza from "./Pizza";
import PizzaStore, { PizzaType } from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {
  pizzaIngredientFactory: IngredientsFactory

  constructor() {
    super()
    this.pizzaIngredientFactory = new NYPizzaIngredientsFactory()
  }

  public makePizza(type: PizzaType): Pizza | null {
    let pizza = null
    
    if (type==='cheese') {
      pizza = new CheesePizza(this.pizzaIngredientFactory)
      pizza.setName('NY style cheese pizza')
    }
    if (type==='pepperoni') {
      pizza = new PepperoniPizza(this.pizzaIngredientFactory)
      pizza.setName('NY style pepperoni pizza')
    }
    if (type==='margaritta') {
      pizza = new Margaritta(this.pizzaIngredientFactory)
      pizza.setName('NY style margaritta pizza')
    }
    
    return pizza
  }
}
