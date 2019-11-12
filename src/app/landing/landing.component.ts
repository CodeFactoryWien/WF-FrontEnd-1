import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../shared/contacts.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	contactsArray =[];
	showDeletedMessage : boolean;
    searchText:string = "";

  constructor(private contactsService: ContactsService) { }

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
  	// search function for name (both first and last name) and type
    filterCondition(contact){
        return (contact.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) 
                && contact.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) 
                && contact.type.toLowerCase().indexOf(this.searchText.toLowerCase())) != -1 ;
    }

}
