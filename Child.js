/*jslint browser:true, esnext:true*/
import {Super} from "./Super.js";

/**
 * Class extendes from Super
 */
export class Child extends Super {
	/**
	 * Constructor
	 */
	constructor() {
		super();
	}
	/**
	 * Pseudo-event called by App when all dependencies are loaded
	 */
	static load() {
		return new Promise(resolve => {
			console.log("load", this.name);
			resolve();
		});
	}
	/**
	 * Sets static properties and manages onload events
	 */
	static init () {
		console.log("init", this.name);
		super.init();
	}
}
Child.init();
