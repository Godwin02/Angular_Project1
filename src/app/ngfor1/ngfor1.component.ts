import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { finished } from 'stream/promises';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css']
})
export class Ngfor1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    { name: 'Laptop', price: 40000, category: 'Electronics', stock: 15 },
    { name: 'T-Shirt', price: 800, category: 'Clothing', stock: 100 },
    { name: 'Refrigerator', price: 30000, category: 'Home Appliances', stock: 10 },
    { name: 'Sofa', price: 20000, category: 'Furniture', stock: 6 },
    { name: 'Treadmill', price: 30000, category: 'Sports Equipment', stock: 3 },
    { name: 'Smartphone', price: 25000, category: 'Electronics', stock: 30 },
    { name: 'Jeans', price: 1500, category: 'Clothing', stock: 60 },
    { name: 'Washing Machine', price: 25000, category: 'Home Appliances', stock: 8 },
    { name: 'Dining Table', price: 15000, category: 'Furniture', stock: 8 },
    { name: 'Dumbbells', price: 2000, category: 'Sports Equipment', stock: 25 },
    { name: 'Tablet', price: 20000, category: 'Electronics', stock: 20 },
    { name: 'Jacket', price: 3000, category: 'Clothing', stock: 40 },
    { name: 'Microwave Oven', price: 8000, category: 'Home Appliances', stock: 15 },
    { name: 'Bed', price: 25000, category: 'Furniture', stock: 4 },
    { name: 'Yoga Mat', price: 1000, category: 'Sports Equipment', stock: 40 },
    { name: 'Smartwatch', price: 15000, category: 'Electronics', stock: 25 },
    { name: 'Sneakers', price: 2500, category: 'Clothing', stock: 35 },
    { name: 'Air Conditioner', price: 40000, category: 'Home Appliances', stock: 5 },
    { name: 'Chair', price: 3000, category: 'Furniture', stock: 20 },
    { name: 'Tennis Racket', price: 3000, category: 'Sports Equipment', stock: 15 },
    { name: 'Headphones', price: 5000, category: 'Electronics', stock: 50 },
    { name: 'Dress', price: 2000, category: 'Clothing', stock: 20 },
    { name: 'Vacuum Cleaner', price: 7000, category: 'Home Appliances', stock: 12 },
    { name: 'Bookshelf', price: 5000, category: 'Furniture', stock: 10 },
    { name: 'Bicycle', price: 15000, category: 'Sports Equipment', stock: 10 },
    { name: 'Face Cream', price: 1500, category: 'Beauty Products', stock: 50 },
    { name: 'Lipstick', price: 500, category: 'Beauty Products', stock: 100 },
    { name: 'Perfume', price: 3000, category: 'Beauty Products', stock: 20 },
    { name: 'Shampoo', price: 800, category: 'Beauty Products', stock: 40 },
    { name: 'Conditioner', price: 800, category: 'Beauty Products', stock: 35 },
    { name: 'Smart TV', price: 60000, category: 'Electronics', stock: 8 },
    { name: 'Shorts', price: 1200, category: 'Clothing', stock: 50 },
    { name: 'Electric Kettle', price: 2500, category: 'Home Appliances', stock: 20 },
    { name: 'Coffee Table', price: 7000, category: 'Furniture', stock: 15 },
    { name: 'Golf Clubs', price: 12000, category: 'Sports Equipment', stock: 5 },
    { name: 'Bluetooth Speaker', price: 4000, category: 'Electronics', stock: 30 },
    { name: 'Sweater', price: 1800, category: 'Clothing', stock: 25 },
    { name: 'Toaster', price: 1500, category: 'Home Appliances', stock: 18 },
    { name: 'Nightstand', price: 4000, category: 'Furniture', stock: 12 },
    { name: 'Skateboard', price: 3000, category: 'Sports Equipment', stock: 10 }
  ]
categories=[...new Set(this.products.map(pro=>pro.category))];

selectedCategory: any;
tempProducts = [...this.products];
filter(){
  if(this.selectedCategory !='SELECT'){
    this.tempProducts=[...this.products.filter((pro , index, array) => {
      return pro.category == this.selectedCategory;
    })]
  }
  else if(this.selectedCategory=='SELECT'){
    this.tempProducts=this.products;
  }
}
}

