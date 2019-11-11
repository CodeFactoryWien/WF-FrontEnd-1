import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../shared/contacts.service";

@Component({
	selector: 'app-contacts-list',
  	templateUrl: './contacts-list.component.html',
  	styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

	constructor(private contactsService: ContactsService) { }

	ngOnInit() {
		this.contactsService.getContacts();
  	}

}
