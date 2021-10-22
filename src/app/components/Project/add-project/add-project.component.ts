import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Project} from "../model/project";
import {ProjectsServices} from "../../Services/Project-services";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  id_add:number
  title_add:string
  img_add:string
  description_add:string
  id_postulant_add:number
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:number ,public dialog:MatDialog,private addservices:ProjectsServices) {
    this.id_add=1
    this.title_add=""
    this.img_add=""
    this.description_add=""
    this.id_postulant_add=data
  }
  add_project(){
    let all_project:any
    this.addservices.getAll().subscribe(response=>{
      all_project=response
      if(all_project.length>0){
       this.id_add=all_project[all_project.length-1].id+1
      }
      this.add()
    })
  }
  add(){
    const data={
      id: this.id_add,
      title: this.title_add,
      description: this.description_add,
      id_postulant: this.id_postulant_add,
      linktogithub: "",
      img_project:this.img_add
    }
    this.addservices.AddProject(data).subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
  }

}
