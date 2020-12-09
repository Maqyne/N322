import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalDexPage } from './personal-dex.page';

describe('PersonalDexPage', () => {
  let component: PersonalDexPage;
  let fixture: ComponentFixture<PersonalDexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
