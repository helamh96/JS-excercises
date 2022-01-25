const linearSearch = (arr, target) => {
    let v=false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].equipment === target) {
                console.log("the "+building[i][j].equipment+" is on the floor "+(i+1)+" room "+(j+1)+" and this piece of equipment is  associated to "+building[i][j].person+".");
                v=true;
                
            }
        }
    }
    if(v==false){ console.error("this equipment is not in the building");}
}

let n=10;
let building = new Array(n);

for (let i = 0; i < building.length; i++) {
    building[i] = new Array(n).fill(0);
}

building[0][0]={equipment:"broom", person:"Alan"};

linearSearch(building,"broom");
