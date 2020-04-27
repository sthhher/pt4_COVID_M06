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
   * @name clothConection
   * @description This method is to do the body of the connection and return the accessServer method
   */
  clothConection(): Observable<any[]> {
    this.body={
      action: '10000',
      jsonData: ''
    }

    return this.accessServer();
  }

  /**
   * @name clothConection
   * @description This method is to do the body of the entryClothDB and return the accessServer method
   */
  clothInsertConection(arr_clothes: Cloth[]): Observable<any[]> {
    this.body={
      action: '10010',
      jsonData: JSON.stringify(arr_clothes)
    }

    return this.accessServer();
  }

  /**
   * @name entryClothDB
   * @description This method is to insert the data of the body in DB
   */
  entryClothDB(): Observable<any[]>  {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any[]>(this.mainUrl, this.bodyDB, {headers: httpHeaders, params: this.httpParams});
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
