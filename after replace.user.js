// ==UserScript==
// @name         after replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ridibooks.com&size=64
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/after%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/after%20replace.user.js
// @grant        none
// ==/UserScript==

(function() {

    window.addEventListener('load', () => {
    addButton('after tl', replaceafter)
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
        cssObj = cssObj || {position: 'fixed', bottom: '7%', left:'4%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function replaceafter() {

        var aftertlreplace = aftertl;
        var totalaftertl = aftertlreplace.length;

        var hangulaftertl = [];
        hangulaftertl.length = aftertlreplace.length;

        var romanaftertl = [];
        romanaftertl.length = aftertlreplace.length;

        for (let i = 0; i < aftertlreplace.length; i++) {
            if (i == 1) {
                hangulaftertl[i] = "[…]";
                romanaftertl[i] = "[…";
            }
            else {
                let splittext = aftertlreplace[i].split(";");
                let punctreplace = splittext[0].replaceAll("([[:punct:]])","([^A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])");
                let regtext = new RegExp(punctreplace.replaceAll("(\w)","([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])"), "g");

                hangulaftertl[i] = regtext;
                romanaftertl[i] = splittext[1];
            }
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

            for (let i = 0; i < totalaftertl; i++) {
                oldTxt = oldTxt.replaceAll(hangulaftertl[i], romanaftertl[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

        tempAlert("after replaced", 1000);
    }



}());

var aftertl = ["nigga;nom",
               "[…];[…",
               "hadtily;hastily",
               "Iknow;I know",
               "fortress;These days",
               "Seoon;Seon",
               "storey;story",
               "Goto;Go to",
               "Ha-eon;Haeon",
               "Stier;STier",
               "stier;STier",
               "Hi-Ohh;Hi-Five",
               "Original textContribute a better translation;",
               "Geun-young;Geunyoung",
               "Kendal;Keundal",
               "In-young;Inyoung",
               "In-Young;figure",
               "In-yeong;Inyoung",
               "Inyeong;Inyoung",
               "Inyong;Inyoung",
               "In-young;Inyoung",
               "Han Inyoung;a figure",
               "Inyoung;a figure",
               "wentssips;gossips",
               "Mu, Moondae;M, Moondae",
               "Bar, Park;P, Park",
               "Saviour;Savior",
               "saviour;savior",
               "-sama;-nim",
               "short slipper;short sleeper",
               "Short slipper;Short sleeper",
               "Kongi;Kong-ie",
               "Seooon;Seomoon",
               "Min Ji-heon;Min Jiheon",
               "Jewish;Judan",
               "tongue, hyung;hy, hyung",
               "Tongue, hyung;Hy, hyung",
               "Be quite.;Be quiet.",
               "Hobae;Hoobae",
               "Hee-seong;Heeseong",
               "What happen?;What happened?",
               "My Jiheon;Min Jiheon",
               "Spirng;Spring",
               "Six, ohh, four;Six, five, four",
               "six, ohh, four;six, five, four",
               "eye -catching;eye-catching",
               " i know;I know",
               "Tee, Team;Tea, Team",
               "Pretly;Pretty",
               "Seonghyun Kim;Kim Seonghyun",
               "Kim Seong-hyeon;Kim Seonghyun",
               "yum, stay calm;st, stay calm",
               "Yum, stay calm;St, stay calm",
               "to glar at;to glare at",
               "Gnome;nom",
               "gnome;nom",
               "Yeon-woo;Yeonwoo",
               "Jeong-gun;Jeonggun",
               "Ji-won;Jiwon",
               "Ohh, five;Five, five",
               "ohh, five;five, five",
               "Amusement Park;Amusement park",
               ", Noona;, noona",
               ", Noonim;, noonim",
               ", Older;, older",
               ", Hyung;, hyung",
               ", Ahjussi;, ahjussi",
               "nowI know That;Now I know that",
               "i know;I know",
               "i'm;I'm",
               "COMMA;,",
               "betta;beta",
               "betaine;beta",
               "Fortunately, the.;Fortunately.",
               "His.;\"Euum.\"",
               "Faye;pay",
               "hit cycle;heat cycle",
               "Alpine;Alpha",
               "alpine;alpha",
               "Betta;beta",
               "Betaine;beta",
               "chicken skin;goosebumps",
               "Jay Yoon;Yoon Jay",
               "Hungsuk;Hyungsuk",
               "Yun;Yoon",
               "prophesy;prophecy",
               "How did know;How did he know",
               "My Name;My name",
               "merger;collab",
               "Merger;Collab",
               "ButI know;But I know",
               "Joo-hee;Joohee",
               "예민하고 제멋대로고 입도 험한 데다 시건방진 놈의 새끼;Sensitive, selfish, foul-mouthed, unheard-of asshole.",
               "unluckyly;unluckily",
               "ssI knows;ssi knows",
               "skilful;skillful",
               "tongue, hyung;hy, hyung",
               "Four, President;Pr, President",
               "senpai;sunbae",
               ", Hyung;, hyung",
               ", Noona;, noona",
               ", Oppa;, oppa",
               ", Unnie;, unnie",
               ", Dongsaeng;, dongsaeng",
               ", Older hyung;, older hyung",
               ", Younger hyung;, younger hyung",
               ", Seonsaeng;, seonsaeng",
               ", Ahjussi;, ahjussi",
               ", Sunbae;, sunbae",
               ", Hoobae;, hoobae",
               ", Maknae;, maknae",
               ", Siljang; siljang",
               ", Sajang; sajang",
               "Do, Young Master;Y, Young Master",
               "doesn't care.;\"Don't care.\"",
               "Im here;I'm here",
               "an figure;a figure",
               "a hit;a heat",
               "Ajussi;Ahjussi",
               "friendlily;friendly",
               "-san;-ssi",
               "Gayoung Kim;Kim Gayoung",
               "LOVIEWER;Loviewer",
               "Hai Yoon;Hai Yun",
               "Seo Jihyuk, I and Kim Jaehee;Seo Jihyuk, I, and Kim Jaehee",
               "Nana Kim Jaehee;I and Kim Jaehee",
               "Ga-team;Ga Team ﹙🇰🇷﹚",
               "Na-team;Na Team ﹙🇯🇵﹚",
               "Da-team;Da Team ﹙🇷🇺﹚",
               "Ra-team;La Team ﹙🇨🇳﹚",
               "Ma-team;Ma Team ﹙🇺🇸﹚",
               "Ba-team;Ba Team ﹙🇳🇿﹚",
               "Sa-team;Sa Team ﹙🇦🇺﹚",
               "Ah-team;Ah Team ﹙🇨🇦﹚",
               "Jaehee Kim;Kim Jaehee",
               "huma figures;human figures",
               "Aeyoung Baek;Baek Aeyoung",
               "Sanghyun Jung;Jung Sanghyun",
               "미스터 써;Mr. Sseo",
               "마크씨;Mark-ssi",
               "바트씨;Bart-ssi",
               "Henry Abbey;Henry's father",
               "Jihyuk Seo;Seo Jihyuk",


               "([a-z]) Hyung;$1 hyung",
               "([a-z]) Noona;$1 noona",
               "([a-z]) Oppa;$1 oppa",
               "([a-z]) Unnie;$1 unnie",
               "([a-z]) Dongsaeng;$1 dongsaeng",
               "([a-z]) Older hyung;$1 older hyung",
               "([a-z]) Younger hyung;$1 younger hyung",
               "([a-z]) Seonsaeng;$1 seonsaeng",
               "([a-z]) Ahjussi;$1 ahjussi",
               "([a-z]) Sunbae;$1 sunbae",
               "([a-z]) Hoobae;$1 hoobae",
               "([a-z]) Maknae;$1 maknae",
               "([a-z]) Siljang;$1 siljang",
               "([a-z]) Sajang;$1 sajang",
               "([[:punct:]])iced coffee([[:punct:]]);$1Ahh$2",
               "([[:punct:]])Five([[:punct:]]);$1Ohh$2",
               "([[:punct:]])after([[:punct:]]);$1Huu$2",
               "([[:punct:]])under([[:punct:]]);$1Hah$2",
               "([[:punct:]])ruler([[:punct:]]);$1Then$2",
               "([[:punct:]])black([[:punct:]]);$1heok$2",
               "([[:punct:]])flaw([[:punct:]]);$1heu$2",
               "([[:punct:]])crane([[:punct:]]);$1hak$2",
               "([[:punct:]])profit([[:punct:]]);$1kiik$2",
               "([[:punct:]])evil([[:punct:]]);$1ack$2",
               "([[:punct:]]) iced coffee([[:punct:]]);$1 Ahh$2",
               "([[:punct:]]) Five([[:punct:]]);$1 Ohh$2",
               "([[:punct:]]) after([[:punct:]]);$1 Huu$2",
               "([[:punct:]]) under([[:punct:]]);$1 Hah$2",
               "([[:punct:]]) ruler([[:punct:]]);$1 Then$2",
               "([[:punct:]]) black([[:punct:]]);$1 heok$2",
               "([[:punct:]]) flaw([[:punct:]]);$1 heu$2",
               "([[:punct:]]) profit([[:punct:]]);$1 kiik$2",
               "([[:punct:]]) evil([[:punct:]]);$1 ack$2",
               "([[:punct:]]) crane([[:punct:]]);$1 hak$2",
               "\r\niced coffee([[:punct:]]);$1Ahh$2",
               "\r\nFive([[:punct:]]);\r\nOhh$1",
               "\r\nafter([[:punct:]]);\r\nHuu$1",
               "\r\nunder([[:punct:]]);\r\nHah$1",
               "\r\nruler([[:punct:]]);\r\nThen$1",
               "\r\nblack([[:punct:]]);\r\nheok$1",
               "\r\nflaw([[:punct:]]);\r\nheu$1",
               "\r\ncrane([[:punct:]]);\r\nhak$1",
               "\r\nprofit([[:punct:]]);\r\nkiik$1",
               "\r\nevil([[:punct:]]);\r\nack$1",
               "\r\noh\r\n;\r\nOh.\r\n",
               "Class ([ABCDEFS]);$1 class",
               "Im (\w);I'm $1",
               "Hi-Ohh;Hi-Five",
               "([[:punct:]])i (\w);$1I $2",
               "hyungwoo;Hyungwoo",
               "hyungjoon;Hyungjoon",
               "Chapters (\d);Chapter $1",
               "No([[:punct:]])\r\n;No$1 1.\r\n",
               "(\w) i (\w);$1 I $2",
               "([a-z]) T-shirt; $1 t-shirt",
               "What happen([[:punct:]]);What happened$1",
               "\r\nI\r\n ([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\r\n([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\n ([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\n([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "([a-z])STier;$1stier",
               "([[:punct:]])i (\w);$1I $2",
               "Tongue([[:punct:]]) Hyung,Hy$1 Hyung",
               "tongue([[:punct:]]) Hyung,hy$1 Hyung",
               "(\w)(\w)(\w)yly;$1$2$3ily"
            ];
