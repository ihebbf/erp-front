import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {EventComponent} from './components/event/event.component';
import {ClubComponent} from './components/club/club.component';
import {MeetingComponent} from './components/meeting/meeting.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [  {path: 'home', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'club', component: ClubComponent},
  {path: 'meeting', component: MeetingComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
