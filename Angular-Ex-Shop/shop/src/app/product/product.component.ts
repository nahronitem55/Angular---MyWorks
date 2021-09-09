import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
//declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService:ProductService
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products!: Product[];

  //Bir yönergenin tüm veriye bağlı özelliklerini başlattıktan sonra çağrılan method
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    });
  }

  addToCart(product: { productName: string; }) {
    //alertify.success(product.productName + ' added');
    alert('Sepete Eklendi: ' + product.productName);
  }
}
