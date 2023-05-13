import Pizza from "./Pizza"

export default class NYCheesePizza extends Pizza {
  name: string

  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'crust'
    this.sauce = 'chilli'
    this.cheese = 'parmesan'
    this.toppings = ['mushrooms', 'olives', 'onions']
  }
}
