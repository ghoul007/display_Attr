

chrome.storage.sync.set({ 'enableFCN': false, 'data': "" })


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "enableFormControlName") {
        if (request.data) {
            enableFormControlName(request.data);
        }
    } else if (request.action == "disableFormControlName") {
        if (request.data) {
            disableFormControlName(request.data);
        }
    }

})

/**
 * enable display formcontrolName
 */
function enableFormControlName(data) {
    var data = data.toLowerCase()
    console.log(data)
    var fields = document.querySelectorAll(`[${data}]`);
    for (var $i = 0; $i < fields.length; $i++) {
        console.log(fields[$i].getAttribute(data));
        var model = fields[$i].getAttribute(data);
        var span = document.createElement("span");
        span.setAttribute("class", "model_debug label w-500 label-info tooltip")
        if (model.length > 15) {
            span.textContent = model.slice(0, 15) + "...";

        } else {
            span.textContent = model.slice(0, 15);

        }

        var spanTooltip = document.createElement("span");
        spanTooltip.setAttribute("class", "tooltiptext");
        spanTooltip.textContent = model;

        span.appendChild(spanTooltip);

        if (fields[$i].closest("div[class^='col-']")) {
            fields[$i].closest("div[class^='col-']").append(span);
        } else {
            $(fields[$i]).parent().append(span);

        }
    }
}

/**
 * disable display formcontrolName
 */
function disableFormControlName() {
    $('.model_debug').remove();
}

