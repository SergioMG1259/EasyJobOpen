import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CompanyServices} from "../../Services/Company-services";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  nameCompany:String
  email:String
  password:String
  description:String
  profilePicture:String
  constructor(private router:Router,private companyService:CompanyServices) {
    this.nameCompany=""
    this.email=""
    this.password=""
    this.description=""
    this.profilePicture=""
  }
  register(){
    const data={
      nameCompany:this.nameCompany,
      email:this.email,
      password:this.password,
      descriptionCompany:this.description,
      imgCompany:this.profilePicture
    }
    if(this.nameCompany!=""&& this.email!="" && this.password!=""){
      this.companyService.register(data).subscribe(response=>{
        this.companyService.signIn({email:this.email,password:this.password}).subscribe(response2=>{
          sessionStorage.setItem("id",response2.id.toString())
          this.router.navigate(['MenuCompany/ProfileCompany',sessionStorage.getItem("id")])
        })
      })
    }
  }
  singIn(){
    this.router.navigate(['/LoginCompany'])
  }
  ngOnInit(): void {
  }

}
