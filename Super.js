/*jslint browser:true, esnext:true*/
import {Module} from "./Module.js";

export class Super extends Module {
	constructor() {
		super();
	}
	static load() {
		return new Promise(resolve => {
			resolve();
		});
	}
	static init () {
		console.log("init", this.name);
		super.init();
	}
}
Super.init();
