import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [
    { title: 'New Product', message: 'A new product has been added.' },
    { title: 'Price Drop', message: 'Price has dropped for a product you are tracking.' },
    { title: 'Out of Stock', message: 'A product you are interested in is currently out of stock.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Notification {
  title: string;
  message: string;
}
