function printObjProp(x,y){
    if(y===false || y===undefined){
        for (let prop in x) {
            console.log(prop);
        }
    }
    if(y===true){
        Object.keys(x).forEach(prop => console.log(prop))
    }
    return 0;
}


function CustomObject (a, b) {
		this.a = a;
		this.b = b;
	}
CustomObject.prototype.c = function () { return this.a + this.b; };
	var obj = new CustomObject (1, 2);
	printObjProp (obj); // output: a, b, c
	printObjProp (obj, false); // output: a, b, c
	printObjProp (obj, true); // output: a, b
