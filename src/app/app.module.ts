import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './components/inputs/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { AppServiceInterceptor } from './interceptors/app.service.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
       { provide: HTTP_INTERCEPTORS, useClass: AppServiceInterceptor, multi: true }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
