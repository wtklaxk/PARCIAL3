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
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { clienteComponent } from './Components/clientes/clientes.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';
import { TableComponent } from './Components/table/table.component';
import { LoginComponent } from './Components/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { FormclientesComponent } from './Components/formclientes/formclientes.component';
import { FormfarmaciaComponent } from './Components/formfarmacia/formfarmacia.component';
import { FormfarmacosComponent } from './Components/formfarmacos/formfarmacos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    clienteComponent,
    FarmacosComponent,
    FarmaciasComponent,
    TableComponent,
    LoginComponent,
    FormclientesComponent,
    FormfarmaciaComponent,
    FormfarmacosComponent,
    
    
    
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
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
