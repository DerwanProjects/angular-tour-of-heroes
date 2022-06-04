import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [
        Validators.minLength(5)
      ]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }


  get username() { return this.signupForm.get('username'); }


  onSubmit() {
    console.log(this.signupForm);
  }

}
