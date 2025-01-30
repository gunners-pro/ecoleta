import { Routes } from '@angular/router';
import { CreateCollectComponent } from './pages/create-collect/create-collect.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateCollectComponent },
];
