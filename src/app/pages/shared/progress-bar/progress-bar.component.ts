
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  
   color:string='';
     @Input() progress: number = 0; //parent val > child com 
     @Input() firstName:string=''
    //chid val > parent clz use EventEmitter/progressClick
    
     @Output() progressClick:EventEmitter<string>=new EventEmitter<string>();
     
   

  constructor() {}

  ngOnInit(): void { //progeres bar colour
    if (this.progress < 0 || this.progress > 100) {
      this.progress = 0;

    }

    if (this.progress<35){
      this.color='red'

    }else if (this.progress<75){
      this.color='yellow'

    }else {
      this.color='green'
    }
  }
  onClick() {
  this.progressClick.emit(`${this.firstName}'s Progress is ${this.progress}%`); //progress bar click event
}

}
