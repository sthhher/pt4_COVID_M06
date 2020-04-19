/*   
  @name = clothes-management Component TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the clothes-management component
  @date = 19-04-2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.component.html',
  styleUrls: ['./clothes-management.component.css']
})
export class ClothesManagementComponent implements OnInit {

  //constructor
  constructor() { }

  /**
   * @name ngOnInit
   * @description This method is a default method that is called when the page is loading
   */
  ngOnInit() {
  }
}
