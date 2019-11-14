import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

	constructor(public firebase: AngularFireDatabase) { }
	
    contactsList: AngularFireList<any>;

    // defines form for contact book entries
	form = new FormGroup({
      	$key: new FormControl(null),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
     	phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
     	email: new FormControl('', Validators.email),
     	type: new FormControl('', Validators.required),
        archive: new FormControl(null)
    });

    // retrieves database entries/changes
    getContacts(){
        this.contactsList = this.firebase.list('contacts');
        return this.contactsList.snapshotChanges();
    }

    // adds a new entry to the database
    insertContact(contact){
        this.contactsList.push({
            firstName: contact.firstName,
            lastName: contact.lastName,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            type: contact.type,
            archive: false
        });
    }

    // fills out the form fields with data from a database entry
    populateForm(contact){
    	this.form.setValue(contact);
  	}

    // updates an existing database entry
  	updateCustomer(contact){
    	this.contactsList.update(contact.$key,{
       	  	firstName: contact.firstName,
       		lastName: contact.lastName,
       		phoneNumber: contact.phoneNumber,
        	email: contact.email,
        	type: contact.type
    	});
  	}

    // removes a datase entry
  	deleteContact($key: string){
      	this.contactsList.remove($key);
  	}

    // marks a database record as archived
    archiveContact(contact){
        this.contactsList.update(contact.$key,{
            archive: true
        })
    }

    // marks a database record as not archived
    restoreContact(contact){
        this.contactsList.update(contact.$key,{
            archive: false
        })
    }
}
