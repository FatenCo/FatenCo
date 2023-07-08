import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from 'src/connexion/connexion.component';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationComponent } from 'src/notification/notification.component';
import { BonPlanComponent } from 'src/bon-plan/bon-plan.component';
import { MaSelectionComponent } from 'src/ma-selection/ma-selection.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'bonPlan', component: BonPlanComponent},
  {path: 'maSelection', component: MaSelectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
