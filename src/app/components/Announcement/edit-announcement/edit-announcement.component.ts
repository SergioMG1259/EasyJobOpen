import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../Services/Announcement-services";

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {
  id_to_edit:number
  title_edit:string
  description_edit:string
  specialty_selected:string
  experiences_selected:string
  salary_edit:number
  type_money_selected:string
  specialties:any
  experiences:any
  types_money:any
  visible_edit:boolean
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Announcement,
              private announcementservice:AnnouncementServices) {
    this.id_to_edit=data.id
    this.title_edit=data.title
    this.description_edit=data.description
    this.specialty_selected=data.required_specialty
    this.experiences_selected=data.required_experience
    this.experiences=['Practicante','Junior','Semi-Senior','Senior']
    this.specialties=['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design']
    this.types_money=['ARS','BRL','CLP','COP','MXN','PEN','USD']
    this.salary_edit=data.salary
    this.type_money_selected=data.type_money
    this.visible_edit=data.visible
  }
  edit_announcement(){
    const data={
      title:this.title_edit,
      description:this.description_edit,
      required_specialty:this.specialty_selected,
      required_experience:this.experiences_selected,
      salary:this.salary_edit,
      type_money:this.type_money_selected,
      visible:this.visible_edit
    }
    this.announcementservice.edit_announcement(this.id_to_edit,data).subscribe(response=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
