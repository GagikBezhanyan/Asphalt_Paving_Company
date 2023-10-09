import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'asphalt', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '', redirectTo: 'asphalt', pathMatch: 'full' },
  { path: '**', redirectTo: 'asphalt' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
