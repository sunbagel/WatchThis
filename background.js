//background script automatically executed when installed or refreshed
//must inject foreground script

// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         //regex
//         //test if url is www.google
//         if(/^https:\/\/www\.google/.test(current_tab_info.url)){
//             chrome.tabs.insertCSS(null, {file: './testing.css'});
//             // chrome.tabs.executeScript(null, {file: './content.js'});
//             // chrome.tabs.executeScript(null, {file: './node_modules./animejs./lib./anime.js'});
//             // chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log("i injected"));
            
//         }
//     });
// });
