import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() product: Product;
  constructor() { }
  isActive: boolean;

  ngOnInit() {
    this.isActive = false;
  }

  toggleAccordian(event) {
    const element = event.target;
    element.classList.toggle('active');
    if(this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}
}
