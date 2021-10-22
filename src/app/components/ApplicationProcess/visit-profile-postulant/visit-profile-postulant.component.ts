import { Component, OnInit } from '@angular/core';
import {Postulant} from "../../Postulant/model/postulant";
import {PostulantServices} from "../../Services/Postulant-services";
import {Project} from "../../Project/model/project";
import {ProjectsServices} from "../../Services/Project-services";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visit-profile-postulant',
  templateUrl: './visit-profile-postulant.component.html',
  styleUrls: ['./visit-profile-postulant.component.css']
})
export class VisitProfilePostulantComponent implements OnInit {
  Postulant_data_visit:Postulant
  id:number
  name_postulant:string
  lastname_postulant:string
  description_postulant:string
  img_postulant:string
  specialty:string
  experience:string
  projects:any
  constructor(private route:ActivatedRoute,private router:Router,private postulantservices:PostulantServices,
              private projectservices:ProjectsServices) {
    this.Postulant_data_visit={} as Postulant
    this.id=0
    this.name_postulant=""
    this.lastname_postulant=""
    this.description_postulant=""
    this.img_postulant=""
    this.specialty=""
    this.experience=""
    this.projects=[]
  }
  get_postulant(){
    this.postulantservices.getById(this.id).subscribe(response=>{
      this.Postulant_data_visit=response
      this.name_postulant=this.Postulant_data_visit.name
      this.lastname_postulant=this.Postulant_data_visit.lastname
      this.description_postulant=this.Postulant_data_visit.description
      this.img_postulant=this.Postulant_data_visit.img_postulant
      this.specialty=this.Postulant_data_visit.myspecialty
      this.experience=this.Postulant_data_visit.myexperience
    })
  }
  get_projects(){
    this.projectservices.getByOwner(this.id).subscribe(response=>{
      this.projects=response
    })
  }
  gotoItems(id:number){
    this.router.navigate(['/MenuCompany/Visit-Project',id])
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"]
    this.get_postulant()
    this.get_projects()
  }

}
