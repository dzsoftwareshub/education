import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const material = [
  MatIconModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
