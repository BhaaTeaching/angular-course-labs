import { Component, OnInit } from '@angular/core';
import * as queryString from "querystring";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  seaImage : string = "";
  imgClassName = "img-style"
  constructor() { }

  ngOnInit(): void {
  }

  openSeaImage = (event : Event) => {
    let currentTarget = event.currentTarget as HTMLInputElement;
    this.seaImage = currentTarget.checked ?
      "https://img.freepik.com/free-photo/fantastic-seascape-with-ripples_1232-424.jpg?w=1380&t=st=1669156028~exp=1669156628~hmac=05565a5ddc038f5b49496451bf73c860acef98b15e35d80d41e9d18eefb2ccad"
      : "";
    console.log(currentTarget.checked)
  }

  closeSeaImage() {
    this.seaImage=""
  }
}
