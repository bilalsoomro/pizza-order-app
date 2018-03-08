import { Pizza } from './pizza';

export class Order {
    item: Pizza;
    quantity: number;

    constructor(item: Pizza, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
}