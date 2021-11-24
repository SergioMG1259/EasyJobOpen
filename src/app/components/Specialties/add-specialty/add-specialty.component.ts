import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SpecialtyService} from "../../Services/SpecialtyExperience-service";
import {Specialty} from "../model/specialty";
export interface Data{
  id_postulant:number
  data_specialty:any
}
@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent implements OnInit {
  specialties:any
  experiences:any
  experiences_selected:string
  specialty_selected:string
  specialty_aux:any
  postulant_id:number
  id_add:number
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:Data,
              public dialog:MatDialog, private specialtyexperience:SpecialtyService) {
    this.specialties=['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design']
    this.experiences=['Practicante','Junior','Semi-Senior','Senior']
    this.experiences_selected=""
    this.specialty_selected=""
    this.specialty_aux=data.data_specialty
    this.postulant_id=data.id_postulant
    this.id_add=1
  }
  view_specialty_and_experience(){

    for(let i=0;i<this.specialty_aux.length;i++){
      for(let j=0;j<this.specialties.length;j++){
        if(this.specialty_aux[i].specialty==this.specialties[j]){
          this.specialties.splice(j,1)
          j--
        }
      }
    }
  }
  add_specialty(){
    /*let arrayspecialty=[]
    this.specialtyexperience.getAll().subscribe(response=>{
      arrayspecialty=response
      if(arrayspecialty.length>0){
        this.id_add=arrayspecialty[arrayspecialty.length-1].id+1
      }
      console.log(this.id_add)*/
      const data={
        //id:this.id_add,
        specialty:this.specialty_selected,
        experience:this.experiences_selected,

      }
      //console.log(this.id_add)
      this.specialtyexperience.AddSpecialty(this.postulant_id,data).subscribe(response=>{
        console.log(response)
      })
   // })
  }


  ngOnInit(): void {
    this.view_specialty_and_experience()

  }

}
