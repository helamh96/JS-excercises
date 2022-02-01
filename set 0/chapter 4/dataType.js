function dataType(){
    for(var i=0; i<arguments.length; i++){
        switch (typeof arguments[i]){
            
            case "number":
                if(Number.isInteger(arguments[i])){console.log("integer");}
                else {console.log("float");}
                break;
                
            case "object":
                if(Array.isArray(arguments[i])){console.log("Array");}
                else{console.log("object");}
                break;
            
            default:
                console.log(typeof arguments[i]);
                break;
        }
    }
}

dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {});
