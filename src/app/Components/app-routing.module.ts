import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaparqueaderosComponent } from './tablaparqueaderos/tablaparqueaderos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


const routes: Routes = [
  {
 path:'Parqueaderos', component:TablaparqueaderosComponent
  },
{
  path:'Usuarios', component:UsuariosComponent
  },
  {
    path:'vehiculos', component:VehiculosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }