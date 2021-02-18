"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bus_1 = require("./bus");
const service1_1 = require("./service1");
let bus = new bus_1.PubSubBus();
let service1 = new service1_1.Service1();
bus.attach(service1);
bus.call('service1:double', { value: 4 })
    .then(value => {
    console.log(`double is ${value}`);
    return bus.call('service1:randomnumbers', {});
})
    .then(numbers => {
    console.log(`random numbers = ${numbers.join(',')}`);
})
    .catch(err => {
    console.error(err.message);
});
