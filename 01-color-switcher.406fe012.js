!function(){var t={startBtn:document.querySelector("button[data-start]"),closeBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.closeBtn.disabled=!0;var n=null,e=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))};t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.body.style.backgroundColor=e()}),1e3),t.startBtn.disabled=!0,t.closeBtn.disabled=!1})),t.closeBtn.addEventListener("click",(function(){clearInterval(n),t.closeBtn.disabled=!0,t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.406fe012.js.map