const t={startBtn:document.querySelector("button[data-start]"),closeBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.closeBtn.disabled=!0;let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,t.closeBtn.disabled=!1})),t.closeBtn.addEventListener("click",(()=>{clearInterval(e),t.closeBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.6a957b1a.js.map
