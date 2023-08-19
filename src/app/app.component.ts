import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'InventoryUI';
 
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      ProductName: ['', Validators.required],
      IntroductionDate: ['', Validators.required],
      Url: ['', Validators.pattern('https?://.+')]
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
     console.log(this.LoginForm.value);
    }
  }

  OnInit(): void {
    throw new Error('Method not implemented.');

}

}