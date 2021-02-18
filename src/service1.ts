import { Service, Bus, api } from "./interfaces";
import { Api } from "./api";

export class Service1 implements Service{
    
    bus!: Bus;

    constructor(){}
    
    serviceName: string = 'service1';

    setBus(bus: Bus): void {
        this.bus = bus;
        let api:api = new Api(`${this.serviceName}:double`,this.double.bind(this));
        this.bus.publish(api);
        api = new Api(`${this.serviceName}:randomnumbers`,this.randomnumbers.bind(this));
        this.bus.publish(api);
    }

    private double(data:{value:number}):Promise<any>{
        return Promise.resolve(data.value * 2);
    }

    private randomnumbers():Promise<any>{
        return new Promise((resolve,reject)=>{
            let numbers = [5,6,7,4,3,544,3,32,77];
            setTimeout(()=>{
                resolve(numbers);
            },10000)

        });
    }
    
}