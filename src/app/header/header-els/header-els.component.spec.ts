import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElsComponent } from './header-els.component';

describe('HeaderElsComponent', () => {
  let component: HeaderElsComponent;
  let fixture: ComponentFixture<HeaderElsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderElsComponent]
    });
    fixture = TestBed.createComponent(HeaderElsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
