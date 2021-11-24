import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SpecialtyService} from "../../Services/SpecialtyExperience-service";
export interface DataSpecialty{
  spec:string
  exp:string
  id:number
}
@Component({
  selector: 'app-edit-specialty',
  templateUrl: './edit-specialty.component.html',
  styleUrls: ['./edit-specialty.component.css']
})
export class EditSpecialtyComponent implements OnInit {
  specialties:any
  experiences:any
  experiences_selected:string
  specialty_selected:string
  id_edit:number
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:DataSpecialty,
              public dialog:MatDialog, private specialtyexperience:SpecialtyService) {
    this.specialties=['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design']
    this.experiences=['Practicante','Junior','Semi-Senior','Senior']
    this.experiences_selected=data.exp
    this.specialty_selected=data.spec
    this.id_edit=data.id
  }
  edit_specialty(){
    const dataEdit={
      specialty:this.specialty_selected,
      experience:this.experiences_selected
    }
    this.specialtyexperience.EditSpecialty(this.id_edit,dataEdit).subscribe(response=>{})
  }
  delete_specialty(){
    this.specialtyexperience.DeleteSpecialty(this.id_edit).subscribe(response=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
