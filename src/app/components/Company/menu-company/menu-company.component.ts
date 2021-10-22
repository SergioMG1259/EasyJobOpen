import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-company',
  templateUrl: './menu-company.component.html',
  styleUrls: ['./menu-company.component.css']
})
export class MenuCompanyComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
