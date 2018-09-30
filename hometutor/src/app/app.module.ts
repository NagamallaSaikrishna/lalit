import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,NgForm} from '@angular/forms';
import { RegisterationComponent } from './registeration/registeration.component';
import { SearchComponent } from './search/search.component';
import { HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
