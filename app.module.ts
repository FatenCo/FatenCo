import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';

import { NavbarComponent } from 'src/navbar/navbar.component';
import { ConnexionComponent } from 'src/connexion/connexion.component';
import { NotificationComponent } from 'src/notification/notification.component';
import { BonPlanComponent } from 'src/bon-plan/bon-plan.component';
import { MaSelectionComponent } from 'src/ma-selection/ma-selection.component';
import { BannerComponent } from 'src/banner/banner.component';
import { HomeComponent } from 'src/home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    NotificationComponent,
    BonPlanComponent,
    MaSelectionComponent,
    BannerComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
