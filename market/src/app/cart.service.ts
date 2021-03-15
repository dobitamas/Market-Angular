import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCart(): Observable<any> {
    console.log("Getting cart")
    return this.httpClient
        .get("http://localhost:3000/getCart");
  }

  deleteFromCart(itemId: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/deleteFromCart/${itemId}`)
  }
}
