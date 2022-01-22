function dataParse(x){
    var foo
    foo=JSON.parse(x);
    foo.myFn = eval("(" + foo.myFn + ")");
    return foo;
}

var str = '{"prop1": 42, "myFn":"function(a,b){return a+b+this.prop1;}"}';
var obj = dataParse(str);
