let dates = {
    "01/01":"(New years day)",
    "15/08":"(Assumption of Mary)",
    "01/11":"(All Saints' day)",
    "02/11":"(All souls day)",
    "05/11":"(Day of Guy Fawkes)",
    "08/12":"(Feast of the Immaculate Conception)",
    "24/12":"(Christmas Eve)",
    "25/12":"(Christmas day)",
    "26/12":"(Boxing day)",
    "31/21":"(New year's eve)"
}

function ChangeDate(x){
    let foo=new Date(x);
    foo=foo.toLocaleDateString('en-GB');
    console.log("the date "+x+" in the US format is "+foo+" in the Great Britain "+dates[foo.slice(0,5)]);
}

ChangeDate("12/25/82");
