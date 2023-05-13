"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = __importDefault(require("./Beverage"));
class Espresso extends Beverage_1.default {
    constructor() {
        super();
        this.description = "Espresso";
    }
    cost() {
        return 1.99;
    }
}
exports.default = Espresso;
