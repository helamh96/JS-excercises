function hextorgb(x){
    let r=x.charAt(1)+x.charAt(2);
    let g=x.charAt(3)+x.charAt(4);
    let b=x.charAt(5)+x.charAt(6);
    let rgb=`RGB(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)})`;
    return rgb;
}

console.log(hextorgb("#3020ff"));
