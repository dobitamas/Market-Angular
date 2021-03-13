import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar:MatSnackBar) { }

  showNotification(message: string, button:string) {
    this.snackBar.open(message, button, {
      duration: 6500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
