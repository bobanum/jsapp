/*jslint browser:true, esnext:true*/
import {Module} from "./Module.js";

/**
 * Parent module. Is extended by Child
 */
export class Super extends Module {
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
Super.init();
