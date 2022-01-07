function dataType(){
    for(var i=0; i<arguments.length; i++){
        switch (typeof arguments[i]){
            case "number":
                if(arguments[i]-Math.floor(arguments[i])==0){console.log("integer number")}
                else (console.log("float number"))
                break;
                
            case "string":
                console.log("string");
                break;
                
            case "object":
                if(Array.isArray(arguments[i])==true){console.log("Array");}
                else{console.log("object");}
                break;
            case "function":
                console.log("function");
                break;
        }
    }
    return "";
}

dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {});
