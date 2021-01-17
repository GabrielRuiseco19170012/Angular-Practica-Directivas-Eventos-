import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {HomeComponent} from './components/home/home.component';

// Routes
import {APP_ROUTING} from './Routes/router';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
