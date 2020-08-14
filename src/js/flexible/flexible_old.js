(function flexible(window, document) {
  let docElement = document.documentElement; // 文档内容
  let dpr = window.devicePixelRatio || 1; // 1
  // 调整body 的字体大小
  function setBodyFontSize() {
    if (document.body) {
      // body 存在改变字体
      console.log(document.body.style.fontSize)
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      // 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，
      // 而无需等待样式表、图像和子框架的完全加载。
      // 等待其所属script之前的样式表加载解析完成才会触发。
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();
  // 给html 元素增加一个style样式 style="font-size: 83.4px;"
  function setRemUnit() {
    let rem = docElement.clientWidth / 10; // 十分之一文档的宽度
    docElement.style.fontSize = `${rem}px`;
  }
  setRemUnit();
  // 文档视图调整大小时 触发 resize 事件
  window.addEventListener("resize", setRemUnit);
  // 当一条会话历史记录被执行的时候将会触发页面显示(pageshow)事件。
  // (这包括了后退/前进按钮操作，同时也会在onload 事件触发后初始化页面时触发)
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      // 表示网页来自缓存
      setRemUnit();
    }
  });
  // 检测0.5 px 支持
  if (dpr >= 2) {
    // 伪造一个body
    let fakeBody = document.createElement("body");
    let testDiv = document.createElement("div");
    testDiv.style.border = ".5px solid red";
    // 把测试的div元素插入body中
    fakeBody.appendChild(testDiv);
    docElement.appendChild(fakeBody)
    if (testDiv.offsetHeight === 1) {
      // 它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。
      docElement.classList.add('hairlines') // 虽然 element.classList 本身是只读的，但是你可以使用 add() 和 remove() 方法修改它。
    }
    // 移除body
    docElement.removeChild(fakeBody)
  }

})(window, document);
