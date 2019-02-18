import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    // ng g c course // generate component

    title = "List of courses";
    // courses = ["Course1", "Course2", "Course3"];
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}