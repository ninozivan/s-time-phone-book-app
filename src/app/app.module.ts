import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Angular Material UI
import { AppMaterialModule } from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Application Components
import { AppComponent } from './app.component';
import { AllContactsListComponent } from './all-contacts-list/all-contacts-list.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { LoginComponent } from './login/login.component';
import { SingleContactDetailsComponent } from './single-contact-details/single-contact-details.component';
//Router
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsListComponent,
    AddNewContactComponent,
    LoginComponent,
    SingleContactDetailsComponent
  ],
  imports: [
    //Router
    AppRoutingModule,    
    BrowserModule,
    //Angular Material UI
    BrowserAnimationsModule,
    AppMaterialModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
