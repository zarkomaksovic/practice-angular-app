import { Component, Input } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  date: any = Date.now();



  @Input() title: any;
  @Input() adress: string;
  @Input() phone: string;
  @Input() mail: string;
}
