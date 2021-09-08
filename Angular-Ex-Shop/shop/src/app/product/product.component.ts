import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  title = 'Ürün Listesi';
  products: Product[] = [
    {
      id: 1,
      productName: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl:"https://images.unsplash.com/photo-1631028281421-d8a69a70b97a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      id: 2,
      productName: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'Asus Mouse',
      imageUrl:"https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 3,
      productName: 'Web Cam',
      price: 15,
      categoryId: 3,
      description: 'A4 Tech',
      imageUrl:"https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 4,
      productName: 'Laptop',
      price: 5000,
      categoryId: 1,
      description: 'Lenova Thinkpad',
      imageUrl:"https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 5,
      productName: 'Cable',
      price: 8,
      categoryId: 4,
      description: 'Cat5',
      imageUrl:"https://images.unsplash.com/photo-1599256871679-6a154745680b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 6,
      productName: 'Laptop',
      price: 4520,
      categoryId: 2,
      description: 'Monster A5',
      imageUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    },
    {
      id: 7,
      productName: 'Telephone',
      price: 3475,
      categoryId: 5,
      description: 'Mi8',
      imageUrl:"https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    },
  ];

  ngOnInit(): void {}
}
