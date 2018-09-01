/*jslint browser:true, esnext:true*/
import {Super} from "./Super.js";

export class Desc extends Super {
	constructor() {
		super();
	}
	static load() {
		return new Promise(resolve => {
			console.log("load", this.name);
			resolve();
		});
	}
	static init () {
		console.log("init", this.name);
		super.init();
	}
}
Desc.init();
