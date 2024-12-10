import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrrComponent } from './prr.component';

describe('PrrComponent', () => {
  let component: PrrComponent;
  let fixture: ComponentFixture<PrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
