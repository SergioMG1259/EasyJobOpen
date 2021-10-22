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
  get_postulans(){
    let list_applications_in_announcements:any
    this.applicationservices.get_applications_by_announcement(this.id_announcement).subscribe(response=>{
      list_applications_in_announcements=response
      for(let i=0;i<list_applications_in_announcements.length;i++){
        this.applicationservices.get_postulants_in_announcement(list_applications_in_announcements[i].id_postulant).subscribe(response=>{
          let data=response
          this.postulants_in_announcement.push(data)
        })
      }
    })
  }
  Open_dialog_edit_announcement(){
    const dialogRef=this.dialog.open(EditAnnouncementComponent,{data:this.data_announcement})
  }
  goToItems(){
    this.router.navigate(['/MenuCompany/Initiation/Company',this.id_company])
  }
  delete_all_postulant(){
    let postulants_to_delete:any
    this.applicationservices.get_applications_by_announcement(this.id_announcement).subscribe(response=>{
      postulants_to_delete=response
      for(let i=0;i<postulants_to_delete.length;i++){
        this.applicationservices.deleteApplication(postulants_to_delete[i].id).subscribe(response=>{
        })
      }
    })
  }
  delete_announcement(){
    this.goToItems()
    this.delete_all_postulant()
    this.announcementsservices.DeleteAnnouncement(this.id_announcement).subscribe(response=>{
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
