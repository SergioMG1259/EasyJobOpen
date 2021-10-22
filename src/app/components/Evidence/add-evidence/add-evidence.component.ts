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
  add(id_evidence:number){
    const data={
      id:id_evidence,
      title_evidence:this.title_add,
      description_evidence:this.description_add,
      img_evidence:this.img_add,
      id_project:this.id_project
    }
    this.evidenceservices.add_evidence(data).subscribe(response=>{
      console.log(response)
    })
  }
  add_evidence(){
    let all_evidences:any
    let id_evidence=1
    this.evidenceservices.getAll().subscribe(response=>{
      all_evidences=response
      if(all_evidences.length>0){
        id_evidence=all_evidences[all_evidences.length-1].id+1
      }
      this.add(id_evidence)
    })
  }

  ngOnInit(): void {
  }

}
