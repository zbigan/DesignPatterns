"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
class Duck {
    performFly() {
        this.flyBehaviour.fly();
    }
    performQuack() {
        this.quackBehaviour.quack();
    }
    swim() {
        console.log("Swimming!!!");
    }
    setFlyBehaviour(fb) {
        this.flyBehaviour = fb;
    }
    setQuackBehaviour(qb) {
        this.quackBehaviour = qb;
    }
}
exports.Duck = Duck;
