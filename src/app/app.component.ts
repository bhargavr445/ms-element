import { Component, inject, Inject, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnInit {


  title = 'app1';
  @Input() fName: string = 'gb';
  router = inject(Router);

 
  ngOnInit(): void {
    this.navigateTo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('$$-input-prop',this.fName);
  }

  navigateTo(path = 'prr') {
    this.router.navigate([path]);
  }


}
