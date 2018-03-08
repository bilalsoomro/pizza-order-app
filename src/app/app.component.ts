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
  filteredMenu = [];

  ngOnInit() {
    let self = this;
    
    self.pizzas.forEach((item) => {
      self.menu.push({'item': item, 'qty': 0});
    });

    self.filteredMenu = this.menu.filter(
      m => m.item.ingredients === self.keyword);
    
  }

  addItem(pizza: Pizza, quantity: number) {
    if(quantity == 0) {
      alert('Write the quantity');
      return;
    }

    this.orders.push(new Order(pizza, quantity));
  }

  removeItem(index: number) {
    console.log('item to remove', index);
    this.orders.splice(index, 1);
  }
}
