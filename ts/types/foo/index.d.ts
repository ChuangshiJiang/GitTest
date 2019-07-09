export const name:string;
export function getName():string;
export class Animal {
  constructor(name:string);
  sayHi():string;
}

export enum Directions{
  Up,Down,Left,Right
}

export interface Options{
  data:any
}

export namespace foo{
  const name:string;
  namespace bar{
    function baz():string;
  }
}