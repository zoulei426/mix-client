/*
 * @Description: 
 * @Author: zoulei
 * @Date: 2020-11-09 22:58:41
 * @LastEditors: zoulei
 * @LastEditTime: 2020-11-09 23:39:59
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
