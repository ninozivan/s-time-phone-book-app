import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Forms
import { FormsModule } from '@angular/forms';
//Application Components
import { AppComponent } from './app.component';
import { AllContactsListComponent } from './all-contacts-list/all-contacts-list.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { LoginComponent } from './login/login.component';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';
//Modals
import { ModalComponent } from './directives';
import { ModalService } from './services';
//Router
import { AppRoutingModule } from './/app-routing.module';
//FontAwesome icons
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsListComponent,
    AddNewContactComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    //Router
    AppRoutingModule,    
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFontAwesomeModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
