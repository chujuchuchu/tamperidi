// ==UserScript==
// @name         onomatopoeias replace
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  RIDI AND KKP CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/*
// @match        https://page.kakao.com/content/*
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

    }, 2000);

})();

var onomatopoeias = ["아야아야아야야야;Aya aya ayaaa",
                     "푸푸푸푸푸푸풋푸;Pupupupupupupuhpu",
                     "아아아아아악;Aaaaaack",
                     "악악악악악악;Ackackackackackack",
                     "아아아아악;Aaaaack",
                     "으아아아아;Euaaaah",
                     "으흐흐으윽;Uheuheuuk",
                     "히이이이익;Hiiiiik",
                     "똑똑똑똑똑;Ddokddokddokddokddok",
                     "팅팅팅팅팅;Tingtingtingtingting",
                     "우드드드득;Udududududuk",
                     "고오오오오;Goooooh",
                     "아아어오;Aauo",
                     "으아아악;Euaaack",
                     "으애애앵;Uweeeng",
                     "으어어엉;Euuuung",
                     "어어어어;Ooooh",
                     "하아아앗;Haaaah",
                     "하하호호;Hahahoho",
                     "흐으으윽;Heuuuk",
                     "흐애애앵;Heueeeng",
                     "치이이익;Chiiiik",
                     "끄으으;Guuuh",
                     "아아아;Aaah",
                     "아아악;Aaack",
                     "아아앗;Aaah",
                     "아으으;Auuu",
                     "아으응;Auung",
                     "아이구;Aigoo",
                     "아이쿠;Aiguu",
                     "에이그;Eiguu",
                     "어어어;Oooh",
                     "어어엉;Eeeng",
                     "우에엥;Uweeng",
                     "우에헥;Uwehek",
                     "으아아;Uwaah",
                     "으아앙;Uwaang",
                     "으으응;Eunng",
                     "으으윽;Euuuk",
                     "하아앙;Haaang",
                     "하우으;Hauu",
                     "흐아압;Hwap",
                     "하으윽;Hauuk",
                     "하으읏;Hauuh",
                     "하하하;Hahaha",
                     "후우우;Huuu",
                     "후엉엉;Hueeng",
                     "흐아아;Heuaa",
                     "흐아앙;Heuaang",
                     "흐으읍;Heuuup",
                     "흐어엉;Heuuung",
                     "허엉엉;Heonnng",
                     "흐에에;Heueeh",
                     "흐우웁;Heuuup",
                     "흐우읏;Heoooh",
                     "흐으읏;Heuuuh",
                     "흐으윽;Heuuuk",
                     "흐으응;Heuuung",
                     "흐후윽;Heuuuk",
                     "허허허;Heo heo heo",
                     "흑흑흑;Heukheukheuk",
                     "쏴아아;Shwaah",
                     "와하하;Wahaha",
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
                     "어어;Ohh",
                     "어엉;Euung",
                     "어으;Uuh",
                     "아이;Ayy",
                     "아흑;Aheuk",
                     "어헝;Euhng",
                     "어억;Eook",
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
                     "우윽;Uuk",
                     "우훅;Uhuk",
                     "웨에;Weeh",
                     "으아;Uwah",
                     "으악;Uwak",
                     "으압;Uwap",
                     "으억;Euok",
                     "으으;Euu",
                     "으윽;Euuk",
                     "으음;Euum",
                     "으읍;Euup",
                     "으읏;Euu",
                     "으응;Euung",
                     "으욱;Euwook",
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
                     "크읍;Keuup",
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
                     "흐앗;Heuah",
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
                     "크윽;Keuk",
                     "크흡;Keuheup",
                     "끄윽;Kkeuk",
                     "쑤욱;Shwook",
                     "푸하;Puha",
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
                     "헐;Heol",
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
                     "꺅;Kkyak",
                     "큭;Keugh",
                     "쳇;Tch",
                     "큽;Keub",
                     "써;Sseo",


                 ];



