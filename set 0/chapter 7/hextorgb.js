function hexToRgb(hex){
    let num = hex.match(/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/);
    num.shift();
    let rgb = "rgb (";
    for (el of num){
        rgb += parseInt(el, 16) +",";
    }
    rgb = rgb.slice(0, rgb.length-1) +")";
    return rgb;
}

let number = "#3020ff";
console.log(hexToRgb(number));
