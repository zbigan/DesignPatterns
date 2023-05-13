"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Espresso_1 = __importDefault(require("./Espresso"));
const Mocha_1 = __importDefault(require("./Mocha"));
let beverage1 = new Espresso_1.default();
console.log('price of espresso:', beverage1.cost());
console.log('description of espresso:', beverage1.getDescription());
beverage1 = new Mocha_1.default(beverage1);
console.log('price of espresso with mocha:', beverage1.cost());
console.log('description of espresso with mocha:', beverage1.getDescription());
