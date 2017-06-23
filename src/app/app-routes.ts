import { RouterModule, Routes } from '@angular/router';

import {EscaramuzaComponent} from './components/escaramuza/escaramuza.component';
import {HomeComponent} from './components/home/home.component';
import {PlanetaComponent} from './components/planeta/planeta.component';
import {ExploradoresComponent} from './components/exploradores/exploradores.component';
import {ExploradorComponent } from "./components/exploradores/explorador.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {EmblemasComponent} from "./components/emblemas/emblemas.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
  { path: 'planeta', component: PlanetaComponent,canActivate:[AuthGuardService] },
  { path: 'exploradores', component: ExploradoresComponent,canActivate:[AuthGuardService] },
  { path: 'explorador/:id', component: ExploradorComponent ,canActivate:[AuthGuardService]},
  { path: 'escaramuza', component: EscaramuzaComponent,canActivate:[AuthGuardService] },
  { path: 'emblemas', component: EmblemasComponent,canActivate:[AuthGuardService] },


  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
