import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketData } from '../models/ticketData';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private router: Router,
    private httpClient: HttpClient) {}

  // Creates the form from the input values in ticket-form
  // at the moment only console logs input parameters, runs 
  // meadges/create and then console logs the return data. 
  postForm(form, fileToUpload : File) {
    console.log("Form Service form values : ");
    console.log(form);
    console.log("Form Service file : ");
    console.log(fileToUpload);

    const createUrl = 'http://localhost:8080/meadges/create/'
    
    this.httpClient.post(createUrl, form)
      .subscribe((data : TicketData) => {
        const receiptCreateUrl = ('http://localhost:8080/meadges/Receipt/' + data.reimb_id);
        
        console.log(receiptCreateUrl);
        console.log(fileToUpload)
        this.httpClient.post(receiptCreateUrl, fileToUpload)
          .subscribe((data) => console.log(data));
    });
  }
}
