
var filterString=[""];


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");


        // if (request.greeting == "hello")
        //     sendResponse({farewell: "goodbye"});
        if(sender.tab==null)//popup页发来的消息
        {
            if(request.filterString!=null)
            {
                var receiveString=request.filterString;
                console.log("popup message :"+receiveString);
                filterString = receiveString.split(";");
                sendResponse({receive:"success"});
            }
        }else {
            //content script 发来的消息
            sendResponse({filterString:filterString});

        }

    });