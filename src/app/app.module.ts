import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import {NoopAnimationsModule}from '@angular/platform-browser/animations'
import { MatCheckboxModule, MatDatepickerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MatInputModule, MdNativeDateModule, MdIconModule, MdButtonModule, MdChipsModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
 
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
