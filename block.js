//参考 https://stackoverflow.com/questions/20571381/using-content-script-to-remove-a-dom-element

// var elem1removed = false;
// var elem2removed = false;
// var elemParent = document.body; /* or whatever */
//
// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
//             // var node1 = mutation.target.querySelectorAll("div.ebox");
//             // if (node1) {
//             //
//             //     for(var i = 0;i<node1.length;i++)
//             //     {
//             //         if(node1[i].innerText.indexOf('哔哩哔哩番剧') != -1)
//             //         {
//             //             node1[i].parentNode.removeChild(node1[i]);
//             //         }
//             //     }
//             // }
//             var node1 = mutation.target.querySelector("div.ebox");
//             if(node1){
//                 node1.parentNode.removeChild(node1);
//             }
//
//             if (false) {
//                 observer.disconnect();
//             }
//         }
//     });
// });
//
// observer.observe(elemParent, {
//     childList: true,
//     subtree: true
// });



// var eboxs = document.getElementsByClassName("ebox");
// var element = document.querySelector('div.ebox');
// element.parentElement.removeChild(element);

// for (var i = 0;i<eboxs.length;i++)
// {
//     var curElement = eboxs[i];
//     if(eboxs[i].innerText.indexOf('哔哩哔哩番剧')!=-1)
//     {
//         // curElement.style.display="none";
//         eboxs.parentElement.removeChild(eboxs);
//     }
//
//
//     console.log(eboxs[i].innerText);
// }



// document.addEventListener("DOMContentLoaded", function(event) {
//     var eboxs = document.getElementsByClassName("ebox");
// // var element = document.querySelector('div.ebox');
// // element.parentElement.removeChild(element);
//
// for (var i = 0;i<eboxs.length;i++)
// {
//     var curElement = eboxs[i];
//     if(eboxs[i].innerText.indexOf('哔哩哔哩番剧')!=-1)
//     {
//         // curElement.style.display="none";
//         eboxs[i].parentElement.removeChild(eboxs[i]);
//     }
//
//     console.log(eboxs[i].innerText);
// }
//
// });
//

var styleElement = document.createElement("style");
styleElement.setAttribute("id", "stylish-3");
styleElement.setAttribute("type", "text/css");

styleElement.appendChild(document.createTextNode(".ebox {display: none !important;}"));

document.documentElement.appendChild(document.importNode(styleElement,true))
//
//
// document.addEventListener("DOMContentLoaded", function(event) {
//     var eboxs = document.getElementsByClassName("ebox");
// // var element = document.querySelector('div.ebox');
// // element.parentElement.removeChild(element);
//
// for (var i = 0;i<eboxs.length;i++)
// {
//     var curElement = eboxs[i];
//     if(eboxs[i].innerText.indexOf('哔哩哔哩番剧')!=-1)
//     {
//         // curElement.style.display="none";
//         //eboxs[i].parentElement.removeChild(eboxs[i]);
//         //eboxs[i].style.display='block';
//         eboxs[i].style.cssText=eboxs[i].style.cssText+"display:block;";
//     }
//
//     console.log(eboxs[i].innerHTML);
// }
//
// });

 /* or whatever */

// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
//             var node1 = mutation.target.querySelectorAll("div.ebox");
//             if (node1) {
//
//                 for(var i = 0;i<node1.length;i++)
//                 {
//                     if(node1[i].innerText.indexOf('哔哩哔哩番剧') != -1)
//                     {
//                         node1[i].style.display='block';
//                     }
//                 }
//             }
//
//
//             if (false) {
//                 observer.disconnect();
//             }
//         }
//     });
// });
//
// document.addEventListener("DOMContentLoaded", function(event) {
//
//     var elemParent = document.body;
//     observer.observe(elemParent, {
//         childList: true,
//         subtree: true
//     });
// });

function changecss() {
    var eboxs = document.getElementsByClassName("ebox");

    for (var i = 0;i<eboxs.length;i++)
    {
        var curElement = eboxs[i];
        if(eboxs[i].innerText.indexOf('哔哩哔哩番剧')!=-1)
        {
            // curElement.style.display="none";
            eboxs[i].style.cssText=eboxs[i].style.cssText+"display:block !important;";
        }


        console.log(eboxs[i].innerHTML);
        console.log(eboxs[i].style.cssText)
    }
}

setTimeout(
    changecss,5000

);