import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectoresComponent } from './conectores.component';

describe('ConectoresComponent', () => {
  let component: ConectoresComponent;
  let fixture: ComponentFixture<ConectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
