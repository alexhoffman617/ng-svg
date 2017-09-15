import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { GraphComponent } from './graph/graph.component';
import { DataviewComponent } from './dataview/dataview.component';
import { StatService } from 'app/stat.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    GraphComponent,
    DataviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
