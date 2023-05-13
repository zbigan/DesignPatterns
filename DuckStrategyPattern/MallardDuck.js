"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MallardDuck = void 0;
const Duck_1 = require("./Duck");
const FlyBehaviour_1 = require("./FlyBehaviour");
const QuackBehaviour_1 = require("./QuackBehaviour");
class MallardDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyBehaviour_1.FlyWithWings();
        this.quackBehaviour = new QuackBehaviour_1.Quack();
    }
    display() {
        console.log("I am Mallard DUck!!");
    }
}
exports.MallardDuck = MallardDuck;
