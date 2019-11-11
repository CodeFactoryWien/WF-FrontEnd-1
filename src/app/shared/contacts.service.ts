import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

	  constructor(private firebase: AngularFireDatabase) { }
	  contactsList: AngularFireList<any>;

	  form = new FormGroup({
      	$key: new FormControl(null),
     	  firstName: new FormControl('', Validators.required),
     	  lastName: new FormControl('', Validators.required),
     	  phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
     	  email: new FormControl('', Validators.email),
     	  type: new FormControl('', Validators.required)
    });

    getContacts(){
        this.contactsList = this.firebase.list('contacts');
        return this.contactsList.snapshotChanges();
    }

    insertContact(contact){
        this.contactsList.push({
            firstName: contact.firstName,
            lastName:  contact.lastName,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            type: contact.type
        });
    }

    populateForm(contact){
    	  this.form.setValue(contact);
  	}

  	updateCustomer(contact){
    	  this.contactsList.update(contact.$key,{
       	  	firstName: contact.firstName,
       		  lastName: contact.lastName,
       		  phoneNumber: contact.phoneNumber,
        	  email: contact.email,
        	  type: contact.type
    	  });
  	}

  	deleteContact($key: string){
      	this.contactsList.remove($key);
  	}

}
