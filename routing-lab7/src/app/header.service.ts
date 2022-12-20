import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  cardItemsNumber: number = 0;
  constructor() { }
}
