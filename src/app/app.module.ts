import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatComponentsModule } from './mat-components.module'
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AppComponent } from './app.component';
import { EditInfoComponent } from './edit-info/edit-info.component';


@NgModule({
  declarations: [
    AppComponent,
    EditInfoComponent
  ],
  entryComponents: [
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
    MatIconModule,
    MatMomentDateModule

  ],
  providers: [
    // { provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
