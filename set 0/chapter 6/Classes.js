class Shape{
    constructor(perimeter, area, edges){
        this.edges = edges;
        this.perimeter = perimeter;
        this.area = area;
    }
    display(){
        console.log(this.edges);
    }
}


class Triangle extends Shape{
    constructor(l1,l2,l3){
        let s = (l1+l2+l3)/2;
        let a = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
        super(2*s, a,3)
        this.base = l1;
        this.height = 2*a/l1;
    }
}

class Quadrilateral extends Shape{
    constructor(perimeter, area){
        super(perimeter, area, 4);
        
    }
}

class Parallelogram extends Quadrilateral{
    constructor(l1, l2, angle){
        super(2*(l1+l2), l1*l2*Math.sin(angle));
        this.base = l1;
        this.height = l2*Math.sin(angle);
    }
}

class Rectangle extends Parallelogram{
    constructor(base,height){
        super(base, height, Math.PI/2)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
        this.side = side;
    }
}

let q = new Quadrilateral(2,4);
console.log(q);
let p = new Parallelogram(5,8,Math.PI/4);
console.log(p);
let r = new Rectangle(5,10);
console.log(r);
let s = new Square(3);
console.log(s);
let t = new Triangle(3,4,5);
console.log(t);

//NEW CLASS INHERITANCE

class Vehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        this.passengers = passengers;
        this.topSpeed = topSpeed;
        this.size = size;
        this.name = name;
        this.currentSpeed = currentSpeed;
    }
    move(speed){
        if (speed>this.topSpeed){
            speed = this.topSpeed;
        }
        this.currentSpeed = speed;
        console.log(`The vehicle ${this.name} is now moving with speed of ${this.currentSpeed}`);
    }
    stop(){
        this.currentSpeed = 0;
        console.log(`The vehicle ${this.name} has stopped.`)
    }
}

class AirVehicle extends Vehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed=0)
    }
    rise(meters){
        this.height += meters;
        console.log(`The new height is ${this.height}`);
    }

    descend(meters){
        this.height -= meters;
        console.log(`The new height is ${this.height}`);
    }
}

class Airplane extends AirVehicle{
    constructor(passengers, topSpeed, size, name, typeWing, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.typeWing = typeWing;
    }
}

class Helicopter extends AirVehicle{
    constructor(passengers, topSpeed, size, name, numberPropeller, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.numberPropeller = numberPropeller;
    }
}

let compoundHelicopter = new Helicopter(4,120,"small", "Compound Helicopter",2,80);
console.log(compoundHelicopter);
compoundHelicopter.move(70);
console.log(compoundHelicopter);
compoundHelicopter.stop();
console.log(compoundHelicopter);

let lightAirplane = new Airplane(20, 350, "medium", "Light Airplane", "Fixed Wing");
console.log(lightAirplane);
lightAirplane.move(150);
console.log(lightAirplane);
lightAirplane.stop();
console.log(lightAirplane);
lightAirplane.move(450);
console.log(lightAirplane);
