import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isDarkTheme: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    storeSelectedTheme() {
      localStorage.setItem('theme', this.isDarkTheme? "Dark" : "Light")
    }

    ngOnInit(){
      if (localStorage.getItem('theme') === "Dark") {
        this.isDarkTheme = true;
      } else {
        this.isDarkTheme = false;
      }
    }

  constructor(private breakpointObserver: BreakpointObserver) {}

}
