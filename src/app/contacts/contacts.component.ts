import { Component, OnInit } from '@angular/core';
import { ContactsService  } from "../shared/contacts.service";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  	constructor(private contactsService: ContactsService) { }

  	submitted: boolean;
  	formControls = this.contactsService.form.controls;
	  showSuccessMessage: boolean;

	ngOnInit() {
  	}

	onSubmit(){
	    this.submitted = true;
		  if(this.contactsService.form.valid){
			    if(this.contactsService.form.get("$key").value == null ){
              this.contactsService.insertContact(this.contactsService.form.value);
              this.showSuccessMessage =true;
              setTimeout(()=> this.showSuccessMessage=false,3000);
       		  	this.submitted = false;
       			  this.contactsService.form.reset();
        	} else {
             	this.contactsService.updateCustomer(this.contactsService.form.value);
      			  this.showSuccessMessage = true;
     			    setTimeout(()=> this.showSuccessMessage=false ,3000);
     			    this.submitted = false;
      			  this.contactsService.form.reset();
        	}
		  }
 	}

}
