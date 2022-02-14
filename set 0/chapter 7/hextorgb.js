function hexToRgb(hex){
    let num = hex.match(/\w{2}/gi);
    let rgb = "rgb (";
    for (el of num){
        rgb += parseInt(el, 16) +",";
    }
    rgb = rgb.slice(0, rgb.length-1) +")";
    return rgb;
}
let number = "#3020ff";
console.log(hexToRgb(number));
