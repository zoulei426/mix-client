/*
 * @Description: 
 * @Author: zoulei
 * @Date: 2020-11-10 22:20:05
 * @LastEditors: zoulei
 * @LastEditTime: 2020-11-10 23:24:22
 */
import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'mc-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent implements OnInit {
  compainies: ICompany[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', "introduction"];

  constructor(private companiesService: CompaniesService){}

  ngOnInit() {
    this.companiesService.getCompanies().subscribe(companies=>{
      this.compainies = companies;
      console.log(this.compainies);
    });
  }

}
