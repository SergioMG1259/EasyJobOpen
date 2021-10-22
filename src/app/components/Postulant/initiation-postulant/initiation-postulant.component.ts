import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AnnouncementServices} from "../../Services/Announcement-services";
import {Announcement} from "../../Announcement/model/announcement";

@Component({
  selector: 'app-initiation-postulant',
  templateUrl: './initiation-postulant.component.html',
  styleUrls: ['./initiation-postulant.component.css']
})
export class InitiationPostulantComponent implements OnInit {
  announcements:Announcement[]
  search:string
  id_postulant:number
  constructor(private route:ActivatedRoute,private router:Router,public dialog:MatDialog,
              private announcementservices:AnnouncementServices) {
    this.announcements=[]
    this.search=""
    this.id_postulant=0
  }
  get_announcements(){
    this.announcementservices.get_announcements_not_practicing().subscribe(response=>{
      this.announcements=response
    })
  }
  view_announcement(id:number) {
    this.router.navigate(['/MenuPostulant/Postulant',this.id_postulant,'View-Announcement',id])
  }
  Search(){
    if(this.search!=""){
      this.announcements=this.announcements.filter(response=>{
        return response.required_specialty.toLocaleLowerCase().match(this.search.toLocaleLowerCase())||response.required_experience.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      })
    }else if(this.search==""){
      this.get_announcements()
    }
  }
  ngOnInit(): void {
    this.id_postulant=this.route.snapshot.params["id"]
    this.get_announcements()
  }

}
