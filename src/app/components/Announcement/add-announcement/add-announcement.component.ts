import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../Services/Announcement-services";


@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {
  id_company_add:number
  id_add:number
  title_add:string
  description_add:string
  specialty_selected:string
  experiences_selected:string
  salary_add:number
  type_money_selected:string
  specialties:any
  experiences:any
  types_money:any
  visible_add:boolean
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:number,
              private announcementservice:AnnouncementServices) {
    this.id_add=1
    this.title_add=""
    this.description_add=""
    this.specialty_selected=""
    this.experiences_selected=""
    this.salary_add=0
    this.type_money_selected=""
    this.specialties=['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design']
    this.experiences=['Practicante','Junior','Semi-Senior','Senior']
    this.types_money=['ARS','BRL','CLP','COP','MXN','PEN','USD']
    this.id_company_add=data
    this.visible_add=true
  }
  add_announcement(){
    let all_announcements:any
    this.announcementservice.getAll().subscribe(response=>{
      all_announcements=response
      if(all_announcements.length>0){
        this.id_add=all_announcements[all_announcements.length-1].id+1
      }
      this.add()
    })
  }
  add(){
    const data={
      id: this.id_add,
      title: this.title_add,
      description:this.description_add,
      required_specialty:this.specialty_selected,
      required_experience: this.experiences_selected,
      salary:this.salary_add,
      type_money: this.type_money_selected,
      visible: this.visible_add,
      date: "11/15/2021",
      id_company: this.id_company_add
    }
    this.announcementservice.add_announcement(data).subscribe(reponse=>{
      console.log(reponse)
    })
  }

  ngOnInit(): void {
  }

}
