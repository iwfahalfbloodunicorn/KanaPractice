const toggleBtn = document.getElementById('toggle-btn');
var currentMode = JSON.parse(localStorage.getItem('isDarkMode')) || 'hirakana';
modetext = "混合";
if (currentMode === 'hiragana') {
    modetext = "平假名";
  } else if (currentMode === 'katakana') {
    modetext = "片假名";
  } 
toggleBtn.innerHTML = modetext;

function toggleMode() {
    if (currentMode === 'hiragana') {
        currentMode = 'katakana';
      } else if (currentMode === 'katakana') {
        currentMode = 'mixed';
      } else {
        currentMode = 'hiragana';
      }
    localStorage.setItem('isDarkMode', JSON.stringify(currentMode));
    // location.reload();// 有点奇怪，如果不加这行代码，按enter触发location.reload就不会存储模式
    // 但是在这里刷新一发的话，就能成功存储。
    // 很神奇呢。

    // 破案了，原因是因为在focus一个button的情况下，enter键也是切换模式的意思……
    // 所以每次一按enter，都会1切换模式，2刷新页面，自然就保存了。
    // 解决方法也很简单，focus回inputbox就好了。
    // inputBox.focus();
    //但是本来设定上切换了模式也要刷新，所以还是刷新一次吧。
    location.reload()

    // applyMode();
}

// function applyMode() {
//     if (isDarkMode) {
//         document.body.style.backgroundColor = '#333';
//         document.body.style.color = '#fff';
//     } else {
//         document.body.style.backgroundColor = '#fff';
//         document.body.style.color = '#333';
//     }
// }

toggleBtn.addEventListener('click', toggleMode);
applyMode();