import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { clienteComponent } from './Components/clientes/clientes.component';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';


const routes: Routes = [
     {path:'clientes',component:clienteComponent},
     {path:'farmacias',component:FarmaciasComponent},
     {path:'farmacos',component:FarmacosComponent}
     
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
