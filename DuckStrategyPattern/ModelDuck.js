"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDuck = void 0;
const Duck_1 = require("./Duck");
const FlyBehaviour_1 = require("./FlyBehaviour");
const QuackBehaviour_1 = require("./QuackBehaviour");
class ModelDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyBehaviour_1.FlyNoWay();
        this.quackBehaviour = new QuackBehaviour_1.Quack();
    }
    display() {
        console.log("I am a model ducK!");
    }
}
exports.ModelDuck = ModelDuck;
