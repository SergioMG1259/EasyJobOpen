import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Company} from "../model/company";
import {CompanyServices} from "../../Services/Company-services";

@Component({
  selector: 'app-edit-profile-company',
  templateUrl: './edit-profile-company.component.html',
  styleUrls: ['./edit-profile-company.component.css']
})
export class EditProfileCompanyComponent implements OnInit {
  id_company:number
  name_edit:string
  img_edit:string
  description_edit:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Company,
              private companyservices:CompanyServices) {
    this.id_company=data.id
    this.name_edit=data.name_company
    this.img_edit=data.img_company
    this.description_edit=data.description
  }
  edit_profile(){
    const data={
      name_company:this.name_edit,
      description:this.description_edit,
      img_company:this.img_edit
    }
    this.companyservices.edit_company(this.id_company,data).subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
  }

}
