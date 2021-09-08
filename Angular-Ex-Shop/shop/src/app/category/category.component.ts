import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  title = "Kategori Listesi"
  categories: Category[] = [
    { id: 1, categoryName: 'Elektronik' }, 
    { id: 2, categoryName: 'Bilgisayar' },
    { id: 3, categoryName: 'Telefon' },
    { id: 4, categoryName: 'İletişim' }, 
    { id: 5, categoryName: 'Müzik' }                      
];

  ngOnInit(): void {}
}
