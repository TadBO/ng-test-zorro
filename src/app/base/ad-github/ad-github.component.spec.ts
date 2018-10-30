import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdGithubComponent } from './ad-github.component';

describe('AdGithubComponent', () => {
  let component: AdGithubComponent;
  let fixture: ComponentFixture<AdGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
