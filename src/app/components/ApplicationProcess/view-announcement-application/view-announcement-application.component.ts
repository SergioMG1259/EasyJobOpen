import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {Announcement} from "../../Announcement/model/announcement";
import {AnnouncementServices} from "../../Services/Announcement-services";
import {ApplicationServices} from "../../Services/Application-services";
import {NotificationServices} from "../../Services/Notification-services";

@Component({
  selector: 'app-view-announcement-application',
  templateUrl: './view-announcement-application.component.html',
  styleUrls: ['./view-announcement-application.component.css']
})
export class ViewAnnouncementApplicationComponent implements OnInit {
  id_postulant:number
  id_announcement:number
  title_announcement:string
  description_announcement:string
  specialty:string
  experience:string
  salary:number
  type_money_salary:string
  date_announcement:string
  id_company:number

  id_application_add:number
  postulating:boolean
  action:string
  id_delete:number
  accepted_bool:boolean
  constructor(private route:ActivatedRoute,private router:Router,
  private announcementsservices:AnnouncementServices,private applicationservices:ApplicationServices,
             private notificationservices:NotificationServices) {
    this.id_postulant=0
    this.title_announcement=""
    this.id_announcement=0
    this.description_announcement=""
    this.specialty=""
    this.experience=""
    this.salary=0
    this.type_money_salary=""
    this.date_announcement=""
    this.id_company=0
    this.postulating=false
    this.action="Postular"
    this.id_application_add=1
    this.id_delete=0
    this.accepted_bool=false
  }
  get_announcement(){
    this.announcementsservices.get_announcement_by_id(this.id_announcement).subscribe(response=>{
      let data:any
      data=response
      this.title_announcement=data.title
      this.description_announcement=data.description
      this.specialty=data.requiredSpecialty
      this.experience=data.requiredExperience
      this.salary=data.salary
      this.type_money_salary=data.typeMoney
      this.date_announcement=data.date
      this.id_company=data.companyId
    })
  }
  add_notification(){
    const data={
      titleAnnouncement:this.title_announcement,
      type:"new-postulant",
      feedback:""
    }
    this.notificationservices.add_notification(this.id_company,this.id_announcement,this.id_postulant,data).subscribe(response=>{
      console.log(response)
    })
  }
  add_notification_to_company(){
    /*let id_add_notification=1
    let list_notifications:any
    this.notificationservices.getAll().subscribe(response=>{
      list_notifications=response
      if(list_notifications.length>0){
        id_add_notification=list_notifications[list_notifications.length-1].id+1
      }*/
      this.add_notification()
   // })
  }
  add(){
    const data={
      //id:this.id_application_add,
      //id_announcement:this.id_announcement,
     // id_postulant:this.id_postulant,
      status:"pending"
    }

      this.applicationservices.add_application(this.id_announcement,this.id_postulant,data).subscribe(response=>{
        console.log(response)
        this.id_delete=response.id
        console.log(this.id_delete)
      })
  }
  add_application(){
    /*let applications:any
    this.applicationservices.getAll().subscribe(response=>{
      applications=response
      if(applications.length>0){
        this.id_application_add=applications[applications.length-1].id+1
      }*/
      this.add()
    //})
  }
  delete_application(){
    this.applicationservices.deleteApplication(this.id_delete).subscribe(response=>{
      console.log(response)
    })
  }
  check_application(){
    let get_applications:any
    this.applicationservices.get_applications_by_announcement(this.id_announcement).subscribe(response=>{
      get_applications=response.content
      for(let i=0;i<get_applications.length;i++){
        if(get_applications[i].postulantId==this.id_postulant){
          if(get_applications[i].status=="accepted"){
            this.accepted_bool=true
          }
          this.id_delete=get_applications[i].id
          console.log(this.id_delete)
          return this.action="Cancel",this.postulating=true
        }
      }
      return this.action="Apply",this.postulating=false
    })
  }
  postulate(){
    if(this.postulating){
      this.action="Apply"
      this.postulating=false
      this.delete_application()
    }
    else{
      this.action="Cancel"
      this.postulating=true
      this.add_application()
      this.add_notification_to_company()
    }
  }

  ngOnInit(): void {
    this.id_announcement=this.route.snapshot.params["id"]
    this.id_postulant=this.route.snapshot.params["idpostulant"]
    this.get_announcement()
    this.check_application()
  }

}
