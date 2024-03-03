import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSortModule, MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PERIODIC_ELEMENT } from '../../interface/product.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[MatSortModule]
})
export class ProductListComponent implements OnInit {

  columnsToDisplay: string[] = [
    'title',
    'category',
    'price',
    'stock',
    'rating',
  ];
  dataSource: any;
  totalCount: number = 0;

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.cpList();
  }

  cpList(): void {
    this.productService.getProductList().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.products);
      this.totalCount = res.limit;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
