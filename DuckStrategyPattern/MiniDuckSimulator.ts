import { FlyRocketPowered } from "./FlyBehaviour";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";

const mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();

const model = new ModelDuck();
model.performFly();
model.setFlyBehaviour(new FlyRocketPowered());
model.performFly();
