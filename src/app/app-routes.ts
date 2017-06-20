import { RouterModule, Routes } from '@angular/router';

import {EscaramuzaComponent} from './components/escaramuza/escaramuza.component';
import {HomeComponent} from './components/home/home.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {PlanetaComponent} from './components/planeta/planeta.component';
import {ExploradoresComponent} from './components/exploradores/exploradores.component';
import {ExploradorComponent } from "./components/exploradores/explorador.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'planeta', component: PlanetaComponent },
  { path: 'exploradores', component: ExploradoresComponent },
  { path: 'explorador/:id', component: ExploradorComponent },
  { path: 'escaramuza', component: EscaramuzaComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'exploradores' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
