import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoInterpolationComponent } from './criando-interpolation.component';

describe('CriandoInterpolationComponent', () => {
  let component: CriandoInterpolationComponent;
  let fixture: ComponentFixture<CriandoInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriandoInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriandoInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
