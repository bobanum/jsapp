/*jslint browser:true, esnext:true*/
/*global App */

/**
 * Module class to allow dynamic dependency loading from App class.
 */
export class Module {
	/**
	 * Constructor
	 */
	constructor() {
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
	 * Sets static properties and manages onload events.
	 * Registers class in App for dynamic dependency loading.
	 */
	static init () {
		console.log("init", this.name);
		App[this.name] = this;
	}
}
Module.init();
