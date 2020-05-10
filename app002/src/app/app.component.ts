import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app002';

  constructor(private fb: FormBuilder) {}

  dlForm = this.fb.group({
    userName: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]]
  });
  onFormSubmit() {
    console.warn(this.dlForm.value);
  }
}
