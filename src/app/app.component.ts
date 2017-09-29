

import { Component } from '@angular/core';

import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  timer;
  progess=0;
   constructor(){
     this.timer= setInterval(()=>{
        this.progess++;
        if(this.progess==0)clearInterval(this.timer);
     },20 );
   }
  }
