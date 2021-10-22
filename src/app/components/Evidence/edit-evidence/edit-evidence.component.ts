import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Evidence} from "../model/evidence";
import {EvidenceServices} from "../../Services/Evidence-services";
@Component({
  selector: 'app-edit-evidence',
  templateUrl: './edit-evidence.component.html',
  styleUrls: ['./edit-evidence.component.css']
})
export class EditEvidenceComponent implements OnInit {
  id_evidence:number
  title_edit:string
  img_edit:string
  description_edit:string
  id_project_edit:number
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:Evidence,private evidenceservices:EvidenceServices) {
    this.id_evidence=data.id
    this.title_edit=data.title_evidence
    this.img_edit=data.img_evidence
    this.description_edit=data.description_evidence
    this.id_project_edit=data.id_project
  }
  edit_evidence(){
    const data={
      title_evidence:this.title_edit,
      description_evidence:this.description_edit,
      img_evidence:this.img_edit
    }
    this.evidenceservices.edit_evidence(this.id_evidence,data).subscribe(response=>{})
  }

  ngOnInit(): void {
  }

}
