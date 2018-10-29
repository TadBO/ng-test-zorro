import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-code-management',
  templateUrl: './code-management.component.html',
  styleUrls: ['./code-management.component.css'],
})
export class CodeManagementComponent implements OnInit {
  public validateForm: FormGroup;
  public tinymceConfig: object = {
    selector: 'textarea'
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      content: []
    });
  }

  public submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

}
