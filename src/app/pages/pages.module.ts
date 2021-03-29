import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemShopComponent } from './list/item-shop/item-shop.component';



@NgModule({
  declarations: [ListComponent, ItemShopComponent, HomeComponent],
  exports: [
    ListComponent, ItemShopComponent, HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
