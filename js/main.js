/**
 * Created by wyc on 15-5-24.
 */

//window.alert(qr.VERSION);


chrome.windows.getLastFocused({populate:true}, function( window ){
    chrome.tabs.getSelected(window.id, function(tab){
        var url = tab.url;
        //var tabId = tab.id;
        //var content = document.createTextNode(tabId+":"+url);
        //document.getElementById("qrContentBox").appendChild(content);
        qr.canvas(
            {
                canvas: document.getElementById("qrCodeBox"),
                value: url,
                size: 5, //1-10 — actual size of the QR code symbol and is scaled to 25 pixels
                level:"M"//L, M, Q, H
            });
    });
});


