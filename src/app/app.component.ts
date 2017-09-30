import { EditCourseComponent } from './edit-course/edit-course.component';


import { Component } from '@angular/core';

import { NgModel } from '@angular/forms';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private dialog : MdDialog){

  }
  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data:{
        courseId:1
      }
    })
    .afterClosed()
    .subscribe(result=> console.log(result))
    ;
  }
  }
