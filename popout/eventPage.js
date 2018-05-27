chrome.storage.onChanged.addListener(function (changes) {
    // if( changes.enableFCN && changes.enableFCN.newValue){

        chrome.browserAction.setBadgeText({ 'text': changes.data.newValue })
    // }else{
        // chrome.browserAction.setBadgeText({ 'text': "" })

    // }
})