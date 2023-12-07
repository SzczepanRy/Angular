import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  addToCard: number = 0;
  name = 'name';
  products = [
    {
      name: 'phone',
      price: 1000,
      color: 'black',
      discount: 10,
      img: '/assets/img/phone.jpg',
      inStock: true,
    },
    {
      name: 'phone',
      price: 1000,
      color: 'black',
      discount: 10,
      img: '/assets/img/phone.jpg',
      inStock: true,
    },
    {
      name: 'phone',
      price: 1000,
      color: 'black',
      discount: 10,
      img: '/assets/img/phone.jpg',
      inStock: true,
    },
    {
      name: 'phone',
      price: 1000,
      color: 'black',
      discount: 10,
      img: '/assets/img/phone.jpg',
      inStock: true,
    },
  ];

  add() {
    this.addToCard += 1;
  }

  sub() {
    if (this.addToCard > 0) {
      this.addToCard -= 1;
    }
  }

  onNameChange(event: any) {
    this.name = event.currentTarget.value;
  }
  getDiscount(price: number, discount: number) {
    return price - (price * discount) / 100;
  }
}
