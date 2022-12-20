import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

}
