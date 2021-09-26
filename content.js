
    var script = document.createElement('script');
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.extension.getURL('foreground.js'));
    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    head.insertBefore(script, head.lastChild);

// import anime from "node_modules/animejs/lib/anime.js";

// export function anime(){
//     return anime;
// }