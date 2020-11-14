import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipesRegionalPage } from './recipes-regional.page';

describe('RecipesRegionalPage', () => {
  let component: RecipesRegionalPage;
  let fixture: ComponentFixture<RecipesRegionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesRegionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesRegionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
