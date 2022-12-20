import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const appRouting : Routes = [
  {path: "", component:HomeComponent},
  {path: "men", component:MenComponent},
  {path: "women", component: WomenComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomenComponent,
    MenComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
