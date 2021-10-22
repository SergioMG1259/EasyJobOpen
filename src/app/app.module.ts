import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoMaterialModule} from "./material-module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../route/route.module";
import { MenuPostulantComponent } from './components/Postulant/menu-postulant/menu-postulant.component';
import { ProfilePostulantComponent } from './components/Postulant/profile-postulant/profile-postulant.component';
import { EditProfileComponent } from './components/Postulant/edit-profile/edit-profile.component';
import {FormsModule} from "@angular/forms";
import { AddProjectComponent } from './components/Project/add-project/add-project.component';
import { ViewProjectComponent } from './components/Project/view-project/view-project.component';
import { EditProjectComponent } from './components/Project/edit-project/edit-project.component';
import { MenuCompanyComponent } from './components/Company/menu-company/menu-company.component';
import { ProfileCompanyComponent } from './components/Company/profile-company/profile-company.component';
import { EditProfileCompanyComponent } from './components/Company/edit-profile-company/edit-profile-company.component';
import { InitiationCompanyComponent } from './components/Company/initiation-company/initiation-company.component';
import { AddAnnouncementComponent } from './components/Announcement/add-announcement/add-announcement.component';
import { ViewAnnouncementComponent } from './components/Announcement/view-announcement/view-announcement.component';
import { EditAnnouncementComponent } from './components/Announcement/edit-announcement/edit-announcement.component';
import { InitiationPostulantComponent } from './components/Postulant/initiation-postulant/initiation-postulant.component';
import { ViewAnnouncementApplicationComponent } from './components/ApplicationProcess/view-announcement-application/view-announcement-application.component';
import { VisitProfilePostulantComponent } from './components/ApplicationProcess/visit-profile-postulant/visit-profile-postulant.component';
import { ViewProjectPostulantComponent } from './components/ApplicationProcess/view-project-postulant/view-project-postulant.component';
import { WriteFeedbackComponent } from './components/Notifications/write-feedback/write-feedback.component';
import { NotificationCompanyComponent } from './components/Company/notification-company/notification-company.component';
import { NotificationPostulantComponent } from './components/Postulant/notification-postulant/notification-postulant.component';
import { ViewFeedbackComponent } from './components/Notifications/view-feedback/view-feedback.component';
import { AddEvidenceComponent } from './components/Evidence/add-evidence/add-evidence.component';
import { EditEvidenceComponent } from './components/Evidence/edit-evidence/edit-evidence.component';
import { PracticantsPostulantComponent } from './components/Postulant/practicants-postulant/practicants-postulant.component';
import { SearchPostulantsCompanyComponent } from './components/Company/search-postulants-company/search-postulants-company.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPostulantComponent,
    ProfilePostulantComponent,
    EditProfileComponent,
    AddProjectComponent,
    ViewProjectComponent,
    EditProjectComponent,
    MenuCompanyComponent,
    ProfileCompanyComponent,
    EditProfileCompanyComponent,
    InitiationCompanyComponent,
    AddAnnouncementComponent,
    ViewAnnouncementComponent,
    EditAnnouncementComponent,
    InitiationPostulantComponent,
    ViewAnnouncementApplicationComponent,
    VisitProfilePostulantComponent,
    ViewProjectPostulantComponent,
    WriteFeedbackComponent,
    NotificationCompanyComponent,
    NotificationPostulantComponent,
    ViewFeedbackComponent,
    AddEvidenceComponent,
    EditEvidenceComponent,
    PracticantsPostulantComponent,
    SearchPostulantsCompanyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
