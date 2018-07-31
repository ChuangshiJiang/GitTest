
//异常处理函数
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
}

//给类型增加方法
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
}

//提取数字中的整数部分
Number.method('integer', function () {
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

//移除字符串末端空白
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

String.method('deentityify', function () {
    //字符实体表，它映射字符实体的名字到对应的字符
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    //返回 deentityify 方法
    return function () {
        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    }
}());

//构造带有记忆功能的函数
var memoizer = function(memo,fundamental){
    var shell = function(n){
        var result = memo[n];
        if(typeof result !== 'number'){
            result = fundamental(shell,n);
            memo[n] = result;
        }
        return result;
    }
    return shell;
}
