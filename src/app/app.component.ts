import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ]
  color = 2;
  isChecked = true;

  @ViewChild(MatDatepicker) picker: MatDatepicker<Moment>;
  isValidMoment: boolean = false;

  ngAfterViewInit(){
    this.picker.selectedChanged.subscribe(
      (newDate: Moment) => {
        this.isValidMoment = moment.isMoment(newDate);
      },
      (error) => {
        throw Error(error);
      }
    );
  }

  onChange($event) {
    console.log("Event Fired",$event);
  }

}
