import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstname: any;
  mail: any;
  phonenumber: any;
  yourmessage: any;
  personal: string;
  sent: string;
  isButtonVisible: boolean;
  isDivVisible: boolean;

  passData(name: any, email: any, phone: any, message: any ) {
    this.firstname = name;
    this.mail = email;
    this.phonenumber = phone;
    this.yourmessage = message;
    this.sent = 'Your message has been sent!';

  }

  constructor() {
    this.personal = 'Please check your personal information before submitting.';
  }

  ngOnInit() {
  }

}
