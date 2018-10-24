import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ClimaPage } from './clima';
import { IonicModule, Platform, NavController, LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Geolocation } from '@ionic-native/geolocation';

describe('ClimaPage', () => {
  let de: DebugElement;
  let comp: ClimaPage;
  let fixture: ComponentFixture<ClimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClimaPage],
      imports: [
        IonicModule.forRoot(ClimaPage)
      ],
      providers: [
        NavController,
        LocationAccuracy,
        Geolocation
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaPage);
    comp = fixture.componentInstance;

  });

  it('should create component', () => expect(comp).toBeDefined());


});
