import { Injectable } from '@angular/core';
import {HeaderService} from "./header.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  topsMen = [
    {id:1, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/10/18/16660703076e1bf7842fff192ebcd8c82a9d06f21e_thumbnail_600x.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false},
    {id:2, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/11/24/1669258675c9ccdea7330f9276e83ccfc45633bffe_thumbnail_600x.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
    {id:3, price: 29, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/12/08/1638933026c22cae14e72ed612850c8c3202f211a0_thumbnail_600x.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
  ]
  topsWomen = [
    {id:1, price: 29, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/08/23/1629682006eaf5ff14779dd81d11a5f73bd138d866_thumbnail_900x.webp", size: ['XS','S', 'M', 'L'], inStock:true},
    {id:2, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/08/09/1628484011244d66babe85579cd414d8b93d8160b9_thumbnail_900x.webp", size: ['XS','S', 'M', 'L', 'XL'], inStock:true},
    {id:3, price: 49, imageUrl:"https://img.ltwebstatic.com/images2_pi/2019/07/17/15633453544083295325_thumbnail_900x1199.webp", size: ['XS','S', 'M', 'L', 'XL'], inStock:true},
  ]
  constructor(private headerService : HeaderService) { }

  addToBag = () => {
    this.headerService.cardItemsNumber++;
  }}
