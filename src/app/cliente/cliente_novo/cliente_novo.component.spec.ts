/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cliente_novoComponent } from './cliente_novo.component';

describe('Cliente_novoComponent', () => {
  let component: Cliente_novoComponent;
  let fixture: ComponentFixture<Cliente_novoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cliente_novoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente_novoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
