
let code = `
/*这个是用scss生成的css，所以没有缩进和换行*/
/*我将展示用CSS画皮卡丘的过程*/
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
    transition: all .4s;}
  
  body {
    background-color: #ffe600;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; }
    body .main-wrapper {
      width: 100%;
      height: 5.26316rem;
      position: relative; }
      body .main-wrapper .nose {
        width: 0;
        height: 0;
        border-radius: 50%;
        border: 0.34211rem solid red;
        border-width: 0.34211rem 0.36842rem;
        border-color: black transparent transparent transparent;
        position: absolute;
        top: 0.52632rem;
        left: 50%;
        transform: translateX(-50%); }
      body .main-wrapper .eye {
        width: 1.44737rem;
        height: 1.44737rem;
        border-radius: 50%;
        background-color: #2e2e2e;
        position: relative; }
      body .main-wrapper .eye::before {
        content: '';
        display: block;
        width: 0.57895rem;
        height: 0.57895rem;
        border: 0.05263rem solid black;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        top: 0.05263rem;
        left: 0.18421rem; }
      body .main-wrapper .right {
        position: absolute;
        left: 50%;
        transform: translateX(1.84211rem); }
      body .main-wrapper .left {
        position: absolute;
        right: 50%;
        transform: translateX(-1.84211rem); }
      body .main-wrapper .cheek {
        width: 1.89474rem;
        height: 1.89474rem;
        border: 0.05263rem solid black;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: 2.5rem; }
      body .main-wrapper .cheek-right {
        position: absolute;
        left: 50%;
        transform: translateX(2.5rem); }
      body .main-wrapper .cheek-left {
        position: absolute;
        right: 50%;
        transform: translateX(-2.5rem); }
      body .main-wrapper .upper-lip {
        width: 1.84211rem;
        height: 0.39474rem;
        position: absolute;
        top: 1.5rem;
        border: 2px solid black;
        background-color: #ffe600;
        z-index: 1; }
      body .main-wrapper .lip-left {
        border-bottom-left-radius: 0.52632rem;
        border-top: none;
        border-right: none;
        transform: rotate(-15deg);
        position: absolute;
        right: 50%; }
      body .main-wrapper .lip-right {
        border-bottom-right-radius: 0.52632rem;
        border-top: none;
        border-left: none;
        transform: rotate(15deg);
        position: absolute;
        left: 50%; }
      body .main-wrapper .lower-lip-wrapper {
        width: 3.94737rem;
        height: 3.94737rem;
        position: absolute;
        top: 1.63158rem;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden; }
      body .main-wrapper .lower-lip {
        height: 23.68421rem;
        width: 3.94737rem;
        border-radius: 50% 50%;
        border: 0.05263rem solid black;
        background-color: #9b000a;
        position: absolute;
        bottom: 0;
        z-index: -1;
        overflow: hidden; }
      body .main-wrapper .lower-lip::after {
        content: '';
        display: block;
        width: 3.42105rem;
        height: 3.42105rem;
        border-radius: 50%;
        background-color: #ff485f;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%); }
  /*好了， 3s 之后我就要把删掉代码了*/
`

function writeCode(ele, prefix, code, callbackFn) {
  let domCode = document.querySelector(ele)
  domCode.innerHTML = prefix
  let styleTag = document.createElement('style')
  document.head.appendChild(styleTag)
  let n = 0
  let timer = setInterval(function () {
    if (n < code.length) {
      n += 1
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
      styleTag.innerHTML = prefix + code.substring(0, n)
      let h = domCode.offsetHeight
      domCode.scrollTo(0, h)
    } else if (n >= code.length) {
      window.clearInterval(timer)
      callbackFn()
    }
  }, 10)
}

writeCode('#code', '', code, function () {
  setTimeout(function () {
    document.getElementById('code').remove()
  }, 3000)
})