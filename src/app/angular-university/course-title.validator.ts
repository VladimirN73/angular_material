import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";

import { CoursesService } from "./courses.service";

export function courseTitleValidator(courses: CoursesService):AsyncValidatorFn {

    return (control:AbstractControl)=>{

        return courses.findAllCourses()
        .pipe(
            map(courses => {

                const course = courses.find(course => 
                    course.title.toLowerCase() == 
                    control.value.toLowerCase() );

                return course ? {titleExists : true} : null;

            })

        )
    }

}