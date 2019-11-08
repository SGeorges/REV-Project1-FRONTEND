import { Component, OnInit, HostListener } from '@angular/core';

//import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrentUser } from '../../user';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  fileToUpload: File = null;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.contactForm = fb.group({
      'contactFormAmount': ['', Validators.required],
      'contactFormType': ['', Validators.required],
      'contactFormDescription': ['', Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit() {
    const formValues = {
      userID: CurrentUser.ers_users_id,
      password: CurrentUser.ers_password,
      amount: this.contactForm.controls['contactFormAmount'].value,
      type: this.contactForm.controls['contactFormType'].value,
      description: this.contactForm.controls['contactFormDescription'].value
    }

    this.formService.postForm(formValues, this.fileToUpload);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

}
/* 
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    }); */