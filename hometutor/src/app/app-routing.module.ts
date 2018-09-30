import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterationComponent} from './registeration/registeration.component';
import { SearchComponent } from './search/search.component';
const routes= [{
path:'home',
component:HomeComponent
},{
  path:'registeration',
  component:RegisterationComponent
},{
  path:'search',
  component:SearchComponent
},{
  path:'',
  component:HomeComponent
}];


@NgModule({
  exports: [
    RouterModule
  ],
  imports:[RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }