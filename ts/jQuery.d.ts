//声明类型语句的函数重载
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

//声明类
declare class Aniaml {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

//声明枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

//声明全局的命名空间
declare namespace jQuery {
  interface AjaxSettings {
    method?: 'GET' | 'POST',
    data?: any;
  }
  function ajax(url: string, settings?: AjaxSettings): void;
  const version: number;
  class Event {
    blur(eventType: EventType): void;
  }
  enum EventType {
    CustomClick
  }
}
