import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { TreeDetailComponent } from './tree-detail/tree-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/tree', pathMatch: 'full'},
  { path: 'tree', component: TreeComponent},
  { path: 'tree/:id', component: TreeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
