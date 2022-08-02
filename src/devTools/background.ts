const backend = "acs-communications-monitor";
const frontend = "devtools_panel";

var ports:Record<string, chrome.runtime.Port> = {};

chrome.runtime.onConnectExternal.addListener(function(port) {
  if(port.name === backend) {
    ports[backend] = port;
    port.onMessage.addListener(function(msg) {
      //forward to frontend
      ports[frontend].postMessage(msg);
    });
  }
});

chrome.runtime.onConnect.addListener(function(port) {
  if(port.name === frontend) {
    ports[frontend] = port;
    port.onMessage.addListener(function(msg) {
      //forward to backend
      ports[backend].postMessage(msg);
    });
  }
});

export {}