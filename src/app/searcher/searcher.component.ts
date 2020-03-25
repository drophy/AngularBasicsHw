import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  query: string = '';
  stockCheckbox: boolean = false; 
  sortCheckbox: boolean = false;
  ratingCheckbox: boolean = false;
  desiredRating: number = 4;
  arrProducts: Product[];
  arrResults: Product[];

  search() 
  { 
    // Query
    if(this.query === undefined || this.query === '') this.arrResults = new Array(...this.arrProducts); // reset list
    else {
      let query = this.query.toUpperCase();
      this.arrResults = this.arrProducts.filter(product => {
        return product.name.toUpperCase().indexOf(query) != -1 || product.description.toUpperCase().indexOf(query) != -1;
      });
    }

    // Filters
    if(this.stockCheckbox) this.arrResults = this.arrResults.filter(product => product.stock > 0);
    if(this.sortCheckbox) this.arrResults.sort((p1, p2) => p1.price - p2.price);

    console.log(this.stockCheckbox);
  }

  constructor() {
    this.arrProducts = [
      new Product(22, "Smartphone", 3.5, "Quadcore 3GHZ", 12018.5, 5),
      new Product(4, "Smartwatch", 3, "3GB Ram", 4999.9, 0),
      new Product(17, "SmartTV", 4.6, "52 pulgadas, Conexión wifi", 8999.9, 3)
    ]
    this.arrResults = new Array(...this.arrProducts);
  }

  ngOnInit(): void {}

}
