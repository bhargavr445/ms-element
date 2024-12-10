import { Component, EventEmitter, inject, Inject, Input, OnChanges, OnInit, Optional, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {

  title = 'app1';
  @Input() fName: string = 'gb';
  @Output() updatedUserName = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('$$-input-prop',this.fName);
  }

  nameUpdate() {
    this.updatedUserName.emit('Bhargav R G');
  }

}
