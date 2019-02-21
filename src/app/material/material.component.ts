import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  isChecked = true;

  onChange($event) {
    console.log($event);
  }

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];
  color = 2;

  minDate = new Date(2019, 0, 1);
  maxDate = new Date(2019, 2, 1);

  categories = [
    { name: "Beginner" },
    { name: "Intermediate" },
    { name: "Advanced" },
  ];
  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  // Progress Spinner
  progress = 0;
  timer;
  isLoading = true;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) clearInterval(this.timer);
    }, 20);

    // spinner for ajax request  
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return Observable.timer(4000);
  }

  // Dialog
  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }

}
