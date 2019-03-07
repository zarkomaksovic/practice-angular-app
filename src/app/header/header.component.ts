import { AppComponent } from './../app.component';
import { Component, Input } from '@angular/core';

interface UserInterface {
  name: string;
  age?: number;
  isAdmin?: boolean;
  favourites: Array<string>;
  personalData: {
    id: number;
    name: string;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: any;
  users: Array<UserInterface>;
  user: UserInterface;

  getData(): string {
    return 'Nikola';
  }

}
