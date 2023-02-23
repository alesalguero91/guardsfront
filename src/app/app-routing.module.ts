import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './Componentes/listas/listas.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { GuardsService as guard} from './guards/guards.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'lista',component:ListasComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
