import Pizza from "./Pizza"

export default class NYMargarittaPizza extends Pizza {
  name: string

  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'crust'
    this.sauce = 'soft'
    this.cheese = 'mozarella'
  }
}
