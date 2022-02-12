function Image(datum, width, heigth, name){
    this.dat=datum;
    this.width=width;
    this.heigth=heigth;
    this.name=name;
    this.pixelData = function(x,y){
        let newpix= ((x-1)*this.width+y);
        return this.dat[newpix];
    }
}

var data = new Array(1600).fill("x");
var img = new Image(data, 40,40,"MyImage");
img.width;
img.heigth;
img.name;
img.pixelData (20, 4);
