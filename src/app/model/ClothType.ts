/*   
  @name = ClothType Class
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript with the class ClothType, the constructor, getters and setters
  @date = 19-04-2020 */

export class ClothType {
    private _id: Number;
    private _name: String;

	constructor(id?: Number, name?: String) {
		this._id = id;
		this._name = name;
	}

    /**
     * Getter id
     * @return {Number}
     */
	public get id(): Number {
		return this._id;
	}

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Setter id
     * @param {Number} value
     */
	public set id(value: Number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}
}