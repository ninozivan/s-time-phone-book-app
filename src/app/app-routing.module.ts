import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsListComponent } from './all-contacts-list/all-contacts-list.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

const routes: Routes = [
  { path: 'contacts-list', component: AllContactsListComponent},
  { path: 'add-new-contact', component: AddNewContactComponent},
  { path: '**', redirectTo: 'contacts-list', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }