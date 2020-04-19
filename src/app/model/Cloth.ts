/*   
  @name = Cloth Class
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript with the class Cloth, the constructor, getters and setters
  @date = 19-04-2020 */

import { ClothType } from './ClothType';

export class Cloth {
    private _id: Number;
    private _clothType: ClothType;
    private _brand: String;
    private _size: String;
    private _price: Number;
    private _inSale: Boolean;


	constructor(id?: Number, clothType?: ClothType, brand?: String, size?: String, price?: Number, inSale?: Boolean) {
		this._id = id;
		this._clothType = clothType;
		this._brand = brand;
		this._size = size;
		this._price = price;
		this._inSale = inSale;
    }
    
    /**
     * Getter id
     * @return {Number}
     */
	public get id(): Number {
		return this._id;
	}

    /**
     * Getter clothType
     * @return {ClothType}
     */
	public get clothType(): ClothType {
		return this._clothType;
	}

    /**
     * Getter brand
     * @return {String}
     */
	public get brand(): String {
		return this._brand;
	}

    /**
     * Getter size
     * @return {String}
     */
	public get size(): String {
		return this._size;
	}

    /**
     * Getter price
     * @return {Number}
     */
	public get price(): Number {
		return this._price;
	}

    /**
     * Getter inSale
     * @return {Boolean}
     */
	public get inSale(): Boolean {
		return this._inSale;
	}

    /**
     * Setter id
     * @param {Number} value
     */
	public set id(value: Number) {
		this._id = value;
	}

    /**
     * Setter clothType
     * @param {ClothType} value
     */
	public set clothType(value: ClothType) {
		this._clothType = value;
	}

    /**
     * Setter brand
     * @param {String} value
     */
	public set brand(value: String) {
		this._brand = value;
	}

    /**
     * Setter size
     * @param {String} value
     */
	public set size(value: String) {
		this._size = value;
	}

    /**
     * Setter price
     * @param {Number} value
     */
	public set price(value: Number) {
		this._price = value;
	}

    /**
     * Setter inSale
     * @param {Boolean} value
     */
	public set inSale(value: Boolean) {
		this._inSale = value;
	}
}