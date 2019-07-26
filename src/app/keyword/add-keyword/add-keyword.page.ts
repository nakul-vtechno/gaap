import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.page.html',
  styleUrls: ['./add-keyword.page.scss'],
})
export class AddKeywordPage implements OnInit, OnChanges {

  stepper: any = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
  };

  step: any = {
    stepOne: 'stepOne',
    stepTwo: 'stepTwo',
    stepThree: 'stepThree',
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: KeywordService) { }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe((data) => {
      if (data.description) {
        this.form.controls.file.clearValidators();
      } else {
        this.form.controls.file.setValidators(Validators.required);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
  }

  createForm() {
    this.form = this.fb.group(({
      keyword: [null, [Validators.required, Validators.minLength(3)]],
      description : [null, []],
      privacy : [null],
      file: [null, [Validators.required]]
    }));
  }

  segmentChanged(event: any) {
    const selectItem = event.detail.value;
    this.swipt(selectItem);
  }

  next(item) {
    this.swipt(item);
  }

  swipt(item: any) {
    const selectItem = item;
    this.reset();
    if (selectItem === this.step.stepOne) {
      this.stepper.stepOne = true;
    } else if (selectItem === this.step.stepTwo) {
      this.stepper.stepTwo = true;
    } else if (selectItem === this.step.stepThree) {
      this.stepper.stepThree = true;
    }
  }

  save() {
    console.log(this.form.value);
    const options = {
      command: 'addkeyword',
      addkey: this.form.value.keyword,
      addtitle: this.form.value.description,
      addprivacy: this.form.value.privacy ? 'PUBLIC' : 'PRIVATE',
      usermail: 'nakul27@gmail.com',
      usermobile: '9999999999'
    };
    this.api.addKeyword(options)
    .subscribe((resData) => {
      console.log('RespData : ', resData);
      this.router.navigateByUrl('menu/keyword');

    });
  }

  reset() {
    this.stepper.stepOne = false;
    this.stepper.stepTwo = false;
    this.stepper.stepThree = false;
  }

}
