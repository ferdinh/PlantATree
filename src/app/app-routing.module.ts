import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';


const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/tree', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
