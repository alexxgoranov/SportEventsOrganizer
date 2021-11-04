import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPagesLayoutComponent } from './content-pages-layout.component';

describe('ContentPagesLayoutComponent', () => {
  let component: ContentPagesLayoutComponent;
  let fixture: ComponentFixture<ContentPagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPagesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
