import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClimaProvider } from './clima';


describe('Service: ClimaProvider', () => {

  let service: ClimaProvider;
  let httpMock: HttpTestingController;
  let geolocation: Geolocation;
  // let lat =  -26.8101503;
  // let long = -65.2692756;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ClimaProvider, useClass: ClimaProvider },
      ],
    });
    service = TestBed.get(ClimaProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('Test for getClimaData', () => {
  //   it('should return clima data ', () => {
  //     // Arrange
  //     const mockResponse = {
  //       data:
  //         {
  //           "currently": {
  //             "apparentTemperature": 20.43,
  //             "cloudCover": 1,
  //             "dewPoint": 18.94,
  //             "humidity": 0.94,
  //             "icon": "fog",
  //             "ozone": 284.44,
  //             "precipIntensity": 0.1067,
  //             "precipProbability": 0.34,
  //             "precipType": "rain",
  //             "pressure": 1008.13,
  //             "summary": "Nublado",
  //             "temperature": 19.93,
  //             "time": 1540234760,
  //             "uvIndex": 4,
  //             "visibility": 3.03,
  //             "windBearing": 9,
  //             "windGust": 3.27,
  //             "windSpeed": 2.87
  //           },
  //           "daily": Object,
  //           "flags": Object,
  //           "hourly": Object,
  //           "latitude": -26.8101503,
  //           "longitude": -65.2692756,
  //           "offset": -3,
  //           "timezone": "America/Argentina/Tucuman"
  //         }

  //     };
  //     let dataError, dataResponse;
      // Act
      // service.getClimaData(lat,long)
      //        .subscribe((response) => {
      //         dataResponse = response;
      //         }, (error) => {
      //           dataError = error;
      //         });
      // const req = httpMock.expectOne(`https://api.darksky.net/forecast/2fa7b5e3579980e70eb137da56e48af9/` + lat + `,` + long + `?units=si&lang=es`);
      // req.flush(mockResponse);
      // // Assert
      // // expect(dataResponse.length).toEqual(1);
      // expect(req.request.url).toEqual(`https://api.darksky.net/forecast/2fa7b5e3579980e70eb137da56e48af9/` + lat + `,` + long + `?units=si&lang=es`);
      // expect(req.request.method).toEqual('GET');
      // expect(dataError).toBeUndefined();
    // });

  //   it('should return an error', () => {
  //     // Arrange
  //     let dataError, dataResponse: any[];
  //     // Act
  //     service.getClimaData()
  //     .subscribe((response) => {
  //       dataResponse = response['results'];
  //     }, (error) => {
  //       dataError = error;
  //     });
  //     httpMock.expectOne('https://randomuser.me/api/?results=25')
  //     .error(new ErrorEvent('error'));
  //     // Assert
  //     expect(dataResponse).toBeUndefined();
  //     expect(dataError).toBeDefined();
  //   });
  // });

});
