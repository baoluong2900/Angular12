import { NgModule } from '@angular/core';
// Cấu hình ngModel
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnsalePipe } from './onsale.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnsalePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import cấu hình ngModel
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
