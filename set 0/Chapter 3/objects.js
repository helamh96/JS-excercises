function printObjProp(x,y){
    if(y==null){
        for (let prop in x) {
            console.log(prop);
        }
    }
    if(y==true){
        for (let i=0; i<x.length ; i++) {
            if(typeof x[i] != 'function'){
                console.log(x[i]);
            }
        }
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
