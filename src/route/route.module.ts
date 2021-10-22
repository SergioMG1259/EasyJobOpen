import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule,Routes} from "@angular/router";
import {MenuPostulantComponent} from "../app/components/Postulant/menu-postulant/menu-postulant.component";
import {ProfilePostulantComponent} from "../app/components/Postulant/profile-postulant/profile-postulant.component";
import {ViewProjectComponent} from "../app/components/Project/view-project/view-project.component";
import {MenuCompanyComponent} from "../app/components/Company/menu-company/menu-company.component";
import {ProfileCompanyComponent} from "../app/components/Company/profile-company/profile-company.component";
import {InitiationCompanyComponent} from "../app/components/Company/initiation-company/initiation-company.component";
import {ViewAnnouncementComponent} from "../app/components/Announcement/view-announcement/view-announcement.component";
import {InitiationPostulantComponent} from "../app/components/Postulant/initiation-postulant/initiation-postulant.component";
import {ViewAnnouncementApplicationComponent} from "../app/components/ApplicationProcess/view-announcement-application/view-announcement-application.component";
import {VisitProfilePostulantComponent} from "../app/components/ApplicationProcess/visit-profile-postulant/visit-profile-postulant.component";
import {ViewProjectPostulantComponent} from "../app/components/ApplicationProcess/view-project-postulant/view-project-postulant.component";
import {NotificationCompanyComponent} from "../app/components/Company/notification-company/notification-company.component";
import {NotificationPostulantComponent} from "../app/components/Postulant/notification-postulant/notification-postulant.component";
import {PracticantsPostulantComponent} from "../app/components/Postulant/practicants-postulant/practicants-postulant.component";
import {SearchPostulantsCompanyComponent} from "../app/components/Company/search-postulants-company/search-postulants-company.component";

const routes: Routes=[
  //{path: 'MenuPostulant', component: MenuPostulantComponent},
  {
    path:'MenuPostulant',component:MenuPostulantComponent, children:[
      {
        path:'ProfilePostulant/:id',component:ProfilePostulantComponent
      },{
       path:'Project/:id',component:ViewProjectComponent
      },{
       path:'Initiation/Postulant/:id',component:InitiationPostulantComponent
      },{
       path:'Postulant/:idpostulant/View-Announcement/:id',component: ViewAnnouncementApplicationComponent
      },{
       path: 'NotificationsPostulant/:id',component: NotificationPostulantComponent
      },{
       path: 'Practicing_search/Postulant/:id',component: PracticantsPostulantComponent
      }
    ]
  },
  {
    path:'MenuCompany',component:MenuCompanyComponent,children:[
      {
        path: 'ProfileCompany/:id',component: ProfileCompanyComponent
      },{
        path:'Initiation/Company/:id',component: InitiationCompanyComponent
      },{
        path: 'Announcement/:id',component: ViewAnnouncementComponent
      },{
        path:'Visit-ProfilePostulant/:id',component: VisitProfilePostulantComponent
      },{
        path:'Visit-Project/:id',component: ViewProjectPostulantComponent
      },{
        path: 'NotificationsCompany/:id',component: NotificationCompanyComponent
      },{
        path: 'Search-Postulants/Company/:id',component: SearchPostulantsCompanyComponent
      },{
        path:'Company/:idcompany/Visit-Profile-Postulant/:id',component: VisitProfilePostulantComponent
      }
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
