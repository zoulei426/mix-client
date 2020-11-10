/*
 * @Description: 
 * @Author: zoulei
 * @Date: 2020-11-09 22:58:41
 * @LastEditors: zoulei
 * @LastEditTime: 2020-11-10 23:27:06
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompaniesTableComponent } from './components/companies-table/companies-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'companies',
    component: CompaniesTableComponent
  },
  {
    path: 'company-add',
    component: AddCompanyComponent
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
