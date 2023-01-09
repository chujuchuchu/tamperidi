// ==UserScript==
// @name         onomatopoeias replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ridibooks.com&size=64
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/onomatopoeias%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/onomatopoeias%20replace.user.js
// @grant        none
// ==/UserScript==

(function() {

    setTimeout(function() {

        var onomatopoeiasreplace = onomatopoeias;
        var totalonomatopoeias = onomatopoeiasreplace.length;

        var hangulonomatopoeias = [];
        hangulonomatopoeias.length = 6 * totalonomatopoeias;

        var romanonomatopoeias = [];
        romanonomatopoeias.length = 6 * totalonomatopoeias;

        //var punctuation = "\"“️'-‧–—―〜 !！#$%&(（₍)）₎︶*,、.｡。/:;?？@[［]］^＿ˋ｀|｜~´ˊ⟨˘˚‘’“”′‿〈〉《》￥「」『』【₩】〔〕⸜⸝+<＜=>＞≪≫×∀∂∑∠∥∴≒■□▲▶▷▼▽◀◁◄○◎◟◠↑↗→↳➝☞↘↓☜↖─│┃└┗├©°·･・…☆★☺♡♥♨♩♪♫♬♭✿❀❤⑅✋•※④⑤㎝㎠㎏㎡㎃㎜𓐍-𓐍👍🙂"
        var punctuation = "A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff"
        var punctreplace = "([^" + punctuation + "])"

        for (let i = 0; i < onomatopoeiasreplace.length; i++) {

            let splittext = onomatopoeiasreplace[i].split(";");
            let comma_0 = ", " + splittext[0] + punctreplace;
            let comma_1 = ", " + splittext[1].toLowerCase() + punctreplace;
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

            let punct_space_0 = punctreplace + splittext[0] + punctreplace;
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

    }, 2000);

})();

var onomatopoeias = ["으아아아아;Euaaaah",
                     "히이이이익;Hiiiiik",
                     "으아아악;Euaaack",
                     "으어어엉;Euuuung",
                     "아이쿠;Aiguu",
                     "아으으;Auuu",
                     "아아악;Aaack",
                     "으으응;Eunng",
                     "으아아;Uwaah",
                     "우에엥;Uweeng",
                     "어어어;Oooh",
                     "하우으;Hauu",
                     "하으윽;Hauuk",
                     "하으읏;Hauuh",
                     "후우우;Huuu",
                     "흐우읏;Heuuuh",
                     "흐으윽;Heuuuk",
                     "흐어엉;Heuuung",
                     "아악;Aack",
                     "아앗;Aah",
                     "아오;Aoh",
                     "아흐;Aheu",
                     "아우;Aoo",
                     "아으;Au",
                     "아읍;Aup",
                     "아응;Aung",
                     "우응;Uung",
                     "으으;Euu",
                     "으흠;Ahem",
                     "으악;Uwak",
                     "으헙;Euheop",
                     "으흑;Euheuk",
                     "으학;Euhak",
                     "우웁;Euup",
                     "으흣;Euheuh",
                     "으흥;Euheung",
                     "허업;Heuup",
                     "으읏;Euu",
                     "으읍;Euup",
                     "으음;Euum",
                     "어엉;Euung",
                     "어후;Eohu",
                     "어헝;Euhng",
                     "으헉;Euheok",
                     "으응;Euung",
                     "어휴;Uhuu",
                     "어으;Uuh",
                     "우욱;Uuk",
                     "우와;Uwah",
                     "크흑;Keuheuk",
                     "크흠;Keuheum",
                     "하악;Haak",
                     "하앗;Haah",
                     "하우;Hau",
                     "하읏;Hauh",
                     "하윽;Hauk",
                     "하아;Haa",
                     "하앙;Haang",
                     "허억;Heook",
                     "흐읏;Heuuh",
                     "흐읍;Heuup",
                     "허허;Heoheo",
                     "흐으;Heuu",
                     "흐아;Heua",
                     "후우;Huu",
                     "흐윽;Heuuk",
                     "흐응;Heunng",
                     "히익;Heek",
                     "허엉;Heuung",
                     "콜록;Cough cough",
                     "아아;Aah",
                     "어어;Eoo",
                     "후후;Huhu",
                     "멍;Meong",
                     "아;Ah",
                     "악;Ack",
                     "어;Oh",
                     "억;Eok",
                     "오;Ohh",
                     "웃;Uuh",
                     "우;Uu",
                     "욱;Uuk",
                     "으;Eu",
                     "윽;Euk",
                     "읍;Eup",
                     "읏;Eu",
                     "응;Eung",
                     "크;Keu",
                     "자;Then",
                     "잠;Wai",
                     "하;Hah",
                     "학;Hak",
                     "핫;Hah",
                     "허;Heo",
                     "헉;Heok",
                     "힉;Hiik",
                     "후;Huu",
                     "흐;Heu",
                     "흑;Heok",
                     "휴;Hyu",
                     "흣;Heu",
                     "힛;Hee",
                     "음;Eum",
                     "왕;Wang",
                     "흡;Heup",
                     "씨;ssi",
                     "폭;Peuk",
                     "앙;Ang",
                     "탁;Tak",


                 ];




