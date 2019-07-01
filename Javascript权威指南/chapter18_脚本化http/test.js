//带记忆的斐波那契数列
let fibonacci = (n) => {
  if (n < 1) throw new Error('??????');
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let memory = (fn) => {
  let obj = {};
  return function (n) {
    if (obj[n] === undefined) obj[n] = fn(n);
    return obj[n];
  }
}

fibonacci = memory(fibonacci);

// for(let i = 0;i<160;i++){
// 	console.log(`${i+1}       `,fibonacci(i+1));
// }

console.log(Math.pow(2, 160));
console.log(fibonacci(160));

//使用HEAD和CORS请求链接详细信息
/**
 * linkdetails.js
 * 
 * 这个常见的Javascript模块查询由href属性但是没有title属性的所有<a>元素
 * 并给它们注册onmouseover事件处理程序
 * 这个事件处理程序使用XMLHttpRequest HEAD 请求获得链接资源的详细信息
 * 然后把这些详细信息设置喂链接的 title 属性
 * 这样它们将会在工具提示用显示
 */

whenReady(function () {
  //是否有机会使用跨域请求？
  let supportCORS = (new XMLHttpRequest()).withCredentials !== undefined;

  //遍历文档中的所有链接
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if (!link.href) continue;//跳过没有超链的锚点
    if (link.title) continue;//跳过已有工具提示的链接
    //如果这是一个跨域链接
    if (link.host !== location.host || link.protocol !== location.protocol) {
      link.title = '站外链接';//假设我们不能得到任何消息
      if (!supportCORS) continue;//如果没有CORS支持就退出
      //否则我们能了解这个链接的更多信息
      //所以继续前进，注册事件处理程序，于是我们尝试
    }

    //注册事件处理程序，当鼠标悬停时下载链接详细信息
    if (link.addEventListener) {
      link.addEventListener('mouseover', mouseHandler, false);
    } else {
      link.attachEvent('mouseover', mouseHandler);
    }
  }

  function mouseHandler (e) {
    let link = e.target || e.srcElement;//<a>元素
    let url = link.href;//链接URL
    let req = new XMLHttpRequest();//新请求
    req.open('HEAD', url);//仅仅询问头信息
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;//忽略未完成的请求
      if (req.status === 200) {
        let type = req.getResponseHeader('Content-Type');//获取链接的详细情况
        let size = req.getResponseHeader('Content-length');
        let date = req.getResponseHeader('Last-Modified');
        //在工具提示中显示详细信息
        link.title = `类型: ${type} \n 大小: ${size} \n 时间: ${date}`;
      } else {
        //如果请求失败，且链接没有“站外链接”的工具提示
        //那么显示这个错误
        if (!link.title) {
          link.title = `Couldn't fetch details: \n ${req.status, req.statusText}`;
        }
      }
    }

    req.send(null);
    //移除处理程序，仅想一次获取这些头信息
    if (link.removeEventListener) {
      link.removeEventListener('mouseover', mouseHandler, false);
    } else {
      link.detachEvent('mouseover', mouseHandler);
    }
  }

});