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
  public mobileValidator(contol: FormControl): any {
    const mobieReg =  /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const result = mobieReg.test(contol.value);
    return result ? null : { mobile: { info: '请输入正确的手机号'}};
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, this.mobileValidator]],
      content: []
    });
  }

  public submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
  }

}
