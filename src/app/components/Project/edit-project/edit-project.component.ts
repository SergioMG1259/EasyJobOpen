import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Project} from "../model/project";
import {ProjectsServices} from "../../Services/Project-services";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  id_project:number
  title_edit:string
  img_edit:string
  description_edit:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Project,private editservice:ProjectsServices) {
    this.id_project=data.id
    this.title_edit=data.title
    this.img_edit=data.img_project
    this.description_edit=data.description
  }
  edit_project(){
    const data_edit={
      title:this.title_edit,
      description:this.description_edit,
      img_project:this.img_edit
    }
    this.editservice.setproyect(this.id_project,data_edit).subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
  }

}
