function printObjProp(x,y){
    if(y){
        Object.keys(x).forEach(prop => console.log(prop))
    }
    else{
        for (let prop in x) {
            console.log(prop);
        }
    }
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

