
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products = [
    {id: 1, name: 'men-suite 1', price: 100, image: '/assets/thumb/men1.jpg'},
    {id: 2, name: 'men-suite 2', price: 200, image: '/assets/thumb/men2.jpg'},
    {id: 3, name: 'men-suite 3', price: 300, image: '/assets/thumb/men1.jpg'},
    {id: 4, name: 'men-suite 4', price: 400, image: '/assets/thumb/men2.jpg'},
    {id: 5, name: 'men-suite 5', price: 500, image: '/assets/thumb/men1.jpg'},
    {id: 6, name: 'men-suite 6', price: 600, image: '/assets/thumb/men2.jpg'},
    {id: 7, name: 'men-suite 7', price: 700, image: '/assets/thumb/men1.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
