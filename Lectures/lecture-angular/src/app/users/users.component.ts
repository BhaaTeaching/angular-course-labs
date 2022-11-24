import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  names : string[] =['bhaa', 'yousef', 'eldar']
  isDarkMode : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  lightMode() {
    if (this.isDarkMode) {
      return {
        backgroundColor: 'black',
        color: 'white'
      }
    } else {
      return {
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }

  turnOnLightMode() {
    this.isDarkMode = false;
  }

  turnOnDarkMode() {
    this.isDarkMode = true;
  }
}
