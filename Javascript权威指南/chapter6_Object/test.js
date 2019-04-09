let p = {
    x:1,
};

let  o = Object.create(p);

// console.log(o.isPrototypeOf(p));
// console.log(p.isPrototypeOf(o));

console.log('p是否可扩展：',Object.isExtensible(p));

Object.preventExtensions(p);

console.log('p是否可扩展：',Object.isExtensible(p));

p.y = 3;

console.log(p.y);

console.log('p是否被密封：',Object.isSealed(p));

Object.freeze(p);
console.log('p是否被密封：',Object.isSealed(p));

window.onload = ()=>{
    alert('document load finished');
}
