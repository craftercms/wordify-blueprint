import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';

const routes: Routes = [
  { path: 'category/:id', component: DynamicRouteComponent},
  { path: 'tag/:id', component: DynamicRouteComponent},
  { path: '', component: DynamicRouteComponent },
  { path: '**', component: DynamicRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
