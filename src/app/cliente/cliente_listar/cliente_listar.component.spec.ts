/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cliente_listarComponent } from './cliente_listar.component';

describe('Cliente_listarComponent', () => {
  let component: Cliente_listarComponent;
  let fixture: ComponentFixture<Cliente_listarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cliente_listarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente_listarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
