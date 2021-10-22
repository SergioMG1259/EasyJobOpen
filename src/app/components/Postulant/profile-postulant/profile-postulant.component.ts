import { Component, OnInit } from '@angular/core';
import {Postulant} from "../model/postulant";
import {PostulantServices} from "../../Services/Postulant-services";
import {Project} from "../../Project/model/project";
import {ProjectsServices} from "../../Services/Project-services";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {AddProjectComponent} from "../../Project/add-project/add-project.component";


@Component({
  selector: 'app-profile-postulant',
  templateUrl: './profile-postulant.component.html',
  styleUrls: ['./profile-postulant.component.css']
})
export class ProfilePostulantComponent implements OnInit {
  Postulant_data:Postulant
  id:number
  name_postulant:string
  lastname_postulant:string
  description_postulant:string
  img_postulant:string
  specialty:string
  experience:string
  myprojects:any
  constructor(private route:ActivatedRoute,private router:Router,private postulantservices:PostulantServices,
              private projectservices:ProjectsServices,public dialog:MatDialog) {

    this.Postulant_data={} as Postulant
    this.id=0
    this.name_postulant=""
    this.lastname_postulant=""
    this.description_postulant=""
    this.img_postulant=""
    this.specialty=""
    this.experience=""
    this.myprojects=[]
  }
  get_postulant(){
    this.postulantservices.getById(this.id).subscribe(response=>{
      this.Postulant_data=response
      this.name_postulant=this.Postulant_data.name
      this.lastname_postulant=this.Postulant_data.lastname
      this.description_postulant=this.Postulant_data.description
      this.img_postulant=this.Postulant_data.img_postulant
      this.specialty=this.Postulant_data.myspecialty
      this.experience=this.Postulant_data.myexperience
    })
  }
  get_projects(){
    this.projectservices.getByOwner(this.id).subscribe(response=>{
      this.myprojects=response
    })
  }
  Open_dialog_edit(){
    const dialogRef=this.dialog.open(EditProfileComponent,{data:this.Postulant_data})
  }
  Open_dialog_add_project(){
    const dialogRef=this.dialog.open(AddProjectComponent,{data:this.id})
  }
  gotoItems(idproject:number){
    this.router.navigate(['/MenuPostulant/Project',idproject])
  }

  ngOnInit(){
    this.id=this.route.snapshot.params["id"]
    this.get_postulant()
    this.get_projects()
  }

}
