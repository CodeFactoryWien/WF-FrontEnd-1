import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../shared/contacts.service";

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
	contactsArray =[];
	showDeletedMessage : boolean;
    searchText:string = "";

    constructor(public contactsService: ContactsService) { }

    // keeps the list updated
	ngOnInit() {
		this.contactsService.getContacts().subscribe(
            (list) => {
                this.contactsArray = list.map( (item) => {
                    return {
                        $key : item.key,
                        ...item.payload.val()
                    }
                })
            }
        );
  	}

    // deletes existing database records after user confirmation
   	onDelete($key){
    	if(confirm("Are you sure you want to delete this record?")){
          	this.contactsService.deleteContact($key);
       	    this.showDeletedMessage = true;
       	    setTimeout(()=> this.showDeletedMessage=false , 3000);
     	}
   	}

    // search function for name (both first and last name) and type
    filterCondition(contact){
        return (contact.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) 
             && contact.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) 
             && contact.type.toLowerCase().indexOf(this.searchText.toLowerCase())) != -1 ;
    }
}
