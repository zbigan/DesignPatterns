import Pizza from "./Pizza"

export default class ChicagoCheesePizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('fat')
    this.addSauce('garlic')
    this.addCheese('parmesan')
    this.addToppings(['mushrooms', 'olives', 'onions'])
  }
}
