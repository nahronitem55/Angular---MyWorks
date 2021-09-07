import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  title = 'Ürün Listesi';
  products: any[] = [
    {
      id: 1,
      productName: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
    },
    {
      id: 2,
      productName: 'Mouse',
      price: 2500,
      categoryId: 2,
      description: 'Asus Mouse',
    },
    {
      id: 3,
      productName: 'Web Cam',
      price: 2500,
      categoryId: 3,
      description: 'A4 Tech',
    },
    {
      id: 4,
      productName: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Lenova Thinkpad',
    },
    {
      id: 5,
      productName: 'Cablo',
      price: 2500,
      categoryId: 4,
      description: 'Cat5',
    },
    {
      id: 6,
      productName: 'Laptop',
      price: 2500,
      categoryId: 2,
      description: 'Monster A5',
    },
    {
      id: 7,
      productName: 'Telephone',
      price: 2500,
      categoryId: 5,
      description: 'Mi8',
    },
  ];

  ngOnInit(): void {}
}
