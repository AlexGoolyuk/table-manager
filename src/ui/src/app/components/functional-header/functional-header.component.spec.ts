import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalHeaderComponent } from './functional-header.component';

describe('FunctionalHeaderComponent', () => {
  let component: FunctionalHeaderComponent;
  let fixture: ComponentFixture<FunctionalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
