"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubBus = void 0;
class PubSubBus {
    constructor() {
        this.serviceMap = {};
    }
    publish(api) {
        this.serviceMap[api.getName()] = api;
    }
    call(apiname, body) {
        if (!this.serviceMap[apiname])
            return Promise.reject(new Error('no api found'));
        else
            return this.serviceMap[apiname].execute(body);
    }
    attach(service) {
        service.setBus(this);
    }
}
exports.PubSubBus = PubSubBus;
