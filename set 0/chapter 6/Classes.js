class Shape{
    constructor(nEdges){
        this.nEdges=nEdges;
    }
    get edges(){
        return printE();
    }
    printE(){
        return console.log(this.nEdges);
    }
}


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
  get perimeter(){
      return this.calcPerimeter();
  }
  calcPerimeter(){
      return this.height*2+this.width*2;
  }
}

class triangle{
    constructor(side1, side2, side3){
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    get perimeter(){
        return this.calcPerimeter();
    }
    calcPerimeter(){
        return this.side1+this.side2+this.side3;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        let s=(this.side1+this.side2+this.side3)/2;
        return Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3));
    }
}

let square = new Rectangle(10, 10);

console.log(square.area);
console.log(square.perimeter);

let triangl = new triangle(2,2,3);

console.log(triangl.area);
console.log(triangl.perimeter);
