import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../Services/Announcement-services";
import {EditAnnouncementComponent} from "../edit-announcement/edit-announcement.component";
import {ApplicationServices} from "../../Services/Application-services";
import {WriteFeedbackComponent} from "../../Notifications/write-feedback/write-feedback.component";

@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {
  data_announcement:Announcement
  id_announcement:number
  title_announcement:string
  description_announcement:string
  specialty:string
  experience:string
  salary:number
  type_money_salary:string
  date_announcement:string
  id_company:number
  postulants_in_announcement:any
  constructor(private route:ActivatedRoute,private router:Router,public dialog:MatDialog,
  private announcementsservices:AnnouncementServices, private applicationservices:ApplicationServices) {
    this.data_announcement={} as Announcement
    this.id_announcement=0
    this.title_announcement=""
    this.description_announcement=""
    this.specialty=""
    this.experience=""
    this.salary=0
    this.type_money_salary=""
    this.date_announcement=""
    this.id_company=0
    this.postulants_in_announcement=[]
  }
  get_announcement(){
    this.announcementsservices.get_announcement_by_id(this.id_announcement).subscribe(response=>{
      let data:any
      data=response
      this.data_announcement=data
      this.title_announcement=this.data_announcement.title
      this.description_announcement=this.data_announcement.description
      this.specialty=this.data_announcement.required_specialty
      this.experience=this.data_announcement.required_experience
      this.salary=this.data_announcement.salary
      this.type_money_salary=this.data_announcement.type_money
      this.date_announcement=this.data_announcement.date
      this.id_company=this.data_announcement.id_company
    })
  }
  
  visit_profile(id:number){
    this.router.navigate(['/MenuCompany/Visit-ProfilePostulant',id])
  }
  Open_dialog_write_feedback(id:number){
    const dialogRef=this.dialog.open(WriteFeedbackComponent,{data:{id_postulant:id,data_announcement:this.data_announcement}})

  }
  ngOnInit(): void {
    this.id_announcement=this.route.snapshot.params["id"]
    this.get_announcement()
    this.get_postulans()
  }

}
