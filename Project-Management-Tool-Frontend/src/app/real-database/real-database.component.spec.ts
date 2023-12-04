import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDatabaseComponent } from './real-database.component';

describe('RealDatabaseComponent', () => {
  let component: RealDatabaseComponent;
  let fixture: ComponentFixture<RealDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealDatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
