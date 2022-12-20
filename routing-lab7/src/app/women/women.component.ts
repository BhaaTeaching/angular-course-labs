import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

}
