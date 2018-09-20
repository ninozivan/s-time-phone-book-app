import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { ModalService } from '../services';

@Component({
  selector: 'app-all-contacts-list',
  templateUrl: './all-contacts-list.component.html',
  styleUrls: ['./all-contacts-list.component.css']
})
export class AllContactsListComponent implements OnInit {
  //id of modal that will be open when we want to view or update contact
  modal_contactDetails_id: string = "cid-contact-details-modal";
  //id of modal that will be open when we want to confirm contact deletion
  modal_deleteContact_id: string = "cid-contact-delete-modal";
  //Contact object that is selected from list when user wants to delete it
  selectedContactToDelete: any;
  //Contact object that is selected from list when user wants to view or edit it
  selectedContactToEdit: any;  
  //List of all contacts to who on view
  listOfAllContacts: Observable<any[]>;
  formFirstName: string;//form value of firstName input (cid-contact-details-modal)
  formLastName: string;//form value of lastName input (cid-contact-details-modal)
  formPhoneNumber: string;//form value of phoneNumber input (cid-contact-details-modal)
  formEmailAddress: string;//form value of emailAddress input (cid-contact-details-modal)

  constructor(public db: AngularFireDatabase, private router: Router, private modalService: ModalService) {
    //get all contacts from database
    this.listOfAllContacts = db.list('all-contacts').valueChanges();
  }
  //When single Contact is selected from list of all contacts
  openContactDetailsModal(inputSelectedContact) {
    if (inputSelectedContact && inputSelectedContact.id) {
      this.selectedContactToEdit = inputSelectedContact;
      this.formFirstName = inputSelectedContact.firstName ? inputSelectedContact.firstName : '';
      this.formLastName = inputSelectedContact.lastName ? inputSelectedContact.lastName : '';
      this.formPhoneNumber = inputSelectedContact.phone ? inputSelectedContact.phone : '';
      this.formEmailAddress = inputSelectedContact.email ? inputSelectedContact.email : '';
      //
      this.modalService.open(this.modal_contactDetails_id);
    }
  }
  //Contact Details Modal
  cancelContactChanges() {
    this.modalService.close(this.modal_contactDetails_id);
  }
  //Contact Details Modal
  saveContactChanges() {
    if (true){
      var updatedData = {
        firstName: this.formFirstName ? this.formFirstName : '',
        lastName: this.formLastName ? this.formLastName : '',
        phone: this.formPhoneNumber ? this.formPhoneNumber : '',
        email: this.formEmailAddress ? this.formEmailAddress : ''
      }
      //
      const itemsRef = this.db.list('all-contacts');
      //create new contact object in database
      itemsRef.update(this.selectedContactToEdit.id, updatedData).then((item) => { 
        //then close modal
        this.modalService.close(this.modal_contactDetails_id);
      });      
    }    
  }
  //Delete Contact from list of all contacts
  openContactDeleteModal(inputItemId){
    this.selectedContactToDelete = inputItemId;
    if (this.selectedContactToDelete && this.selectedContactToDelete.id) {
      this.modalService.open(this.modal_deleteContact_id);
    }
  }
  //Cancel Contact Remove Modal
  cancelContactDelete() {
    this.modalService.close(this.modal_deleteContact_id);
  }
  //Confirm Contact Remove Modal
  confirmContactDelete(){
    const promise = this.db.list('all-contacts').remove(this.selectedContactToDelete.id);
    promise.then(_ => {
      this.modalService.close(this.modal_deleteContact_id);
    }).catch(err => {
      this.modalService.close(this.modal_deleteContact_id);
    } );
  }
  //Open Add new Contact view
  openAddNewContact() {
    this.router.navigate(['/add-new-contact']);
  }

  ngOnInit() {
    //this.bodyText = 'This text can be updated in modal 1';
  }
}
