export default class Pizza {
  sauce = 'default'
  dough = 'default'
  cheese = 'default'
  toppings = ['olives']

  public makeDough(dough: string): void {
    console.log(`making ${dough} dough`)
    this.dough = dough
  }

  public addSauce(sauce: string) {
    console.log(`adding ${sauce} sauce`)
    this.sauce = sauce
  }

  public addCheese(cheese: string) {
    console.log(`adding ${cheese} cheese`)
    this.cheese = cheese
  }

  public addToppings(toppings: string[]) {
    console.log(`adding toppings: ${toppings.join(", ")}`)
    this.toppings = toppings
  }
  
  public bake(): void {
    console.log('baking pizza')
  }

  public cut(): void {
    console.log('cutting pizza')
  }

  public pack(): void {
    console.log('packing pizza')
  }
}
