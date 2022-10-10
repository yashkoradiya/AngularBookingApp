import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvntDetComponent } from './add-evnt-det.component';

describe('AddEvntDetComponent', () => {
  let component: AddEvntDetComponent;
  let fixture: ComponentFixture<AddEvntDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEvntDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEvntDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
