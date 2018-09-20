import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {
  @ViewChild('f') newContactForm: NgForm;
  //Form model for storing user inputs {firstName, lastName, phone, email}
  formModel: any = {};
  constructor(private router: Router, public db: AngularFireDatabase) { }
  //called when we want to save changes
  saveChanges() {
    if (!this.newContactForm.valid){
      return
    }
    var newContact = {
      firstName: this.formModel.firstName ? this.formModel.firstName : '',
      lastName: this.formModel.lastName ? this.formModel.lastName : '',
      phone: this.formModel.phone ? this.formModel.phone : '',
      email: this.formModel.email ? this.formModel.email : ''
    }
    //create reference to Firebase database in order to add new contact item
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

  ngAfterViewInit(){ 
  }

}
