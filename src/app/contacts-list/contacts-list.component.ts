import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../shared/contacts.service";

@Component({
	selector: 'app-contacts-list',
  	templateUrl: './contacts-list.component.html',
  	styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
	contactsArray =[];
	showDeletedMessage : boolean;

	constructor(private contactsService: ContactsService) { }

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

   	onDelete($key){
    	if(confirm("Are you sure you want to delete this record?")){
        	this.contactsService.deleteContact($key);
       		this.showDeletedMessage = true;
       		setTimeout(()=> this.showDeletedMessage=false , 3000)
     	}
   	}

   	deleteContact($key: string){
    	this.contactsList.remove($key);
  	}
}
