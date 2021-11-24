import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostulantServices} from "../../Services/Postulant-services";

@Component({
  selector: 'app-register-postulant',
  templateUrl: './register-postulant.component.html',
  styleUrls: ['./register-postulant.component.css']
})
export class RegisterPostulantComponent implements OnInit {
  name:String
  lastName:String
  nameGithub:String
  email:String
  password:String
  description:String
  profilePicture:String
  constructor(private router:Router,private postulantService:PostulantServices) {
    this.name=""
    this.nameGithub=""
    this.lastName=""
    this.email=""
    this.password=""
    this.description=""
    this.profilePicture=""
  }
  signIn(){
    this.router.navigate(['/LoginPostulant'])
  }
  register(){
    const data={
      name:this.name,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      description:this.description,
      nameGithub:this.nameGithub,
      imgPostulant:this.profilePicture
    }
    if(this.name!="" &&
      this.lastName!="" &&
      this.email!="" &&
      this.password!="" &&
      this.profilePicture!=""
    ){
      this.postulantService.register(data).subscribe(response=>{
        this.postulantService.signIn({email:this.email,password:this.password}).subscribe(response2=>{
          sessionStorage.setItem("id",response2.id.toString())
          this.router.navigate(['MenuPostulant/ProfilePostulant',sessionStorage.getItem("id")])
        })
      })
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
