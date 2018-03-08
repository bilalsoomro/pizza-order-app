import { Component, OnInit } from '@angular/core';
import { PIZZAS } from './pizzas';
import { Order } from './order';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Ordering System';
  pizzas = PIZZAS;
  orders: Order [] = [];
  menu = [];
  keyword: string;
  totalPrice: number = 0;

  ngOnInit() {
    let self = this;
    
    self.pizzas.forEach((item) => {
      self.menu.push({'item': item, 'qty': 0});
    });
  }

  calculatePrice() {
    let self = this;
    this.totalPrice = 0;

    self.orders.forEach((order: Order) => {
      this.totalPrice += (order.item.price * order.quantity);
    });
  }

  addItem(pizza: Pizza, quantity: number) {
    let self = this;
    

    if(quantity == 0) {
      alert('Write the quantity');
      return;
    }

    self.orders.push(new Order(pizza, quantity));
    self.calculatePrice();
  }

  removeItem(index: number) {
    let self = this;
    self.orders.splice(index, 1);
    self.calculatePrice();
  }
}
