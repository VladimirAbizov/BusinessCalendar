import { Service } from "./service.model";

export class Task {
    id: string;
    date: Date;
    clientName: string;
    service: Service;

    constructor(id: string, date: Date, clientName: string, service: Service) {
        this.id = id;
        this.date = date;
        this.clientName = clientName;
        this.service = service;
    }
}