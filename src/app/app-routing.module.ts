import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {EventComponent} from './components/event/event.component';

const routes: Routes = [  {path: 'home', component: HomeComponent},
 {path: 'event', component: EventComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},


  {path: 'error', component: ErrorComponent},

  {path: '**', redirectTo: '/error', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
