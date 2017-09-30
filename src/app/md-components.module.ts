import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MatInputModule, MdNativeDateModule, MdIconModule, MdButtonModule, MdChipsModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import { MatTabsModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule } from '@angular/material';

@NgModule({
 exports:[
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MdNativeDateModule,
  MdIconModule ,
  MdButtonModule,
  MdChipsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule
 ]
})
export class MdComponentsModule { }
