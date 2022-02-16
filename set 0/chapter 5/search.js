let building = {"person":{"Alan":{"floor":"3","room":"4", "equipment":"broom"},
                           "Otis":{"floor":"5","room":"1", "equipment":""},
                           "Steve":{"floor":"4","room":"1", "equipment":""}
                            },
                "equipment":{"laptop":{"floor":"mezzanine","room":"principal","worker":""},
                             "printer":{"floor":"5","room":"1","worker":""},
                             "car":{"floor":"-1","room":"1st place","worker":""},
                             "microwave":{"floor":"1","room":"cafeteria","worker":""}
                            }
                };

function searching(){
    let cache = {};
    function looks (x){
        if (x in cache){
            return cache[x]
        }
        let item = {};
        if (Object.keys(building["person"]).indexOf(x)>= 0){
            item = building["person"][x];
        } else if (Object.keys(building["equipment"]).indexOf(x)>= 0){
            item = building["equipment"][x];
        }
        if (item){
            cache[x] = item;
        }
        return item;
    }
    return looks;
}

let search = searching();
console.log(search("Otis"));
console.log(search("car"));
console.log(search("Steve"));
console.log(search("laptop"));
