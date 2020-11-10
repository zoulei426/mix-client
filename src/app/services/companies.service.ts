/*
 * @Description: 
 * @Author: zoulei
 * @Date: 2020-11-10 22:24:02
 * @LastEditors: zoulei
 * @LastEditTime: 2020-11-10 23:37:07
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/company';
import { ICompanyAdd } from '../models/company-add';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<ICompany[]>{
    return this.httpClient.get<ICompany[]>('http://localhost:5002/api/companies');
  }

  addCompany(company: ICompanyAdd){
    return this.httpClient.post<ICompany>('http://localhost:5002/api/companies', company);
  }
}
