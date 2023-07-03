import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPaginationComponent } from './currency-pagination.component';

describe('CurrencyPaginationComponent', () => {
  let component: CurrencyPaginationComponent;
  let fixture: ComponentFixture<CurrencyPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
