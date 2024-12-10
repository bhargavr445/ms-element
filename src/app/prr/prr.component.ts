import { Component, inject } from '@angular/core';
import { PrrService } from './prr.service';
import { PrrI } from './Prr-interface';

@Component({
  selector: 'app-prr',
  templateUrl: './prr.component.html',
  styleUrl: './prr.component.css'
})
export class PrrComponent {

  compName = 'Prr Comp';
  prrService = inject(PrrService);
  resp: PrrI;

  fetchData() {
    this.prrService.fetchUnivData().subscribe({
      next: (data: PrrI) => {
        this.resp = data
      },
      error: (error) => {
        console.log(error);
      }
    }
    )
  }

}
