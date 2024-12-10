import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  router = inject(Router);

  ngOnInit(): void {
    this.navigateTo();
  }

  navigateTo(path = 'prr') {
    this.router.navigate([path]);
  }

}
