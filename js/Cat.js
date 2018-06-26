class Cat {
	constructor(name, url){
		this.clickCount = 0;
		this.name = name;
		this.url = url;
	}

	// Code to increment the clicks on the cat
	imClicked() {
		this.clickCount ++;
	}
}

// export default module.Cat = Cat;