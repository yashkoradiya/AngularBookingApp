import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEvntDetComponent } from './show-evnt-det.component';

describe('ShowEvntDetComponent', () => {
  let component: ShowEvntDetComponent;
  let fixture: ComponentFixture<ShowEvntDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEvntDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEvntDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
