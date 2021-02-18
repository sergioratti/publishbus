"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service1 = void 0;
const api_1 = require("./api");
class Service1 {
    constructor() {
        this.serviceName = 'service1';
    }
    setBus(bus) {
        this.bus = bus;
        let api = new api_1.Api(`${this.serviceName}:double`, this.double.bind(this));
        this.bus.publish(api);
        api = new api_1.Api(`${this.serviceName}:randomnumbers`, this.randomnumbers.bind(this));
        this.bus.publish(api);
    }
    double(data) {
        return Promise.resolve(data.value * 2);
    }
    randomnumbers() {
        return new Promise((resolve, reject) => {
            let numbers = [5, 6, 7, 4, 3, 544, 3, 32, 77];
            setTimeout(() => {
                resolve(numbers);
            }, 10000);
        });
    }
}
exports.Service1 = Service1;
