import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar:MatSnackBar) { }

  showNotification(message: string, button:string) {
    this.snackBar.openFromComponent( NotifierComponent, {
      data: {
        displayMessage: message,
        buttonMessage: button 
      },
      duration: 6500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
