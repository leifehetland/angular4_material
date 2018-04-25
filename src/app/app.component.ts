import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { EditInfoComponent } from './edit-info/edit-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Easy'},
    { name: 'Medium'},
    { name: 'Hard'}
  ];
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ]
  color = 2;
  isChecked = true;
  @ViewChild(MatDatepicker) picker: MatDatepicker<Moment>;
  isValidMoment: boolean = false;
  progress = 0;
  timer;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) {
          clearInterval(this.timer);
      }
    }, 100);
  }

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

  selectCategory(category) {
    this.categories
      .filter(cat => cat != category)
      .forEach(cat => cat['selected'] = false);

      category.selected = !category.selected;
  }

  onChange($event) {
    console.log("Event Fired",$event);
  }

  openDialog() {
    this.dialog.open(EditInfoComponent, {
      data: { infoId: 1 }
    })
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }
}
