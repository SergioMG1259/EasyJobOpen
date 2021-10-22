import { Component, OnInit } from '@angular/core';
import {NotificationServices} from "../../Services/Notification-services";
import {ActivatedRoute, Params} from "@angular/router";
import {ViewFeedbackComponent} from "../../Notifications/view-feedback/view-feedback.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-notification-postulant',
  templateUrl: './notification-postulant.component.html',
  styleUrls: ['./notification-postulant.component.css']
})
export class NotificationPostulantComponent implements OnInit {
  notifications_postulant:any
  id_postulant_notification:number
  constructor(public dialog:MatDialog,private route:ActivatedRoute,private notificationservices:NotificationServices) {
    this.notifications_postulant=[]
    this.id_postulant_notification=0
  }
  get_notifications_by_postulant(){
    this.notificationservices.get_by_postulants(this.id_postulant_notification).subscribe(response=>{
      this.notifications_postulant=response
    })
  }
  Open_dialog_view_feedback(feedback:string){
    const dialogRef=this.dialog.open(ViewFeedbackComponent,{data:feedback})
  }

  ngOnInit(): void {
    this.id_postulant_notification=this.route.snapshot.params["id"]
    this.get_notifications_by_postulant()
  }

}
