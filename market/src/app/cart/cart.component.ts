import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  constructor(private cartService: CartService,
    private notifierService:NotifierService) { }

  

  ngOnInit(): void {
    this.cartService.getCart().subscribe(resp => {
      this.items = resp;
      this.notifierService.showNotification("Successfully loaded cart!", "Okay.", "success");
    },
    error => {
      this.notifierService.showNotification("Cart could not be loaded :(", "I got it!", "error");
    })
  }


  deleteFromCart(itemId: string) {
    this.cartService.deleteFromCart(itemId).subscribe(resp => {
      this.ngOnInit();
      this.notifierService.showNotification("Item is deleted!", "I got it!", "success");
    }, 
    error => {
      this.notifierService.showNotification("Item could not be deleted!", "Okay", "error");
    })

  }

}
