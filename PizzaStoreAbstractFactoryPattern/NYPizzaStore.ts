import CheesePizza from "./CheesePizza";
import IngredientsFactory from "./IngredientsFactory";
import Margaritta from "./MargarittaPizza";
import NYPizzaIngredientsFactory from "./NYPizzaIngredientsFactory";
import Pizza from "./Pizza";
import PizzaStore from "./PizzaStore";

type NyPizza = 'cheese' | 'margaritta'

export default class NYPizzaStore extends PizzaStore<NyPizza> {
  pizzaIngredientFactory: IngredientsFactory

  constructor() {
    super()
    this.pizzaIngredientFactory = new NYPizzaIngredientsFactory()
  }

  public makePizza(type: NyPizza): Pizza | null {
    let pizza = null
    
    if (type==='cheese') {
      pizza = new CheesePizza(this.pizzaIngredientFactory)
      pizza.setName('NY style cheese pizza')
    }
    if (type==='margaritta') {
      pizza = new Margaritta(this.pizzaIngredientFactory)
      pizza.setName('NY style margaritta pizza')
    }
    
    return pizza
  }
}
