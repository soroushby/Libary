import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      date: [null, [Validators.required]],
      address: [null],
      country: [null],
      gender: [null],
    });
  }
}
