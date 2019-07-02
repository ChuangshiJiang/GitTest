const arr = [1, 2, 3, 4, 5, 6];

const max = Math.max.apply(null, arr);

console.log(max);

function show(...arg){
  console.log(this.name,arg);
}

let person = {
  name:'jack',
  age:24
}

show.call(person,'男','爱好唱歌','宅男');
show.apply(person,['男','爱好唱歌','宅男']);

console.log(Math.max(2,52,56));

let arr1 = ['jack','tom','ketty'];

arr1.push('tomy','petter');

console.log(arr1);

//验证是否是数组（前提是toString()方法没有被重写过）
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log(isArray(12121));
console.log(isArray([]));
console.log(isArray({name:'jack'}));
