import { Component } from '@angular/core';
import { Eroe } from '../eroe';
import { EROI } from './lista-eroi.component';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css'],
})
export class EroiComponent {
  eroi = EROI;
  eroeSelezionato?: Eroe;

  onSelect(e: Eroe) {
    this.eroeSelezionato = e;
  }
}
