import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsIdComponent } from './user-details-id/user-details-id.component';

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: 'user/add', component: UserFormComponent },
  { path: 'user/:id', component: UserDetailsIdComponent },
  { path: 'user/edit/:id', component: UserEditComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }


