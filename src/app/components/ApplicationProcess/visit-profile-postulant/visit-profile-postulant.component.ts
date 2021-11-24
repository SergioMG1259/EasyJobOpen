import { Component, OnInit } from '@angular/core';
import {Postulant} from "../../Postulant/model/postulant";
import {PostulantServices} from "../../Services/Postulant-services";
import {SpecialtyService} from "../../Services/SpecialtyExperience-service";
import {Project} from "../../Project/model/project";
import {ProjectsServices} from "../../Services/Project-services";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {InvitationComponent} from "../../Notifications/invitation/invitation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-visit-profile-postulant',
  templateUrl: './visit-profile-postulant.component.html',
  styleUrls: ['./visit-profile-postulant.component.css']
})
export class VisitProfilePostulantComponent implements OnInit {
  Postulant_data_visit:Postulant
  id:number
  id_company:number
  name_postulant:string
  lastname_postulant:string
  description_postulant:string
  img_postulant:string
  specialty:string
  experience:string
  projects:any
  specialtyexperience:any
  constructor(private route:ActivatedRoute,private router:Router,private postulantservices:PostulantServices,
              private projectservices:ProjectsServices,private  specialties_experiences:SpecialtyService,public dialog:MatDialog){
    this.Postulant_data_visit={} as Postulant
    this.id=0
    this.id_company=0
    this.name_postulant=""
    this.lastname_postulant=""
    this.description_postulant=""
    this.img_postulant=""
    this.specialty=""
    this.experience=""
    this.projects=[]
    this.specialtyexperience=[]
  }
  get_postulant(){
    this.postulantservices.getById(this.id).subscribe(response=>{
      this.Postulant_data_visit=response
      this.name_postulant=this.Postulant_data_visit.name
      this.lastname_postulant=this.Postulant_data_visit.lastName
      this.description_postulant=this.Postulant_data_visit.description
      this.img_postulant=this.Postulant_data_visit.imgPostulant
      /*this.specialty=this.Postulant_data_visit.myspecialty
      this.experience=this.Postulant_data_visit.myexperience*/
    })
  }
  get_specialties_experiences(){
    this.specialties_experiences.get_by_idPostulant(this.id).subscribe(response=>{
      this.specialtyexperience=response.content
    })
  }
  get_projects(){
    this.projectservices.getByOwner(this.id).subscribe(response=>{
      this.projects=response.content
      console.log(response.content)
    })
  }
  gotoItems(id:number){
    this.router.navigate(['/MenuCompany/Visit-Project',id])
  }
  Open_dialog_invitation(){
    const dialogRef=this.dialog.open(InvitationComponent,{data:{id_postulant:this.id,id_company:this.id_company}})
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"]
    this.id_company=this.route.snapshot.params["idcompany"]
    this.get_postulant()
    this.get_specialties_experiences()
    this.get_projects()
  }

}
