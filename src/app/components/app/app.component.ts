import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  loading: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
          if (event instanceof NavigationStart) {
              this.loading = true;
          } else if (
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel
              ) {
              this.loading = false;
          }
      });
  }
}
