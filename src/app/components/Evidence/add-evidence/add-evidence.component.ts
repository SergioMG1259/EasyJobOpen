import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Evidence} from "../model/evidence";
import {EvidenceServices} from "../../Services/Evidence-services";

@Component({
  selector: 'app-add-evidence',
  templateUrl: './add-evidence.component.html',
  styleUrls: ['./add-evidence.component.css']
})
export class AddEvidenceComponent implements OnInit {
  title_add:string
  img_add:string
  description_add:string
  id_project:number
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:number,private evidenceservices:EvidenceServices) {
    this.title_add=""
    this.img_add=""
    this.description_add=""
    this.id_project=data
  }
  add(){
    const data={
      titleEvidence:this.title_add,
      descriptionEvidence:this.description_add,
      imgEvidence:this.img_add,
    }
    this.evidenceservices.add_evidence(this.id_project,data).subscribe(response=>{
      console.log(response)
    })
  }
  add_evidence(){
      this.add()
  }

  ngOnInit(): void {
  }

}
