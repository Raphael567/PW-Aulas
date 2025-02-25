import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoPropertyBindingComponent } from './criando-property-binding.component';

describe('CriandoPropertyBindingComponent', () => {
  let component: CriandoPropertyBindingComponent;
  let fixture: ComponentFixture<CriandoPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriandoPropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriandoPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
