import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionStrapiComponent } from './conexion-strapi.component';

describe('ConexionStrapiComponent', () => {
  let component: ConexionStrapiComponent;
  let fixture: ComponentFixture<ConexionStrapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionStrapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionStrapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
