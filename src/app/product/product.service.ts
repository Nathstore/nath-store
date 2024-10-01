import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = environment.apiUrl + "/products";

  //console.log(this.apiUrl);
  

  constructor(private http: HttpClient) { }
  


  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(data => data.products) // Extract the products array from the response
    );
  }

  getProductDetails(id: string) : Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
