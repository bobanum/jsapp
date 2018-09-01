/*jslint browser:true, esnext:true*/
/*global App */
export default class Module {
	constructor() {
	}
	static load() {
		return new Promise(resolve => {
			resolve();
		});
	}
	static init () {
		console.log("init", this.name);
		App[this.name] = this;
	}
}
Module.init();
