function isHoli(x){
    var abr = x.slice(0,5);
    switch(abr){
        case "01/01":
            console.log("(New years day)");
            break;
        case "15/08":
            console.log("(Assumption of Mary)");
            break;
        case "01/11":
            console.log("(All Saints' day)");
            break;
        case "02/11":
            console.log("(All souls day)");
            break;
        case "05/11":
            console.log("(Day of Guy Fawkes)");
            break;
        case "08/12":
            console.log("(Feast of the Immaculate Conception)");
            break;
        case "24/12":
            console.log("(Christmas Eve)");
            break;
        case "25/12":
            console.log("(Christmas day)");
            break;
        case "26/12":
            console.log("(Boxing day)");
            break;
        case "31/21":
            console.log("(New year's eve)");
            break;
    }
    return;
}

function ChangeDate(x){
    let foo=new Date(x);
    foo=foo.toLocaleDateString('en-GB');
    console.log(foo);
    isHoli(foo);
    return foo;
}

ChangeDate("12/25/82");
