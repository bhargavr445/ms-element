import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmpComponent } from './mmp.component';

describe('MmpComponent', () => {
  let component: MmpComponent;
  let fixture: ComponentFixture<MmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
