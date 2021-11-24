import {Component, Inject, OnInit, Optional} from '@angular/core';
import {PostulantServices} from "../../Services/Postulant-services";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-postulant',
  templateUrl: './login-postulant.component.html',
  styleUrls: ['./login-postulant.component.css']
})
export class LoginPostulantComponent implements OnInit {
  email:String
  password:String
  constructor(private postulantService:PostulantServices,private router:Router) {
    this.email=""
    this.password=""
  }
  signin(){
    this.postulantService.signIn({email:this.email,password:this.password}).subscribe(response=>{
      console.log(response)
      sessionStorage.setItem("id",response.id.toString())
      this.router.navigate(['/MenuPostulant/ProfilePostulant',response.id])
    })
  }
  register(){
    this.router.navigate(['/RegisterPostulant'])
  }
  toCompany(){
    this.router.navigate(['/LoginCompany'])
  }

  ngOnInit(): void {
  }

}
