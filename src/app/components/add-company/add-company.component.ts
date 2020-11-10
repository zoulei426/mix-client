/*
 * @Description: 
 * @Author: zoulei
 * @Date: 2020-11-10 23:25:53
 * @LastEditors: zoulei
 * @LastEditTime: 2020-11-10 23:42:48
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'mc-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    introduction: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, 
    private companiesService: CompaniesService) {}

  onSubmit() {
    if(this.addressForm.valid){
      const company = this.addressForm.value;
      this.companiesService.addCompany(company).subscribe(cp => {
        alert('Success!');
      });
      
    }
  }
}
