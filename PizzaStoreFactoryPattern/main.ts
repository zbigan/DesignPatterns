import ChicagoPizzaStore from "./ChicagoPizzaStore";
import NYPizzaStore from "./NYPizzaStore";

const nYPizzaStore = new NYPizzaStore()
const nYpizza = nYPizzaStore.orderPizza('pepperoni')

const chicagoPizzaStore = new ChicagoPizzaStore()
const chicagoPizza = chicagoPizzaStore.orderPizza('cheese')