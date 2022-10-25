import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TomarviajePageRoutingModule } from './tomarviaje-routing.module';
import { TomarviajePage } from './tomarviaje.page';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarviajePageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [TomarviajePage]
})
export class TomarviajePageModule {}
