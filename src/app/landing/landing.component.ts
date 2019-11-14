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
}
