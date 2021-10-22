import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddAnnouncementComponent} from "../../Announcement/add-announcement/add-announcement.component";
import {AnnouncementServices} from "../../Services/Announcement-services";
import {Announcement} from "../../Announcement/model/announcement";

@Component({
  selector: 'app-initiation-company',
  templateUrl: './initiation-company.component.html',
  styleUrls: ['./initiation-company.component.css']
})
export class InitiationCompanyComponent implements OnInit {
  id_company:number
  announcements:any
  constructor(private route:ActivatedRoute,private router:Router,public dialog:MatDialog,
              private announcementsservices:AnnouncementServices) {
    this.id_company=0
    this.announcements=[]
  }
  Open_dialog_add(){
    const dialogRef=this.dialog.open(AddAnnouncementComponent,{data:this.id_company})
  }
  get_announcements(){
    this.announcementsservices.get_announcement_by_company(this.id_company).subscribe(response=>{
      this.announcements=response
    })
  }
  view_announcement(idannouncement:number){
    this.router.navigate(['/MenuCompany/Announcement',idannouncement])
  }
  ngOnInit(): void {
    this.id_company=this.route.snapshot.params["id"]
    this.get_announcements()
  }

}
