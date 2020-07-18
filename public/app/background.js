(function() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        console.log('Where should we send this url:' + tab.url)
    })

}());