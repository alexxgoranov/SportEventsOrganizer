import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppLayoutComponent } from './in-app-layout.component';

describe('InAppLayoutComponent', () => {
  let component: InAppLayoutComponent;
  let fixture: ComponentFixture<InAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAppLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
