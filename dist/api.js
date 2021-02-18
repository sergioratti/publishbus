"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
class Api {
    constructor(name, cb) {
        this.name = name;
        this.cb = cb;
    }
    getName() {
        return this.name;
    }
    execute(body) {
        return this.cb(body);
    }
}
exports.Api = Api;
