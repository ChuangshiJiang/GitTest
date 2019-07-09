import { name, getName, Animal, Directions, Options,foo } from '../types/foo';

console.log(name);
let myName = getName();
let cat = new Animal('tom');
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];

let options: Options = {
  data: {
    name: 'foo'
  }
}

console.log(foo.name);
foo.bar.baz();