import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksDashboardComponent } from './marks-dashboard.component';

describe('MarksDashboardComponent', () => {
  let component: MarksDashboardComponent;
  let fixture: ComponentFixture<MarksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
