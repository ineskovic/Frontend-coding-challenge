import { MapComponent } from './map/map.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import {Routes, RouterModule } from '@angular/router';
import {  ModuleWithProviders } from '@angular/core';
import { OfficeListComponent } from './office-list/office-list.component';

export const router: Routes = [
  { path: '', redirectTo: '/office', pathMatch: 'full' },
  { path: 'office', component: OfficeListComponent },
  { path: 'grid', component: GridComponent },
  { path: 'map', component: MapComponent }
  

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
