import { Component, OnInit } from '@angular/core';
import { GetProductsService } from './get-products.service';
import { ActivatedRoute } from '@angular/router';
import { Pager } from './model/products.model';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items = [];
  pager: Pager;
  xeins: number;
  xzwei: number;
  pages = [];
  pageOfItems: Array<any>;
  title = 'Foodplaner';
  product = [];
  constructor(private svc: GetProductsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
/*     this.svc.getProducts().subscribe(result => {
      this.product = result.data;
    }); */
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  private loadPage(page) {
    // get page of items from api
    this.svc.getProducts(`page[number]=${page}&page[size]=10`).subscribe(x => {
        console.log(page);
        this.pages = [];
        this.pager = x.pager;
        this.xeins = this.pager.currentpage - 5;
        this.xzwei = this.pager.currentpage + 4;
        if (this.xeins < 0) {
          this.xeins = 1;
          this.xzwei = 10;
          console.log(this.pager.currentpage);
        }

        if (this.xzwei > this.pager.totalPages) {
          this.xzwei = this.pager.currentpage;
          this.xeins = this.pager.currentpage - 9;
          console.log(this.xzwei,this.xeins);
        }
        // tslint:disable-next-line: align
        for (let i = this.xeins; i <= this.xzwei; i++) {
            this.pages.push(i);
        }
        console.log(this.xzwei,this.xeins);
        this.product = x.data;
    });
  }
}
