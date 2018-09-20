import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllContactsListComponent } from './all-contacts-list/all-contacts-list.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'contacts-list', component: AllContactsListComponent},
  { path: 'add-new-contact', component: AddNewContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }