const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = chrome.runtime.getURL("hamivideo.webp");
document.head.appendChild(link);
