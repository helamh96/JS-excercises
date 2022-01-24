function Image(datum, width, heigth, name){
    this.data=datum;
    this.width=width;
    this.heigth=heigth;
    this.name=name;
    this.pixelData = function pix(x,y){
        var newpix= ((x-1)*40+y);
        var ret=data[newpix];
        return ret;
    }
}

var data = new Array(1600);
var img = new Image(data, 40,40,"MyImage");
