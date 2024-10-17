import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfor1Component } from './ngfor1.component';

describe('Ngfor1Component', () => {
  let component: Ngfor1Component;
  let fixture: ComponentFixture<Ngfor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngfor1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngfor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
