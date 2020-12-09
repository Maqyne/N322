import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NationalDexPage } from './national-dex.page';

describe('NationalDexPage', () => {
  let component: NationalDexPage;
  let fixture: ComponentFixture<NationalDexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalDexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalDexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
