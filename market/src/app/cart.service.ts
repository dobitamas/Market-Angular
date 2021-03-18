import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public httpClient:HttpClient) { }

  addToCart(itemId: string): Observable<any> {
    console.log("Adding to cart")
    console.log("itemId: ", itemId);
    return this.httpClient 
      .post("http://localhost:3000/cart/addToCart/", {itemId: itemId});
      
  }

  getCart(): Observable<any> {
    console.log("Getting cart")
    return this.httpClient
        .get("http://localhost:3000/cart/getCart");
  }

  deleteFromCart(itemId: string): Observable<any> {
    console.log("DELETE HTTP CALL")
    let httpParams = new HttpParams().set('itemId', itemId);

    let options = {params: httpParams}

    return this.httpClient.delete("http://localhost:3000/cart/deleteFromCart/", options);
  }
}
