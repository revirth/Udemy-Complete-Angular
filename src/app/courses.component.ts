import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h3>Events</h3>
    <ul (click)="onUlClicked()">
        <li *ngFor="let course of courses">
            <button class="btn btn-primary" 
                    [class.active]="isActive"
                    (click)="onSave($event)">{{ course }}</button>
            <button class="btn btn-danger" 
                    (click)="onBubble($event)">BubbleUp</button>
        </li>
    </ul>

    <input (keyup)="onKeyUp($event)" 
           #email 
           (keyup.enter)="onKeyUpEnter($event, email.value)" />

    <input [(ngModel)]="myEmail" (keyup.enter)="printMyEmail()"  />
    
    <h3>Pipe</h3>
    <ul>
        <li>{{ course1.title | uppercase }}</li>
        <li>{{ course1.students | number }}</li>
        <li>{{ course1.rating | number:'1.2-2'}}</li>
        <li>{{ course1.price | currency:'CAD':true:'3.2-2'}}</li>
        <li>{{ course1.releaseDate | date:'shortDate' }}</li>

        <li>{{ text | summary:10 }}</li>
        <li>{{ text | summary:20:'!!!' }}</li>
    </ul>

    `
})

export class CoursesComponent {
    // ng g c course // generate component

    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/10/10";
    isActive = true;
    myEmail = "me@example.com";
    course1 = {
        title: "The Complete Angular Course",
        students: 3.015,
        rating: 4.9768,
        price: 190.96,
        releaseDate: new Date(2017, 3, 1),  // https://angular.io/api/common/DatePipe
    };
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onUlClicked() {
        console.log('UL was clicked');
    }

    onBubble() {
        console.log('BubbleUp Button was clicked');
    }

    onSave($event) {
        $event.stopPropagation();

        console.log('Button was clicked', $event);
    }

    onKeyUp($event) {
        if($event.keyCode === 13) 
            console.log('[onKeyUp] ENTER was pressed');
        else
            console.log('[onKeyUp] '+ String.fromCharCode($event.keyCode) + ' was pressed');
    }

    onKeyUpEnter($event, email) {
        console.log(`[onKeyUpEnter] ${$event.target.value} ${email}`);
    }

    printMyEmail() {
        console.log(this.myEmail); // 2 Way Binding > app.module > imports FormsModule
    }
}