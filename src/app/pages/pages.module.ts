import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule],
})
export class PagesModule {}
