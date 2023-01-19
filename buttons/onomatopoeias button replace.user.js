// ==UserScript==
// @name         onomatopoeias button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MTL CAN'T STOP ME
// @author       chujuchuchu
// @icon         https://pbs.twimg.com/profile_images/1614478926566555649/ZkyIo06a_400x400.jpg
// @grant        none
// ==/UserScript==

(function() {

    window.addEventListener('load', () => {
    addButton('replace onos', replaceonos)
    })

    function tempAlert(msg, duration)
    {
        var el = document.createElement("div");
        el.setAttribute("style", "position: fixed; bottom: 16%; left: 4%; background-color: green");
        el.innerHTML = msg;
        setTimeout(function(){
            el.parentNode.removeChild(el);
        }, duration);
        document.body.appendChild(el);
    }

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'fixed', bottom: '9%', left:'4%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function replaceonos() {

        var onomatopoeiasreplace = onomatopoeias;
        var totalonomatopoeias = onomatopoeiasreplace.length;

        var hangulonomatopoeias = [];
        hangulonomatopoeias.length = 6 * totalonomatopoeias;

        var romanonomatopoeias = [];
        romanonomatopoeias.length = 6 * totalonomatopoeias;

        //var punctuation = "\"“️'-‧–—―〜 !！#$%&(（₍)）₎︶*,、.｡。/:;?？@[［]］^＿ˋ｀|｜~´ˊ⟨˘˚‘’“”′‿〈〉《》￥「」『』【₩】〔〕⸜⸝+<＜=>＞≪≫×∀∂∑∠∥∴≒■□▲▶▷▼▽◀◁◄○◎◟◠↑↗→↳➝☞↘↓☜↖─│┃└┗├©°·･・…☆★☺♡♥♨♩♪♫♬♭✿❀❤⑅✋•※④⑤㎝㎠㎏㎡㎃㎜𓐍-𓐍👍🙂"
        var punctuation = "[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]"
        var punctreplace = "([^" + punctuation + "])"

        for (let i = 0; i < onomatopoeiasreplace.length; i++) {

            let splittext = onomatopoeiasreplace[i].split(";");
            let comma_0 = ", " + splittext[0] + punctreplace;
            let comma_1 = ", " + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6] = new RegExp(comma_0, "g");
            romanonomatopoeias[i*6] = comma_1;

            let ellipse_space_0 = "… " + splittext[0] + punctreplace;
            let ellipse_space_1 = "… " + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6+1] = new RegExp(ellipse_space_0, "g");
            romanonomatopoeias[i*6+1] = ellipse_space_1;

            let ellipse_nospace_0 = "…" + splittext[0] + punctreplace;
            let ellipse_nospace_1 = "…" + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6+2] = new RegExp(ellipse_nospace_0, "g");
            romanonomatopoeias[i*6+2] = ellipse_nospace_1;

            let punct_space_0 = punctreplace + " " + splittext[0] + punctreplace;
            let punct_space_1 = "$1 " + splittext[1] + "$2";
            hangulonomatopoeias[i*6+3] = new RegExp(punct_space_0, "g");
            romanonomatopoeias[i*6+3] = punct_space_1

            let punct_nospace_0 = punctreplace + splittext[0] + punctreplace;
            let punct_nospace_1 = "$1" + splittext[1] + "$2";
            hangulonomatopoeias[i*6+4] = new RegExp(punct_nospace_0, "g");
            romanonomatopoeias[i*6+4] = punct_nospace_1;

            let newline_0 = "^" + splittext[0] + punctreplace;
            let newline_1 = splittext[1] + "$1";
            hangulonomatopoeias[i*6+5] = new RegExp(newline_0, "g");
            romanonomatopoeias[i*6+5] = newline_1;


        }

        var txtWalker = document.createTreeWalker (
            document.body,
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

            for (let i = 0; i < 6 * totalonomatopoeias; i++) {
                oldTxt = oldTxt.replaceAll(hangulonomatopoeias[i], romanonomatopoeias[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

        tempAlert("onos replaced", 1000);

    }

    setTimeout(function() {
        var onomatopoeiasreplace = onomatopoeias;
        var totalonomatopoeias = onomatopoeiasreplace.length;

        var hangulonomatopoeias = [];
        hangulonomatopoeias.length = 6 * totalonomatopoeias;

        var romanonomatopoeias = [];
        romanonomatopoeias.length = 6 * totalonomatopoeias;

        //var punctuation = "\"“️'-‧–—―〜 !！#$%&(（₍)）₎︶*,、.｡。/:;?？@[［]］^＿ˋ｀|｜~´ˊ⟨˘˚‘’“”′‿〈〉《》￥「」『』【₩】〔〕⸜⸝+<＜=>＞≪≫×∀∂∑∠∥∴≒■□▲▶▷▼▽◀◁◄○◎◟◠↑↗→↳➝☞↘↓☜↖─│┃└┗├©°·･・…☆★☺♡♥♨♩♪♫♬♭✿❀❤⑅✋•※④⑤㎝㎠㎏㎡㎃㎜𓐍-𓐍👍🙂"
        var punctuation = "[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]"
        var punctreplace = "([^" + punctuation + "])"

        for (let i = 0; i < onomatopoeiasreplace.length; i++) {

            let splittext = onomatopoeiasreplace[i].split(";");
            let comma_0 = ", " + splittext[0] + punctreplace;
            let comma_1 = ", " + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6] = new RegExp(comma_0, "g");
            romanonomatopoeias[i*6] = comma_1;

            let ellipse_space_0 = "… " + splittext[0] + punctreplace;
            let ellipse_space_1 = "… " + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6+1] = new RegExp(ellipse_space_0, "g");
            romanonomatopoeias[i*6+1] = ellipse_space_1;

            let ellipse_nospace_0 = "…" + splittext[0] + punctreplace;
            let ellipse_nospace_1 = "…" + splittext[1].toLowerCase() + "$1";
            hangulonomatopoeias[i*6+2] = new RegExp(ellipse_nospace_0, "g");
            romanonomatopoeias[i*6+2] = ellipse_nospace_1;

            let punct_space_0 = punctreplace + " " + splittext[0] + punctreplace;
            let punct_space_1 = "$1 " + splittext[1] + "$2";
            hangulonomatopoeias[i*6+3] = new RegExp(punct_space_0, "g");
            romanonomatopoeias[i*6+3] = punct_space_1

            let punct_nospace_0 = punctreplace + splittext[0] + punctreplace;
            let punct_nospace_1 = "$1" + splittext[1] + "$2";
            hangulonomatopoeias[i*6+4] = new RegExp(punct_nospace_0, "g");
            romanonomatopoeias[i*6+4] = punct_nospace_1;

            let newline_0 = "^" + splittext[0] + punctreplace;
            let newline_1 = splittext[1] + "$1";
            hangulonomatopoeias[i*6+5] = new RegExp(newline_0, "g");
            romanonomatopoeias[i*6+5] = newline_1;


        }

        var txtWalker = document.createTreeWalker (
            document.body,
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

            for (let i = 0; i < 6 * totalonomatopoeias; i++) {
                oldTxt = oldTxt.replaceAll(hangulonomatopoeias[i], romanonomatopoeias[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

        tempAlert("onos replaced", 1000);

    }, 2000);

})();

var onomatopoeias = ["아아아아아악;Aaaaaack",
                     "으아아아아;Euaaaah",
                     "히이이이익;Hiiiiik",
                     "아아어오;Aauo",
                     "으아아악;Euaaack",
                     "으애애앵;Uweeeng",
                     "으어어엉;Euuuung",
                     "하하호호;Hahahoho",
                     "흐애애앵;Heueeeng",
                     "끄으으;Guuuh",
                     "아아아;Aaah",
                     "아아악;Aaack",
                     "아으으;Auuu",
                     "아으응;Auung",
                     "아이구;Aigoo",
                     "아이쿠;Aiguu",
                     "어어어;Oooh",
                     "우에엥;Uweeng",
                     "우에헥;Uwehek",
                     "으아아;Uwaah",
                     "으아앙;Uwaang",
                     "으으응;Eunng",
                     "하아앙;Haaang",
                     "하우으;Hauu",
                     "하으윽;Hauuk",
                     "하으읏;Hauuh",
                     "후우우;Huuu",
                     "흐아아;Heuaa",
                     "흐아앙;Heuaang",
                     "흐어엉;Heuuung",
                     "흐에에;Heueeh",
                     "흐우웁;Heuuup",
                     "흐우읏;Heuuuh",
                     "흐으윽;Heuuuk",
                     "흐으응;Heuuung",
                     "흐후윽;Heuuuk",
                     "쏴아아;Shwaah",
                     "똑똑;Knock knock",
                     "아아;Aah",
                     "아악;Aack",
                     "아앗;Aah",
                     "아오;Aoh",
                     "아우;Aoo",
                     "아으;Au",
                     "아윽;Auk",
                     "아읍;Aup",
                     "아읏;Auh",
                     "아응;Aung",
                     "아흐;Aheu",
                     "아흡;Aheub",
                     "어어;Eoo",
                     "어엉;Euung",
                     "어으;Uuh",
                     "어헝;Euhng",
                     "어후;Eohu",
                     "어휴;Uhuu",
                     "어머;Omo",
                     "엉엉;Ungg",
                     "우와;Uwah",
                     "우욱;Uuk",
                     "우웁;Euup",
                     "우웅;Uung",
                     "우으;Euu",
                     "우응;Uung",
                     "우훅;Uhuk",
                     "웨에;Weeh",
                     "으아;Uwah",
                     "으악;Uwak",
                     "으억;Euok",
                     "으으;Euu",
                     "으음;Euum",
                     "으읍;Euup",
                     "으읏;Euu",
                     "으응;Euung",
                     "으쿳;Eukeuh",
                     "으큭;Eugkeuk",
                     "으학;Euhak",
                     "으헉;Euheok",
                     "으헙;Euheop",
                     "으흑;Euheuk",
                     "으흠;Ahem",
                     "으흣;Euheuh",
                     "으흥;Euheung",
                     "콜록;Cough cough",
                     "크욱;Keuuk",
                     "크으;Keuu",
                     "크후;Keuhuu",
                     "크흑;Keuheuk",
                     "크흠;Keuheum",
                     "크흣;Keuheuh",
                     "하아;Haa",
                     "하악;Haak",
                     "하앗;Haah",
                     "하앙;Haang",
                     "하우;Hau",
                     "하으;Hau",
                     "하윽;Hauk",
                     "하읏;Hauh",
                     "허억;Heook",
                     "허업;Heuup",
                     "허엉;Heuung",
                     "허허;Heoheo",
                     "후우;Huu",
                     "후욱;Huuk",
                     "후으;Hueu",
                     "흐흥;Heuheung",
                     "후후;Huhu",
                     "흐아;Heua",
                     "흐앙;Heuang",
                     "흐악;Heuack",
                     "흐으;Heuu",
                     "흐엉;Heuung",
                     "흐윽;Heuuk",
                     "흐읍;Heuup",
                     "흐읏;Heuuh",
                     "흐응;Heunng",
                     "흐흑;Heuheuk",
                     "흠흠;Heumheum",
                     "히극;Higu",
                     "히윽;Heeuk",
                     "히익;Heek",
                     "끄윽;Kkeuk",
                     "끄;Gguh",
                     "똑;Knock",
                     "멍;Meong",
                     "브;Buh",
                     "씨;ssi",
                     "아;Ah",
                     "악;Ack",
                     "앗;Ah",
                     "앙;Ang",
                     "어;Oh",
                     "엉;Ung",
                     "억;Eok",
                     "오;Ohh",
                     "왕;Wang",
                     "우;Uu",
                     "욱;Uuk",
                     "웁;Eup",
                     "웃;Uuh",
                     "으;Eu",
                     "윽;Euk",
                     "음;Eum",
                     "읍;Eup",
                     "읏;Euh",
                     "응;Eung",
                     "자;Then",
                     "잠;Wai",
                     "커;Keo",
                     "컥;Keok",
                     "크;Keu",
                     "큼;Keum",
                     "끅;Kkeuk",
                     "탁;Tak",
                     "폭;Peuk",
                     "풉;Peub",
                     "풋;Peuh",
                     "하;Hah",
                     "학;Hak",
                     "핫;Hah",
                     "허;Heo",
                     "헉;Heok",
                     "형;Hyung",
                     "후;Huu",
                     "훅;Huuk",
                     "휴;Hyu",
                     "흐;Heu",
                     "흑;Heok",
                     "흠;Heum",
                     "흡;Heup",
                     "흣;Heuh",
                     "히;Hee",
                     "힉;Hiik",
                     "힛;Heeh",
                     "푸;Puh",
                     "흐으읍;Heuuup"


                 ];




