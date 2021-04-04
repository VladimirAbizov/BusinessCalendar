export class Service {
    id: string;
    name: string;
    leadTime: string;
    price: number;
    difficulty: number;

    constructor(id: string, name: string, leadTime: string, price: number, difficulty: number) {
        this.id = id;
        this.name = name;
        this.leadTime = leadTime;
        this.price = price;
        this.difficulty = difficulty;
    }
}