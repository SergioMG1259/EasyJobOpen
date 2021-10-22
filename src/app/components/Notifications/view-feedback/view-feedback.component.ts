import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  feedback:string
  constructor(@Optional() @Inject(MAT_DIALOG_DATA)public data:string) {
    this.feedback=data
  }

  ngOnInit(): void {
  }

}
