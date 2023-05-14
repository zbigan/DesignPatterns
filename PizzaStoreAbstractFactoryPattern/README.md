Pizza Store

  1. pnpm install
  2. npx -y tsc
  3. node build/main.js

Factory pattern implemented: PizzaStore class delegating concrete implementation to it's subclasses: NYPizzaStore, ChicagoPizzaStore

Dependency inversion implemented: higher level components (PizzaStore...) and lover level components (NYCheesePizza...) depend only on higher level abstraction - Pizza class. Higher level components are not coupled to many concrete lower level components.

Implemented Abstract Factory pattern: creating interface for each ingredient factory.
In order to provide consistency in ingredients accross all franchizes, ingredient factories are implemented:
