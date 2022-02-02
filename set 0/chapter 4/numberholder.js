function HoldingNum(num) {
    let private = {
        num:num
    };
    Object.defineProperties(this, {
        num: getAccessor(private, "num", "Number")
    });
}

function getAccessor(obj, key, type) {
    return {
        get: function () {
            return obj[key];
        },
        set: function (value) {
            if (typeOf(value) === type)
                obj[key] = value;
        }
    };
}

function typeOf(value) {
    return Object.prototype.toString.call(value).slice(8,-1);
}

let onlyNumbers = new HoldingNum(20);

onlyNumbers.num = "I wont be assigned to this variable"; 

console.log(onlyNumbers.num);
