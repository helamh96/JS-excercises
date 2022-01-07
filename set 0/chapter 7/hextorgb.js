function hexToDec(s) {
    var i, j, digits = [0], carry;
    for (i = 0; i < s.length; i += 1) {
        carry = parseInt(s.charAt(i), 16);
        for (j = 0; j < digits.length; j += 1) {
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while (carry > 0) {
            digits.push(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.reverse().join('');
}

function hextorgb(x){
    let r=x.charAt(1)+x.charAt(2);
    let g=x.charAt(3)+x.charAt(4);
    let b=x.charAt(5)+x.charAt(6);
    let rgb=`RGB (${hexToDec(r)}, ${hexToDec(g)}, ${hexToDec(b)})`;
    return rgb;
}

console.log(hextorgb("#3020ff"));
