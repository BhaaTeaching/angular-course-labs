import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() items: any;
  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
  }

}
