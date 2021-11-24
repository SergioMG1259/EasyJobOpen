import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CompanyServices} from "../../Services/Company-services";

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {
  email:String
  password:String
  constructor(private router:Router,private companyService:CompanyServices) {
    this.email=""
    this.password=""
  }
  signIn(){
    this.companyService.signIn({email:this.email,password:this.password}).subscribe(response=>{
      sessionStorage.setItem("id",response.id.toString())
      this.router.navigate(['/MenuCompany/ProfileCompany',response.id])
    })
  }
  register(){
    this.router.navigate(['/RegisterCompany'])
  }
  toPostulant(){
    this.router.navigate(['/LoginPostulant'])
  }
  ngOnInit(): void {
  }

}
