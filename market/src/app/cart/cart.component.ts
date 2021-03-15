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
      console.log(resp)
      this.items = resp;
      console.log(resp);
    })
  }


  deleteFromCart(itemId: string) {
    console.log("DELETION STARTED")
    this.cartService.deleteFromCart(itemId);
  }

}
