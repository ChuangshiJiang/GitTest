let p = {
    x:1,
};

let  o = Object.create(p);

// console.log(o.isPrototypeOf(p));
// console.log(p.isPrototypeOf(o));

console.log(Object.isExtensible(p));

Object.preventExtensions(p);

console.log(Object.isExtensible(p));

p.y = 3;

console.log(p.y);

console.log(Object.isSealed(p));

Object.freeze(p);
console.log(Object.isSealed(p));
