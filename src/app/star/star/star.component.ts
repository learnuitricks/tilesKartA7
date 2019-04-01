import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating;
 ratingWidth:number=65;

 @Output() ratingClicked:EventEmitter<string> = new EventEmitter();
 
 ngOnInit() {
 }
 ngOnChanges(){
this.ratingWidth  = this.rating * 85/5;
 }

  constructor() { }

  starUpdated(data){
    console.log("rating has been updated");
    this.ratingClicked.emit(data);
  }

}
