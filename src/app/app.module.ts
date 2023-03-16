import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './Components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { clienteComponent } from './Components/clientes/clientes.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    clienteComponent,
    FarmacosComponent,
    FarmaciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
