import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {
  formFirstName: string;//form value of firstName input
  formLastName: string;//form value of lastName input
  formPhoneNumber: string;//form value of phoneNumber input
  formEmailAddress: string;//form value of emailAddress input
  constructor(private router: Router, public db: AngularFireDatabase) { }
  //called when we want to save changes
  saveChanges() {
    var newContact = {
      firstName: this.formFirstName ? this.formFirstName : '',
      lastName: this.formLastName ? this.formLastName : '',
      phone: this.formPhoneNumber ? this.formPhoneNumber : '',
      email: this.formEmailAddress ? this.formEmailAddress : ''
    }
    //
    const itemsRef = this.db.list('all-contacts');
    //create new contact object in database
    itemsRef.push(newContact).then((item) => { 
      //then add 'id' field to newly created contact object
      itemsRef.update(item.key, { id: item.key }).then(_ => {
        //then move to list of all contacts
        this.router.navigate(['/contacts-list']);
      });
    });
    
  }
  //cancel changes
  cancelChanges() {
    this.router.navigate(['/contacts-list']);
  }

  ngOnInit() {


       
  }

}
