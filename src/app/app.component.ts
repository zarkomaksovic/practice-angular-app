import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Component, OnInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: string;
  adress: string;
  phone: string;
  mail: string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.title = 'Quantox Men Suites';
    this.adress = 'Kneza Milosa 120';
    this.phone = '(060)1234567';
    this.mail = 'quantox@quantox.com';
  }


}
