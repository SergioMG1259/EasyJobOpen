import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Company} from "../model/company";
import {CompanyServices} from "../../Services/Company-services";
import {EditProfileCompanyComponent} from "../edit-profile-company/edit-profile-company.component";

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {
  data_company:Company
  id_company:number
  name_company:string
  description_company:string
  img_company:string
  constructor(public dialog:MatDialog,private route:ActivatedRoute,private companyservices:CompanyServices) {
    this.data_company={} as Company
    this.id_company=0
    this.name_company=""
    this.description_company=""
    this.img_company=""
  }
  get_company(){
    this.companyservices.get_company_by_id(this.id_company).subscribe(response=>{
      let data:any
      data=response
      this.data_company=data
      this.name_company=data.name_company
      this.description_company=data.description
      this.img_company=data.img_company
    })
  }
  Open_dialog_edit(){
    const dialogRef=this.dialog.open(EditProfileCompanyComponent,{data:this.data_company})
  }

  ngOnInit(): void {
    this.id_company=this.route.snapshot.params["id"]
    this.get_company()
  }

}
