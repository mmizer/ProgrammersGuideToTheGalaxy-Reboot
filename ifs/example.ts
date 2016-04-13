var conditionalBoolean = (value:boolean) => {
    if (value) {
        return "value is true";
    } else {
        return "value is false";
    }
};

var conditionalInt = (value:number) => {
    if (value < 0) {
        return "value is negaive";
    } else if (value > 0) {
        return "value is positive";
    } else {
        return "value is zero";
    }
};

var conditionalString = (value:string) => {
    if (value == "tea") {
        return "Thanks for the tea!"
    } else {
        return "Do you have any tea?"
    }
};

var conditionalAndOr = (x:number, y:number) => {
    if (x > 0 && y > 0) {
        return "x and y are both positive";
    } else if (x > 0 || y > 0) {
        return "either x or y is positive";
    } else {
        return "x and y are both 0 or negative";
    }
};

var conditionalTruthyFalsy = (value:any) => {
    if (value) {
        return "value is truthy";
    } else {
        return "value is falsy";
    }
};

var trueResponse = conditionalBoolean(true);
console.log(trueResponse);

var falseResponse = conditionalBoolean(false);
console.log(falseResponse);

var negativeResponse = conditionalInt(-1);
console.log(negativeResponse);

var positiveResponse = conditionalInt(1);
console.log(positiveResponse);

var zeroResponse = conditionalInt(0);
console.log(zeroResponse);

var rumResponse = conditionalString("tea");
console.log(rumResponse);

var nonRumResponse = conditionalString("almost, but not quite, entirely unlike tea");
console.log(nonRumResponse);

var andResponse = conditionalAndOr(13, 34);
console.log(andResponse);

var orResponse = conditionalAndOr(7, -8);
console.log(orResponse);

var elseResponse = conditionalAndOr(-12, 0);
console.log(elseResponse);

var truthyResponse1 = conditionalTruthyFalsy(true);
var truthyResponse2 = conditionalTruthyFalsy(1);
var truthyResponse3 = conditionalTruthyFalsy("bumbo");
var truthyResponse4 = conditionalTruthyFalsy("true");
var truthyResponse5 = conditionalTruthyFalsy("false");
var truthyResponse6 = conditionalTruthyFalsy("0");
var truthyResponse7 = conditionalTruthyFalsy([]);
var truthyResponse8 = conditionalTruthyFalsy({});

console.log(truthyResponse1);
console.log(truthyResponse2);
console.log(truthyResponse3);
console.log(truthyResponse4);
console.log(truthyResponse5);
console.log(truthyResponse6);
console.log(truthyResponse7);
console.log(truthyResponse8);

var falsyResponse1 = conditionalTruthyFalsy(false);
var falsyResponse2 = conditionalTruthyFalsy(0);
var falsyResponse3 = conditionalTruthyFalsy("");
var falsyResponse4 = conditionalTruthyFalsy(null);
var falsyResponse5 = conditionalTruthyFalsy(undefined);

console.log(falsyResponse1);
console.log(falsyResponse2);
console.log(falsyResponse3);
console.log(falsyResponse4);
console.log(falsyResponse5);