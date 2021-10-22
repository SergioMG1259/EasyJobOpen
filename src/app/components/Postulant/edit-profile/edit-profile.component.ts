import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Postulant} from "../model/postulant";
import {PostulantServices} from "../../Services/Postulant-services";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id_postulant:number
  name_edit:string
  lastname_edit:string
  img_edit:string
  description_edit:string
  specialties:any
  experiences:any
  experiences_selected:string
  specialty_selected:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Postulant,private editProfile:PostulantServices) {
    this.id_postulant=data.id
    this.name_edit=data.name
    this.lastname_edit=data.lastname
    this.img_edit=data.img_postulant
    this.description_edit=data.description

    this.specialties=['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design']
    this.experiences=['Practicante','Junior','Semi-Senior','Senior']
    this.experiences_selected=data.myexperience
    this.specialty_selected=data.myspecialty
  }
  edit_profile(){
    const data={
      name: this.name_edit,
      lastname: this.lastname_edit,
      myspecialty: this.specialty_selected,
      myexperience: this.experiences_selected,
      description: this.description_edit,
      img_postulant:this.img_edit
    }
    this.editProfile.editProfile(this.id_postulant,data).subscribe(response=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
