// ==UserScript==
// @name         after button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MTL CAN'T STOP ME
// @author       chujuchuchu
// @icon         https://pbs.twimg.com/profile_images/1614478926566555649/ZkyIo06a_400x400.jpg
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
                let regtext = new RegExp(splittext[0], "g");
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
               "Esperes;Espers",
               "Goto;Go to",
               "Ha-eon;Haeon",
               "Stier;STier",
               "stier;STier",
               "Hi-Ohh;Hi-Five",
               "Original textContribute a better translation;",
               "Geun-young;Geunyoung",
               "Kendal;Keundal",
               "In-young;Inyoung",
               "In-yeong;Inyoung",
               "Inyeong;Inyoung",
               "Inyong;Inyoung",
               "In-young;Inyoung",
               "Han Inyoung;a figure",
               "Inyoung;a figure",
               "wentssips;gossips",
               "Mu, Moondae;M, Moondae",
               "Reid;raid",
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
               "Peromones;Pheromones",
               "peromones;pheromones",
               "What happen?;What happened?",
               "My Jiheon;Min Jiheon",
               "Spirng;Spring",
               "Six, ohh, four;Six, five, four",
               "six, ohh, four;six, five, four",
               "eye -catching;eye-catching",
               " i know; I know",
               "Tee, Team;Tea, Team",
               "Pretly;Pretty",
               "Seonghyun Kim;Kim Seonghyun",
               "Kim Seong-hyeon;Kim Seonghyun",
               "Yi-jeong;Yijeong",
               "chyly;chily",
               "yum, stay calm;st, stay calm",
               "Yum, stay calm;St, stay calm",
               "to glar at;to glare at",
               "Gnome;nom",
               "gnome;nom",
               "Ji-won;Jiwon",
               "Ohh, five;Five, five",
               "ohh, five;five, five",
               "Amusement Park;Amusement park",
               ", Noona;, noona",
               ", Older;, older",
               ", Hyung;, hyung",
               ", Ahjussi;, ahjussi",
               "Jung-yoon;Jungyoon",
               "nowI know That;Now I know that",
               "i know;I know",
               "i'm;I'm",
               "COMMA;,",
               "betta;beta",
               "betaine;beta",
               "Fortunately, the.;Fortunately.",
               "Faye;pay",
               "hit cycle;heat cycle",
               "Alpine;Alpha",
               "alpine;alpha",
               "Betta;beta",
               "Betaine;beta",
               "chicken skin;goosebumps",
               "prophesy;prophecy",
               "How did know;How did he know",
               "My Name;My name",
               "merger;collab",
               "Merger;Collab",
               "ButI know;But I know",
               "What you looking at;What are you looking at",
               "unluckyly;unluckily",
               "ssI knows;ssi knows",
               "skilful;skillful",
               "tongue, hyung;hy, hyung",
               "Four, President;Pr, President",
               "Bocchama;Young Master-nim",
               "bocchama;Young Master-nim",
               "senpai;sunbae",
               "managing director Cheon;Managing Director Cheon",
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
               "Im([[:space:]]);I'm$1",
               "Hi-Ohh;Hi-Five",
               "([[:punct:]])i([[:space:]]);$1I$2",
               "hyungwoo;Hyungwoo",
               "hyungjoon;Hyungjoon",
               "Chapters (\d);Chapter $1",
               "No([[:punct:]])\r\n;No$1 1.\r\n",
               "([[:space:]])i([[:space:]]);$1I$1",
               "([a-z]) T-shirt; $1 t-shirt",
               "What happen([[:punct:]]);What happened$1",
               "\r\nI\r\n ([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\r\n([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\n ([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "\r\nI\n([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]);\r\nI $1",
               "([a-z])STier;$1stier",
               "([[:punct:]])i([[:space:]]);$1I$2"
            ];
