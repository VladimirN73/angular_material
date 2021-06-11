import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-course-step2',
  templateUrl: './create-course-step2.component.html',
  styleUrls: ['./create-course-step2.component.scss']
})
export class CreateCourseStep2Component implements OnInit {

  form = this.fb.group({});

  constructor(private fb:FormBuilder)
  {

  }

  ngOnInit(): void {
  }

}
