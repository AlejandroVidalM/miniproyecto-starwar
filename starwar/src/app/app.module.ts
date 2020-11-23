import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PlanetsService } from './services/planets.service';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FilmsService } from './services/films.service';
import { FilmsListadoComponent } from './films-listado/films-listado.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [PlanetsService, FilmsService],
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmsListadoComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}