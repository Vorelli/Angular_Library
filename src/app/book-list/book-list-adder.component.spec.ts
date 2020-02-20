import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAdderComponent } from './book-list-adder.component';

describe('BookListAdderComponent', () => {
  let component: BookListAdderComponent;
  let fixture: ComponentFixture<BookListAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
