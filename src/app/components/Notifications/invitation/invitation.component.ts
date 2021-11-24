import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Notification} from "../model/notification";
import {ApplicationServices} from "../../Services/Application-services";
import {NotificationServices} from "../../Services/Notification-services";
import {Announcement} from "../../Announcement/model/announcement";
import {AnnouncementServices} from "../../Services/Announcement-services";
import {MatDialogRef} from "@angular/material/dialog";

export interface Data{
  id_postulant:number
  id_company:number
}
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  id_postulant:number
  id_company:number
  announcements:any
  constructor(@Inject(MAT_DIALOG_DATA)public data:Data,
              private notificationservices:NotificationServices,private announcementservices:AnnouncementServices) {
    this.id_postulant=data.id_postulant
    this.id_company=data.id_company
    this.announcements=[]
    console.log(data.id_company)
  }
  get_announcements(){
    this.announcementservices.get_announcement_by_company(this.id_company).subscribe(response=>{
      this.announcements=response.content
    })
  }
  send_invitation(idann:number,title:string){

      let data={
        titleAnnouncement:title,
        type:"invitation",
        feedback:"invitado a postular"
      }
      this.notificationservices.add_notification(this.id_company,idann,this.id_postulant,data).subscribe(response=>{
        console.log(response)
      })

  }

  ngOnInit(): void {
    this.get_announcements()
  }

}
