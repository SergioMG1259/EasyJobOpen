import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";
import {Postulant} from "../../Postulant/model/postulant";
import {PostulantServices} from "../../Services/Postulant-services";

@Component({
  selector: 'app-search-postulants-company',
  templateUrl: './search-postulants-company.component.html',
  styleUrls: ['./search-postulants-company.component.css']
})
export class SearchPostulantsCompanyComponent implements OnInit {
  all_postulants:Postulant[]
  id_company:number
  search:string
  constructor(private route:ActivatedRoute,private router:Router,private postulanservices:PostulantServices) {
    this.all_postulants=[]
    this.id_company=0
    this.search=""
  }
  get_postulants(){
    this.postulanservices.getAll().subscribe(response=>{
      this.all_postulants=response
    })
  }
  visit_profile(id:number) {
    this.router.navigate(['/MenuCompany/Company',this.id_company,'Visit-Profile-Postulant',id])
  }
  Search(){
    if(this.search!=""){
      this.all_postulants=this.all_postulants.filter(response=>{
        return response.myspecialty.toLocaleLowerCase().match(this.search.toLocaleLowerCase())||response.myexperience.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      })
    }else if(this.search==""){
      this.get_postulants()
    }
  }
  ngOnInit(): void {
    this.id_company=this.route.snapshot.params["id"]
    this.get_postulants()
  }

}
