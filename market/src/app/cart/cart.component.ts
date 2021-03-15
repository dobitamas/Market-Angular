import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  constructor(private cartService: CartService) { }

  

  ngOnInit(): void {
    this.cartService.getCart().subscribe(resp => {
      this.items = resp;
    })
  }


  deleteFromCart(itemId: string) :Observable<any> {
    this.cartService.
  }

}
