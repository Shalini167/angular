import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpdComponent } from './adminpd.component';

describe('AdminpdComponent', () => {
  let component: AdminpdComponent;
  let fixture: ComponentFixture<AdminpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
