import { Bus, api, Service } from "./interfaces";

export class PubSubBus implements Bus{

    private serviceMap:{[index:string]:api};

    constructor(){
        this.serviceMap = {};
    }

    publish(api: api): void {
        this.serviceMap[api.getName()] = api;
    }
    
    call(apiname: string,body:any): Promise<any> {
        if(!this.serviceMap[apiname])
            return Promise.reject(new Error('no api found'));
        else
            return this.serviceMap[apiname].execute(body);
    }
    attach(service: Service): void {
        service.setBus(this);
    }
}