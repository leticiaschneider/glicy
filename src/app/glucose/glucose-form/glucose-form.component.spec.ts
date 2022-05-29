import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseFormComponent } from './glucose-form.component';

describe('GlucoseFormComponent', () => {
  let component: GlucoseFormComponent;
  let fixture: ComponentFixture<GlucoseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
