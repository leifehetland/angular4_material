import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log("Data:", data);
  }

  ngOnInit() {
  }

}
