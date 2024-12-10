import { Component, inject } from '@angular/core';
import { PrrService } from './prr.service';

@Component({
  selector: 'app-prr',
  templateUrl: './prr.component.html',
  styleUrl: './prr.component.css'
})
export class PrrComponent {

  compName = 'Prr Comp';
  prrService = inject(PrrService);

  fetchData() {
    console.log('Fetch data...');
    
  }

}
