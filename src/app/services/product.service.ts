import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44317/api/products/getall";
  
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductReponseModel> {
    return this.httpClient.get<ProductReponseModel>(this.apiUrl)    
  }

}
