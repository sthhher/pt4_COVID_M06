/*   
  @name = clothes-management Component TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the clothes-management component
  @date = 19-04-2020 */

import { Component, OnInit } from '@angular/core';
import { Cloth } from '../model/Cloth';
import { ClothType } from '../model/ClothType';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.component.html',
  styleUrls: ['./clothes-management.component.css']
})
export class ClothesManagementComponent implements OnInit {

  //Pagination properties
  currentPage: number;
  itemsPerPage: number;

  //properties
  clothes: Cloth [] = [];
  clothTypes: ClothType [] = [];
  clothesFiltered: Cloth[] = [];
  arr_sizes: String[];

  //constructor
  constructor(private clothesService: ClothesService) { }

  /**
   * @name ngOnInit
   * @description This method is a default method that is called when the page is loading
   */
  ngOnInit() {
    //get all the necessary information from DB
    this.getClothesFromDB();
    this.getClothesTypeFromDB();

    //initialize properties
    this.itemsPerPage=10;
    this.currentPage=1;
  }

    /**
   * @name getClothesFromDB
   * @description function that connects with the DB to get all the clothes and console log the errors if there are. 
   * Also put all the values get from DB in the variable clothes and generate that clothesFiltered is 
   * equal to the array clothes. 
   */
  getClothesFromDB() {
    this.clothesService.getClothesConection().subscribe(outPutData => {
      if (outPutData && Array.isArray(outPutData) && outPutData.length > 0) {
        if (outPutData[0]) {
          this.clothes = outPutData[1];
          this.clothesFiltered = this.clothes;
        } else {
          console.log("Error in connection");
        }
      } else {
        console.log("There has been an error. Please, try later");
      }
    })
  }

  /**
   * @name getClothesTypeFromDB
   * @description function that connects with the DB to get all the clothType and console log the errors if there are. 
   * Also put all the values get from DB in the variable clothTypes and generate that arr_sizes is 
   * equals to the array sizes of the service. 
   */
  getClothesTypeFromDB() {
    this.clothesService.getClothTypesConection().subscribe(outPutData => {
      if (outPutData && Array.isArray(outPutData) && outPutData.length > 0) {
        if (outPutData[0]) {
          this.clothTypes = outPutData[1];
          this.arr_sizes = this.clothesService.arr_sizes; 
        } else {
          console.log("Error in connection");
        }
      } else {
        console.log("There has been an error. Please, try later");
      }
    })
  }

  /**
   * @name returnFalse
   * @description function that returns false when is called. This function is for do readonly the checkboxs from management.
   */
  returnFalse() {
    return false;
  }

}
