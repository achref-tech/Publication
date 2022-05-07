import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationMaxComponent } from './publication-max.component';

describe('PublicationMaxComponent', () => {
  let component: PublicationMaxComponent;
  let fixture: ComponentFixture<PublicationMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
