import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public httpClient:HttpClient) { }

  addToCart(itemId: string): Observable<any> {
    console.log("Adding to cart")
    return this.httpClient
      .post("http://localhost:3000/addItem/", itemId);
      
  }
}
