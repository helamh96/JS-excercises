function Image(datum, width, heigth, name){
    this.data=datum;
    this.width=width;
    this.heigth=heigth;
    this.name=name;
    this.pixelData = function pix(x,y){
        let newpix= ((x-1)*40+y);
        return data[newpix];
    }
}

var data = new Array(1600).fill("x");
var img = new Image(data, 40,40,"MyImage");
img.width;
img.height;
img.name;
img.pixelData (20, 4); 
