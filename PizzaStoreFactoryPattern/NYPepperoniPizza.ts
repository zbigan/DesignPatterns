import Pizza from "./Pizza"

export default class NYPepperoniPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('crust')
    this.addSauce('chilli')
    this.addCheese('mozarella')
    this.addToppings(['pepperoni'])
  }
}
