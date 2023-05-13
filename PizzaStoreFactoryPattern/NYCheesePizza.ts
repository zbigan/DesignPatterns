import Pizza from "./Pizza"

export default class NYCheesePizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('crust')
    this.addSauce('chilli')
    this.addCheese('parmesan')
    this.addToppings(['mushrooms', 'olives', 'onions'])
  }
}
