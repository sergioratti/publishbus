import { api } from "./interfaces";

export class Api implements api{

    constructor(private name:string,private cb:(body:any)=>Promise<any>){

    }

    getName(): string {
        return this.name;
    }
    execute(body: any): Promise<any> {
        return this.cb(body);
    }

    
}