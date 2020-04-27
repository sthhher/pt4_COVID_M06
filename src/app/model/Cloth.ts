/*   
  @name = Cloth Class
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript with the class Cloth, the constructor, getters and setters
  @date = 19-04-2020 */

import { ClothType } from './ClothType';

export class Cloth {
    private id: Number;
    private clothType: ClothType;
    private brand: String;
    private size: String;
    private price: Number;
    private inSale: Boolean;

	constructor($id?: Number, $clothType?: ClothType, $brand?: String, $size?: String, $price?: Number, $inSale?: Boolean) {
		this.id = $id;
		this.clothType = $clothType;
		this.brand = $brand;
		this.size = $size;
		this.price = $price;
		this.inSale = $inSale;
	}


    /**
     * Getter $id
     * @return {Number}
     */
	public get $id(): Number {
		return this.id;
	}

    /**
     * Getter $clothType
     * @return {ClothType}
     */
	public get $clothType(): ClothType {
		return this.clothType;
	}

    /**
     * Getter $brand
     * @return {String}
     */
	public get $brand(): String {
		return this.brand;
	}

    /**
     * Getter $size
     * @return {String}
     */
	public get $size(): String {
		return this.size;
	}

    /**
     * Getter $price
     * @return {Number}
     */
	public get $price(): Number {
		return this.price;
	}

    /**
     * Getter $inSale
     * @return {Boolean}
     */
	public get $inSale(): Boolean {
		return this.inSale;
	}

    /**
     * Setter $id
     * @param {Number} value
     */
	public set $id(value: Number) {
		this.id = value;
	}

    /**
     * Setter $clothType
     * @param {ClothType} value
     */
	public set $clothType(value: ClothType) {
		this.clothType = value;
	}

    /**
     * Setter $brand
     * @param {String} value
     */
	public set $brand(value: String) {
		this.brand = value;
	}

    /**
     * Setter $size
     * @param {String} value
     */
	public set $size(value: String) {
		this.size = value;
	}

    /**
     * Setter $price
     * @param {Number} value
     */
	public set $price(value: Number) {
		this.price = value;
	}

    /**
     * Setter $inSale
     * @param {Boolean} value
     */
	public set $inSale(value: Boolean) {
		this.inSale = value;
	}

}