function mul(x,y){
    var num;
    num=x*y;
    var num13="";
    var res,quo;
    while(quo!=0){
        res=num%13;
        quo=(num-res)/13;
        if(res<=9){
            num13=""+num13;
            num13=res+num13;
        }
        else{
            switch(res){
            case 10:
                num13="A"+num13;
                break;
            case 11:
                num13="B"+num13;
                break;
            case 12:
                num13="C"+num13;
                break;
        }
        }
        num=quo;
        }
    return num13;
}

console.log(mul(9,4));
