import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any) { 
    console.log("Data", data);
  }

  ngOnInit() {
  }

}
