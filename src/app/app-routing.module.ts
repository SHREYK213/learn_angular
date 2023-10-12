import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailsIdComponent } from './user/user-details-id/user-details-id.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: 'user/add', component: UserFormComponent },
  { path: 'user/:id', component: UserDetailsIdComponent },
  { path: 'user/edit/:id', component: UserEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
