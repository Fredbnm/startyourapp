import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-item-shop",
  templateUrl: "./item-shop.component.html",
  styleUrls: ["./item-shop.component.css"],
})
export class ItemShopComponent implements OnInit {
  public counter = 0;
  constructor() {}

  public increment() {
    this.counter++;
  }
  public decrement() {
    this.counter--;
  }

  ngOnInit(): void {}
}
