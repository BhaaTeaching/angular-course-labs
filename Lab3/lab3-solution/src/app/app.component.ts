import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3-solution';
  date: Date | undefined;
  constructor() {
    setInterval(() => this.date = new Date(), 3000);
  }
}
