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
    this.title_edit=data.titleEvidence
    this.img_edit=data.imgEvidence
    this.description_edit=data.descriptionEvidence
    this.id_project_edit=data.projectId
  }
  edit_evidence(){
    const data={
      titleEvidence:this.title_edit,
      descriptionEvidence:this.description_edit,
      imgEvidence:this.img_edit
    }
    this.evidenceservices.edit_evidence(this.id_evidence,data).subscribe(response=>{})
  }

  ngOnInit(): void {
  }

}
