import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

//  getYearsData(): Observable<any> {
//   console.log("called")

//     return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/years');
//   }

//  getMakesData(year: string): Observable<any> {
//     return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/makes', {
//       params: {
//         year,
//       },
//     });
//   }



//  getModelsData(year: string, make: string): Observable<any> {
//     return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/models', {
//       params: {
//         year,
//         make,
//       },
//     });
//   }

//  getStylesData(year: string, make: string, model: string): Observable<any> {
//     return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/trim', {
//       params: {
//         year,
//         make,
//         model,
//       },
//     });
//   }

BASE_URL = `https://6080be3273292b0017cdbf2a.mockapi.io`
getData(urlInput:any):Observable<[]>{
  console.log("userInput", urlInput)
  return this.http.get(`${this.BASE_URL}/${urlInput ==='trim'? 'trim' : (urlInput+'s')}`).pipe(
    map((res: { [x: string]: any; })=>res[urlInput])
  )
}


 }
