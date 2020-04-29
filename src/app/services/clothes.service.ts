/*   
  @name = Service Clothes TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the Service Clothes
  @date = 19-04-2020 */

import { Injectable } from '@angular/core';
import { Cloth } from '../model/Cloth';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  //properties
  private mainUrl: string = "http://localhost/~esther/clothesM06/controllers/MainController.php";
  private body: any;
  private bodyDB: any;
  private httpParams: HttpParams = new HttpParams();
  arr_sizes = ["XXS", "XS","S", "M", "L", "XL", "XXL"];

  //constructor
  constructor(private http: HttpClient) { }

  /**
   * @name getClothTypesConection
   * @description This method is to do the body for the connection. Get all the clothTypes(action 10000) from DB.
   */
  getClothTypesConection(): Observable<any[]> {
    this.body={
      action: '10000',
      jsonData: ''
    }

    return this.accessServer();
  }

  /**
   * @name setClothConection
   * @description This method is to do the body for the connection. Insert the clothes (action 10010) into DB.
   */
  setClothConection(arr_clothes: Cloth[]): Observable<any[]> {
    this.body={
      action: '10010',
      jsonData: JSON.stringify(arr_clothes)
    }

    return this.accessServer();
  }

  /**
   * @name getClothesConection
   * @description This method is to do the body for the connection. Get all the clothes(action 10020) from DB.
   */
   getClothesConection(): Observable<any[]> {
    this.body={
      action: '10020',
      jsonData: ''
    }

    return this.accessServer();
  }

  /**
   * @name generateDate
   * @description This method is not used but it is if you want to enter a date sale with actual date
   */
  generateDate() {
    var d = new Date();
    var newDate = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getDate();

    return newDate;
  }

  /**
   * @name accessServer
   * @description This method is to generate the headers of the observable and return the headers, body,etc.
   */
  private accessServer(): Observable<any[]> {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any[]>(this.mainUrl, this.body, {headers: httpHeaders, params: this.httpParams});
  }

}
