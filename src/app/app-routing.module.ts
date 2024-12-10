import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrrComponent } from './prr/prr.component';
import { MmpComponent } from './mmp/mmp.component';
import { OplComponent } from './opl/opl.component';

const routes: Routes = [
  {path: '', redirectTo: 'prr', pathMatch: 'full'},
  {path: 'prr', component: PrrComponent},
  {path: 'mmp', component: MmpComponent},
  {path: 'opl', component: OplComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
