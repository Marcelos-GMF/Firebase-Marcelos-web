import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCriadosComponent } from './produtos-criados.component';

describe('ProdutosCriadosComponent', () => {
  let component: ProdutosCriadosComponent;
  let fixture: ComponentFixture<ProdutosCriadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCriadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
