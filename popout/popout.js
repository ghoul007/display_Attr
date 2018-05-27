var time1 = 150;
var time2 = 800;
var toggler = $('.checkbox__toggle');
var circle = $('.checkbox__checker');

/**
 * Storage Listener
 */
chrome.storage.sync.get(['enableFCN', 'data'], function (items) {

    if(items.data)
    {
        $('#input-20').val(items.data);
        $('.input--nariko').addClass('input--filled')
    }
    if (items.enableFCN) {
        $('.checkbox__checker').click()
        activeSwitch(circle)
    } else {
        disactiveSwitch(circle);
    }
})

/**
 * Event click 
 */
toggler.click(function () {
    if ($(this).is(":checked")) {
        activeSwitch(circle)
        enableFormControlName();
    }
    else {
        disactiveSwitch(circle);
        disableFormControlName();
    }
})

/**
 * switch active
 * @param {Dom} circle 
 */
function activeSwitch(circle) {
    circle.removeClass('anim--speed');
    setTimeout(function () {
        circle.addClass('anim--speed');
    }, 10);
    setTimeout(function () {
        circle.addClass('anim--go-right');
    }, time1);
}


/**
 * switch disactive
 * @param {Dom} circle 
 */
function disactiveSwitch(circle1) {

    circle1.removeClass('anim--speed');
    setTimeout(function () {
        circle1.addClass('anim--speed');
    }, 10);
    setTimeout(function () {
        circle1.removeClass('anim--go-right');
    }, time1);
}



/**
 * enableFormControlName
 */
function enableFormControlName() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        persistData({ 'enableFCN': true, data: $('#input-20').val() })
        chrome.tabs.sendMessage(tabs[0].id, { action: "enableFormControlName", data: $('#input-20').val() })
    })
}

/**
 * disableFormControlName
 */
function disableFormControlName() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        persistData({ 'enableFCN': false, data: $('#input-20').val() })
        chrome.tabs.sendMessage(tabs[0].id, { action: "disableFormControlName", data: $('#input-20').val() })
    })
}

/**
 * save date in store
 * @param {object} status 
 */
function persistData(status) {
    chrome.storage.sync.set(status)
}





 