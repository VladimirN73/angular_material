import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { courseTitleValidator } from '../course-title.validator';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-create-course-step1',
  templateUrl: './create-course-step1.component.html',
  styleUrls: ['./create-course-step1.component.scss']
})
export class CreateCourseStep1Component implements OnInit {

  form = this.fb.group({
    title:['', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ],
      asyncValidators:[
        courseTitleValidator(this.courses)
      ],
      updateOn: 'blur'  // to run asyncValidators if the field has lost the focus
    }],
    releaseAt:[new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', Validators.required, Validators.minLength(3)],
    address: [null, Validators.required]
  });

  constructor(private fb:FormBuilder, private courses: CoursesService ) { }

  ngOnInit(): void {
  }

  get courseTitle() {
    return this.form.controls['title']
  }

}
