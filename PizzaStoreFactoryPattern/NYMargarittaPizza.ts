import Pizza from "./Pizza"

export default class NYMargarittaPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('crust')
    this.addSauce('soft')
    this.addCheese('mozarella')
  }
}
