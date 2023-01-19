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

(function(){
    'use strict'

  window.addEventListener('load', () => {
    addButton('after tl', selectReadFn)
    })

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'fixed', bottom: '7%', left:'4%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function selectReadFn() {
        var aftertlreplace = aftertl;
        var totalaftertl = aftertlreplace.length;

        var hangulaftertl = [];
        hangulaftertl.length = aftertlreplace.length;

        var romanaftertl = [];
        romanaftertl.length = aftertlreplace.length;

        for (let i = 0; i < aftertlreplace.length; i++) {
            let splittext = aftertlreplace[i].split(";");
            let regtext = new RegExp(splittext[0], "g");
            hangulaftertl[i] = regtext;
            romanaftertl[i] = splittext[1];
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
    }



}());

var aftertl = ["nigga;nom",
             "[…];[…",
             "hadtily;hastily",
             "Iknow;I know",
             "fortress;These days",
             "Seoon;Seon",
             "Chook;Chorok",
             "storey;story",
             "Lee Je-hee;Lee Jehee",
             "Chorook;Chorok",
             "Esperes;Espers",
             "Cha Jae-woo;Cha Jaewoo",
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
             "Bar, Park;P, Park",
             "Blessed, Restorer; R, Restorer",
             "Bo, Restorer; R, Restorer",
             "Yseon;Yiseon",
             "hast buff;haste buff",
             "Reid;raid",
             "raid Olcle;raid all clear",
             "Saviour;Savior",
             "saviour;savior",
             "Restore-nim;Restorer-nim",
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
             "Taeyoung Lee;Lee Taeyoung",
             "Joonyoung Kim;Kim Joonyoung",
             "Hyunjin Yoo;Yoo Hyunjin",
             "baek Woohyun;Baek Woohyun",
             "Jthe figure;Jinyoung",
             "hyotae;Hyotae",
             "Hyootae;hyotae",
             "Hobae;Hoobae",
             "Kim Soo-chan;Kim Soochan",
             "KIM soochan;Kim Soocchan",
             "Soo-chan;Soochan",
             "Hee-seong;Heeseong",
             "Seonjoo-ssi Han;Han Seonjoo-ssi",
             "koo incheol;Koo Incheol",
             "seonjoo;Seonjoo",
             "Peromones;Pheromones",
             "peromones;pheromones",
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
             "Yi-jeong;Yijeong",
             "Hanyoung Lee;Lee Hanyoung",
             "Yoo-eun;Yooeun",
             "Yoon Se okyung;Yoon Seokyung",
             "Min-hee;Minhee",
             "Cheil;Jeil",
             "Che-il;Jeil",
             "Je-il;Jeil",
             "chyly;chily",
             "the yol;Yool",
             "the Wool;Yool",
             "yum, stay calm;st, stay calm",
             "Yum, stay calm;St, stay calm",
             "to glar at;to glare at",
             "mikhail;Mikhail",
             "Michael;Mikhail",
             "Miha;Mikha",
             "Mikhail's was much;Mikhail was much",
             "Gnome;nom",
             "gnome;nom",
             "Yeon-woo;Yeonwoo",
             "Jeong-gun;Jeonggun",
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
             "Joe Sunggyoon;Joe Sunggyoon",
             "i know;I know",
             "i'm;I'm",
             "COMMA;,",
             "betta;beta",
             "betaine;beta",
             "Yeonwoo Song;Song Yeonwoo",
             "Fortunately, the.;Fortunately.",
             "Faye;pay",
             "hit cycle;heat cycle",
             "Alpine;Alpha",
             "alpine;alpha",
             "Betta;beta",
             "Betaine;beta",
             "Youra;Yoora",
             "Mrs. President Hong;President Hong's wife",
             "chicken skin;goosebumps",
             "Jay Yoon;Yoon Jay",
             "Hungsuk;Hyungsuk",
             "Yun;Yoon",
             "Shin Se-jin;the indebted",
             "prophesy;prophecy",
             "How did know;How did he know",
             "My Name;My name",
             "merger;collab",
             "Merger;Collab",
             "ButI know;But I know",
             "Joo-hee;Joohee",
             "Heewon Lee;Heewon-ie",
             "Ah, Yigeon;Ah, this",
             "Gate A classuthority;gate class authority",
             "Hunter SS Class;SS Class Hunter",
             "What you looking at;What are you looking at",
             "unluckyly;unluckily",
             "ssI knows;ssi knows",
             "skilful;skillful",
             "Hyun-joo;Hyunjoo",
             "tongue, hyung;hy, hyung",
             "Four, President;Pr, President",
             "Sihyun Lee;Lee Sihyun",
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
               "\r\nmade him happy\r\n;\r\nMade him happy.\r\n",
               "\r\nTaeshik ahjussi\r\n;\r\nTaeshik ahjussi.\r\n",
               "\r\nAbnormal Status Relief Potion\r\n;\r\nAbnormal Status Relief Potion.\r\n",
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
