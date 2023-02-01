// ==UserScript==
// @name         names button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MTL CAN'T STOP ME
// @author       chujuchuchu
// @icon         https://pbs.twimg.com/profile_images/1614478926566555649/ZkyIo06a_400x400.jpg
// @grant        none
// ==/UserScript==

(function() {

    window.addEventListener('load', () => {
    addButton('replace names', replacenames)
    })

    function tempAlert(msg, duration)
    {
        var el = document.createElement("div");
        el.setAttribute("style", "position:fixed; bottom:16%; left:4%; background-color:green");
        el.innerHTML = msg;
        setTimeout(function(){
            el.parentNode.removeChild(el);
        }, duration);
        document.body.appendChild(el);
    }

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'fixed', bottom: '13%', left:'4%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function replacenames() {
        var namesreplace = names;
        var totalnames = namesreplace.length;

        var hangulnames = [];
        hangulnames.length = namesreplace.length;

        var romannames = [];
        romannames.length = namesreplace.length;

        for (let i = 0; i < namesreplace.length; i++) {
            let splittext = namesreplace[i].split(",");
            let punctreplace = splittext[0].replaceAll("([[:punct:]])","([^A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])");
            let regtext = new RegExp(punctreplace.replaceAll("(\w)","([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])"), "g");

            hangulnames[i] = regtext;
            romannames[i] = splittext[1];
        }

        var inputNode = null;

        if (document.URL.includes("kakao")) {
            var shadowNode = document.querySelector("#__next > div > div.flex.w-full.grow.flex-col > div > div.absolute.h-full.w-full > div.mx-auto.flex.h-full.items-center.justify-center.py-\\[10vh\\] > div.h-full.w-full.flex-auto.css-seffmo > div > div")
            inputNode = shadowNode.shadowRoot.querySelector('div > div');
        }
        else {
            inputNode = document.body;
        }

        var txtWalker = document.createTreeWalker (
            inputNode,
            NodeFilter.SHOW_TEXT,
            { acceptNode: function (node) {
                if (node.nodeValue.trim() ) {
                    return NodeFilter.FILTER_ACCEPT; }

                return NodeFilter.FILTER_SKIP;
            }
            },

            false
        );

        var txtNode = null;

        while (txtNode = txtWalker.nextNode () ) {
            var oldTxt = txtNode.nodeValue;

            for (let i = 0; i < totalnames; i++) {
                oldTxt = oldTxt.replaceAll(hangulnames[i], romannames[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

        tempAlert("names replaced", 1000);
    }

    setTimeout(function() {

        var namesreplace = names;
        var totalnames = namesreplace.length;

        var hangulnames = [];
        hangulnames.length = namesreplace.length;

        var romannames = [];
        romannames.length = namesreplace.length;

        for (let i = 0; i < namesreplace.length; i++) {
            let splittext = namesreplace[i].split(",");
            let punctreplace = splittext[0].replaceAll("([[:punct:]])","([^A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])");
            let regtext = new RegExp(punctreplace.replaceAll("(\w)","([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])"), "g");

            hangulnames[i] = regtext;
            romannames[i] = splittext[1];
        }

        var inputNode = null;

        if (document.URL.includes("kakao")) {
            var shadowNode = document.querySelector("#__next > div > div.flex.w-full.grow.flex-col > div > div.absolute.h-full.w-full > div.mx-auto.flex.h-full.items-center.justify-center.py-\\[10vh\\] > div.h-full.w-full.flex-auto.css-seffmo > div > div")
            inputNode = shadowNode.shadowRoot.querySelector('div > div');
        }
        else {
            inputNode = document.body;
        }

        var txtWalker = document.createTreeWalker (
            inputNode,
            NodeFilter.SHOW_TEXT,
            { acceptNode: function (node) {
                if (node.nodeValue.trim() ) {
                    return NodeFilter.FILTER_ACCEPT; }

                return NodeFilter.FILTER_SKIP;
            }
            },

            false
        );

        var txtNode = null;

        while (txtNode = txtWalker.nextNode () ) {
            var oldTxt = txtNode.nodeValue;

            for (let i = 0; i < totalnames; i++) {
                oldTxt = oldTxt.replaceAll(hangulnames[i], romannames[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

        tempAlert("names replaced", 1000);


    }, 2000);

})();
