export default abstract class Pizza {
  public name = 'pizza'
  public sauce = 'default'
  public dough = 'default'
  public cheese = 'default'
  public toppings = ['olives']

  public prepare(): void {
    console.log(`\n----Preparing ${this.name}----`)
    console.log(`Tossing ${this.name} dough`)
    console.log(`Adding ${this.sauce} sauce`)
    console.log(`Adding ${this.cheese} cheese`)
    console.log(`Adding toppings: ${this.toppings.join(", ")}`)
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
