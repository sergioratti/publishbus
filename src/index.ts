import { Bus, Service } from "./interfaces";
import { PubSubBus } from "./bus";
import { Service1 } from "./service1";

let bus:Bus = new PubSubBus();
let service1:Service = new Service1();
bus.attach(service1);

bus.call('service1:double',{value:4})
.then(value=>{
    console.log(`double is ${value}`);
    return bus.call('service1:randomnumbers',{})
})
.then(numbers=>{
    console.log(`random numbers = ${numbers.join(',')}`);
})
.catch(err=>{
    console.error(err.message);
})