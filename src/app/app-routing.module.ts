import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { clienteComponent } from './Components/clientes/clientes.component';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';
import { FormclientesComponent } from './Components/formclientes/formclientes.component';
import { FormfarmaciaComponent } from './Components/formfarmacia/formfarmacia.component';
import { FormfarmacosComponent } from './Components/formfarmacos/formfarmacos.component';


const routes: Routes = [
     {path:'clientes',component:clienteComponent},
     {path:'farmacias',component:FarmaciasComponent},
     {path:'farmacos',component:FarmacosComponent},
     {path:'formclientes',component:FormclientesComponent},
     {path:'formfarmacias',component:FormfarmaciaComponent},
     {path:'formfarmacos',component:FormfarmacosComponent}
     
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
