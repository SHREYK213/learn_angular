import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserFormComponent } from './user/user-form/user-form.component';
UserFormComponent;

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: 'user/add', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
