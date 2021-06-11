import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Course } from "./uni.models";

@Injectable({providedIn:"root"})
export class CoursesService{

    private base_api="https://climo-1f720.firebaseio.com/";

    constructor(private http:HttpClient){

    }

    findAllCourses():Observable<Course[]>{
        const url = this.base_api + "courses.json";
        return this.http.get(url).pipe(
            map(res=> res['payload'])
        );
    }

}