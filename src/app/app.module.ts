import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CartModule } from "./cart/cart.module";
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { UserModule } from './user/user.module';
// import { AboutusComponent } from './natstore/aboutus/aboutus.component';
import { NathstoreModule } from './nathstore/nathstore.module';
import { AdministrationModule } from './administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,
    // AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CartModule,
    MatIconModule,
    MatBadgeModule,
    UserModule,
    NathstoreModule,
    AdministrationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
