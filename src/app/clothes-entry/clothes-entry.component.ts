/*   
  @name = clothes-entry Component TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the clothes-entry component
  @date = 19-04-2020 */

import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Cloth } from '../model/Cloth';
import { ClothType } from '../model/ClothType';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-clothes-entry',
  templateUrl: './clothes-entry.component.html',
  styleUrls: ['./clothes-entry.component.css']
})
export class ClothesEntryComponent implements OnInit {
  //properties
  @Input() cloth: Cloth;
  clothType: ClothType;
  arr_clothes: Cloth[] = [];
  arr_sizes: String[];
  arr_types: ClothType[];
  id = 0;
  added = 0;
  //Added = 0 => nothing
  //Added = 1 => success
  //Added = 2 => error

  /**
   * @type {HTMLFormElement}
   * @memberof ClothesEntryComponent
   * @description for the form of html
   */
  @ViewChild('clothEntryForm', null) 
  clothEntryForm: HTMLFormElement;

  //constructor
  constructor(private clothesService: ClothesService) { }

  /**
   * @name ngOnInit
   * @description This method is a default method that is called when the page is loading
   * it calls the method connection, that connects with DB.
   */
  ngOnInit() {
    this.connection();
    this.initializeForm(); 
  }

  /**
   * @name addCloth
   * @description function that add a new Cloth Element into arr_clothes array.
   */
  addCloth() {
    this.added = 0;
    this.arr_clothes.push(new Cloth(this.id++,this.arr_types[0],undefined,this.arr_sizes[0],undefined,true));
  }

  /**
   * @name removeCloth
   * @description function that remove a Cloth Element from the arr_clothes array.
   */
  removeCloth(cloth: Cloth) {
    this.added = 0;
    this.arr_clothes.splice(this.arr_clothes.indexOf(cloth), 1);
  }

  /**
   * @name entryCloth
   * @description function IN PROGRESS.
   */
  entryCloth(): void {
    this.clothesService.setClothConection(this.arr_clothes).subscribe(outPutData => {
      if (outPutData && Array.isArray(outPutData) && outPutData.length > 0) {
        if (outPutData[0]) {
          this.added = 1;
          console.log("Data inserted successfully");
        } else {
          this.added = 2;
          console.log("Error inserting the data");
        }
      } else {
        this.added = 2;
        console.log("There has been an error. Please, try later");
      }
    }
  )}

  /**
   * @name initializeForm
   * @description function that initialize the form.
   */
  initializeForm(){
    this.added = 0;
    this.clothEntryForm.reset();
    this.clothEntryForm.form.markAsPristine();
    this.clothEntryForm.form.markAsUntouched();
  }

  /**
   * @name connection
   * @description function that connects with the DB and console log the errors if there are. 
   * Also call to the arr_size array from the service and assign to the arr_size variable. 
   * Generate a new cloth that it will be available when we initialize the page. 
   * Add this variable new cloth to the arr_clothes.
   */
  connection() {
    this.clothesService.getClothTypesConection().subscribe(outPutData => {
      if (outPutData && Array.isArray(outPutData) && outPutData.length > 0) {
        if (outPutData[0]) {
          this.arr_types = outPutData[1];
        } else {
          console.log("Error in connection");
        }
      } else {
        console.log("There has been an error. Please, try later");
      }
      this.arr_sizes = this.clothesService.arr_sizes; 
      this.cloth = new Cloth(this.id++,this.arr_types[0],undefined,this.arr_sizes[0],undefined,true);
      this.arr_clothes.push(this.cloth);
    }
  )} 

}
