import { NgModule } from '@angular/core';
// Cấu hình ngModel
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnsalePipe } from './onsale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Cấu hình
import {HttpClientModule} from '@angular/common/http';
import { HighLightDirective } from './Directvies/high-light.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnsalePipe,
    PageNotFoundComponent,
    HighLightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import cấu hình ngModel
    BrowserModule,
    FormsModule,

    // Making HTTP request
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
