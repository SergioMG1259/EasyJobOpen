import { Component, OnInit } from '@angular/core';
import {NotificationServices} from "../../Services/Notification-services";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-notification-company',
  templateUrl: './notification-company.component.html',
  styleUrls: ['./notification-company.component.css']
})
export class NotificationCompanyComponent implements OnInit {
  notifications_company:any
  id_company_notification:number
  constructor(private route:ActivatedRoute,private notificationservices:NotificationServices) {
    this.notifications_company=[]
    this.id_company_notification=0
  }
  view_announcement(item:number){

  }
  get_notifications(){
    this.notificationservices.get_by_company(this.id_company_notification).subscribe(response=>{
      this.notifications_company=response
    })
  }

  ngOnInit(): void {
    this.id_company_notification=this.route.snapshot.params["id"]
    this.get_notifications()
  }

}
