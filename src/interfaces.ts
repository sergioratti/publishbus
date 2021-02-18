export interface api{
    getName():string;
    execute(body:any):Promise<any>;
}

export interface Service{
    bus:Bus;
    serviceName:string;
    setBus(bus:Bus):void;
}

export interface Bus{
    publish(api:api):void;
    call(apiname:string,body:any):Promise<any>;
    attach(service:Service):void;
}