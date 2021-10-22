import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project";
import {ProjectsServices} from "../../Services/Project-services";
import {ActivatedRoute, Params} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditProjectComponent} from "../edit-project/edit-project.component";
import {Router} from "@angular/router";
import {EvidenceServices} from "../../Services/Evidence-services";
import {AddEvidenceComponent} from "../../Evidence/add-evidence/add-evidence.component";
import {EditEvidenceComponent} from "../../Evidence/edit-evidence/edit-evidence.component";
import {Evidence} from "../../Evidence/model/evidence";

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  Project_Data:Project
  id_project:number
  title_project:string
  img_project:string
  description_project:string
  id_postulant:number
  evidences:any
  constructor(private route:ActivatedRoute,private router:Router,private projectservices:ProjectsServices,
              public dialog:MatDialog,private evidenceservices:EvidenceServices) {
    this.Project_Data={} as Project
    this.id_project=0
    this.title_project=""
    this.img_project=""
    this.description_project=""
    this.id_postulant=0
    this.evidences=[]
  }
  get_project(){
    this.projectservices.getById(this.id_project).subscribe(response=>{
      let data:any
      data=response
      this.Project_Data=response
      this.title_project=data.title
      this.img_project=data.img_project
      this.description_project=data.description
      this.id_postulant=data.id_postulant
    })
  }
  Open_dialog_edit(){
    const dialogRef=this.dialog.open(EditProjectComponent,{data:this.Project_Data})
  }
  gotoItems(idpostulant:number){
    this.router.navigate(['/MenuPostulant/ProfilePostulant',idpostulant])
  }
  delete_evidences_by_project(){
    for(let i=0;i<this.evidences.length;i++){
      this.evidenceservices.delete_evidence(this.evidences[i].id).subscribe(response=>{})
    }
  }
  Delete_project(){
    this.gotoItems(this.id_postulant)
    this.delete_evidences_by_project()
    this.projectservices.DeleteProject(this.id_project).subscribe(response=>{
      console.log(response)
    })
  }
  get_evidences_by_project(){
    this.evidenceservices.get_by_project(this.id_project).subscribe(response=>{
      this.evidences=response
    })
  }
  Open_dialog_add_evidence(){
    const dialogRef=this.dialog.open(AddEvidenceComponent,{data:this.id_project})
  }
  Open_dialog_edit_evidence(data:Evidence){
    const dialogRef=this.dialog.open(EditEvidenceComponent,{data:data})
  }
  delete_evidence(id:number){
    this.evidenceservices.delete_evidence(id).subscribe(response=>{})
  }
  ngOnInit(): void {
    this.id_project=this.route.snapshot.params["id"]
    this.get_project()
    this.get_evidences_by_project()
  }

}
