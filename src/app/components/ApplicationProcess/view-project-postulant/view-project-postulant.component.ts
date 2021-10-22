import { Component, OnInit } from '@angular/core';
import {Project} from "../../Project/model/project";
import {ProjectsServices} from "../../Services/Project-services";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {EvidenceServices} from "../../Services/Evidence-services";

@Component({
  selector: 'app-view-project-postulant',
  templateUrl: './view-project-postulant.component.html',
  styleUrls: ['./view-project-postulant.component.css']
})
export class ViewProjectPostulantComponent implements OnInit {
  id_project:number
  title_project:string
  img_project:string
  description_project:string
  evidences:any
  constructor(private route:ActivatedRoute,private router:Router,private projectservices:ProjectsServices,
              private evidenceservices:EvidenceServices) {
    this.id_project=0
    this.title_project=""
    this.img_project=""
    this.description_project=""
    this.evidences=[]
  }
  get_project(){
    this.projectservices.getById(this.id_project).subscribe(response=>{
      let data:any
      data=response
      this.title_project=data.title
      this.img_project=data.img_project
      this.description_project=data.description
    })
  }
  get_evidences_by_project(){
    this.evidenceservices.get_by_project(this.id_project).subscribe(response=>{
      this.evidences=response
    })
  }
  ngOnInit(): void {
    this.id_project=this.route.snapshot.params["id"]
    this.get_project()
    this.get_evidences_by_project()
  }

}
