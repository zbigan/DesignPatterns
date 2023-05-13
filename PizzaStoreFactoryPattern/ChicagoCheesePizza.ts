import Pizza from "./Pizza"

export default class ChicagoCheesePizza extends Pizza {
  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'fat'
    this.sauce = 'garlic'
    this.cheese = 'parmesan'
    this.toppings = ['mushrooms', 'olives', 'onions']
  }
}
