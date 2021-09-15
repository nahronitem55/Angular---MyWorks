import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
//declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products!: Product[];

  //Bir yönergenin tüm veriye bağlı özelliklerini başlattıktan sonra çağrılan method
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })
  }

  addToCart(product: { productName: string; }) {
    //alertify.success(product.productName + ' added');
    alert('Sepete Eklendi: ' + product.productName);
  }
}
