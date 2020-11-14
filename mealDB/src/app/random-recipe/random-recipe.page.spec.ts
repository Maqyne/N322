import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomRecipePage } from './random-recipe.page';

describe('RandomRecipePage', () => {
  let component: RandomRecipePage;
  let fixture: ComponentFixture<RandomRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomRecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
