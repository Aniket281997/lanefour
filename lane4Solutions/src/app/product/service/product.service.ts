import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_CONSTANT } from '../constant/product.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor( private httpClient: HttpClient) { }

  getProductList() {
    return this.httpClient.get(`${PRODUCT_CONSTANT.PRODUCT_LIST}`);
  }
}
