var myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
              },
        matrix: {
	       add: function (a, b){ /*matrix addition*/},
	       sub: function (a, b){ /*matrix subtraction*/},
	       mul: function (a, b){ /*matrix multiplication*/},
	       eye: function (size){ /*identity matrix*/},
	       dot: function (m, a){ /*dot product*/},
	       times:function(a, b){ /*element-wise multiplication*/}
	       }
	}
};


var answer = myLib.math.real.sub(
                  myLib.math.real.add (20, 22), 
                  myLib.math.real.mul(2,5));

var ans = myLib.math.matrix.times(
              myLib.math.matrix.eye (4), 
              myLib.math.complex.sub (
                      new myLib.math.complex.Num (
                             myLib.math.real.add(5,2),
                             -3), 
                      new myLib.math.complex.Num (3,4)
              )
          );

/*WITH STATETMENT*/
var answer1;

with(myLib.math.real){answer1=sub(add(20,22),mul(2,5))};

var ans1;

with(myLib.math.matrix){ans1= times(eye(4), myLib.math.complex.sub(myLib.math.complex.Num(myLib.math.real.add(5,2),-3),myLib.math.complex.Num(3,4)))};

/*  WITHOUT WITH    */

let real=myLib.math.real;
let matrix=myLib.math.matrix;
let complex=myLib.math.complex;

var answer2=real.sub(real.add(20,22),real.mul(2,5));

var ans2=matrix.times(matrix.eye(4),complex.sub(complex.Num(real.add(5,2),-3),complex.Num(3,4)));
