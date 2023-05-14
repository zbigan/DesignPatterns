import Cheese from "./ingredients/cheese/Cheese"
import Dough from "./ingredients/dough/Dough"
import Pepperoni from "./ingredients/pepperoni/Pepperoni"
import Sauce from "./ingredients/sauce/Sauce"
import Topping from "./ingredients/toppings/Topping"

export default abstract class Pizza {
  public name = 'pizza'
  public sauce: Sauce = 'default'
  public dough: Dough = 'default'
  public cheese: Cheese = 'default'
  public toppings: Topping[] = ['olives']
  public pepperoni: Pepperoni = 'default'

  public abstract prepare(): void

  public setName(name: string) {
    this.name = name
  }

  public bake(): void {
    console.log('baking pizza for 30min at 350')
  }

  public cut(): void {
    console.log('cutting pizza in diagonal slices')
  }

  public pack(): void {
    console.log('packing pizza in official PizzaStore box')
  }
}
