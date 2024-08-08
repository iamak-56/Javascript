// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an eqaulity check == and comparsions >< >= <= work differently.
// comparsions convert null to a numbar, treating it as 0.
// that's why (3) null >= 0 is trye and (1) null >0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



//  === 

console.log("2" === 2);
