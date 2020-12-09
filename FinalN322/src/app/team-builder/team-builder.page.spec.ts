import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamBuilderPage } from './team-builder.page';

describe('TeamBuilderPage', () => {
  let component: TeamBuilderPage;
  let fixture: ComponentFixture<TeamBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBuilderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
