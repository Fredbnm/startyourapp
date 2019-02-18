import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './components/buttons/buttons/buttons.component';
import { GridsComponent } from './components/grids/grids/grids.component';
import { InputsComponent } from './components/inputs/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { NgLoadingSpinnerService } from './services/ng-loading-spinner/ng-loading-spinner.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgLoadingSpinnerInterceptor } from 'ng-loading-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonsComponent,
    GridsComponent,
    InputsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgLoadingSpinnerService, { provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
