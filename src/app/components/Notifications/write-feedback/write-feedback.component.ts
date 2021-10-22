import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Notification} from "../model/notification";
import {ApplicationServices} from "../../Services/Application-services";
import {NotificationServices} from "../../Services/Notification-services";
import {Announcement} from "../../Announcement/model/announcement";
import {MatDialogRef} from "@angular/material/dialog";
export interface Data{
  id_postulant:number
  data_announcement:Announcement
}
@Component({
  selector: 'app-write-feedback',
  templateUrl: './write-feedback.component.html',
  styleUrls: ['./write-feedback.component.css']
})
export class WriteFeedbackComponent implements OnInit {
  feedback:string
  id_postulant:number
  id_company:number
  id_announcement:number
  title_announcement:string
  constructor(@Inject(MAT_DIALOG_DATA)public data:Data,
  private notificationservices:NotificationServices,private applicationservices:ApplicationServices) {
    this.feedback=""
    this.id_postulant=data.id_postulant
    this.id_company=data.data_announcement.id_company
    this.id_announcement=data.data_announcement.id
    this.title_announcement=data.data_announcement.title
  }
  delete_declinet_application(){
    let id_delete_application_declined=0
    let applications_announcement:any
    this.applicationservices.get_applications_by_announcement(this.id_announcement).subscribe(response=>{
      applications_announcement=response
      for(let i=0;i<applications_announcement.length;i++){
        if(applications_announcement[i].id_postulant==this.id_postulant){
          id_delete_application_declined=applications_announcement[i].id
        }
      }
      this.applicationservices.deleteApplication(id_delete_application_declined).subscribe(response=>{

      })
    })
  }
  add_feedback(){
    let notifications:any
    let id_add=1
    this.notificationservices.getAll().subscribe(response=>{
      notifications=response
      if(notifications.length>0){
        id_add=notifications[notifications.length-1].id+1
      }
      this.add(id_add)
      this.delete_declinet_application()
    })
  }
  add(id:number){
    const data={
      id:id,
      id_company:this.id_company,
      id_postulant:this.id_postulant,
      id_announcement:this.id_announcement,
      title_announcement:this.title_announcement,
      type:"declined",
      feedback:this.feedback
    }
    this.notificationservices.add_notification(data).subscribe(response=>{

    })
  }

  ngOnInit(): void {

  }

}
