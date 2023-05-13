"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squeak = exports.MuteQuack = exports.Quack = void 0;
class Quack {
    quack() {
        console.log("Quack!");
    }
}
exports.Quack = Quack;
class MuteQuack {
    quack() {
        console.log("<< Silence >>");
    }
}
exports.MuteQuack = MuteQuack;
class Squeak {
    quack() {
        console.log("Squeak!");
    }
}
exports.Squeak = Squeak;
