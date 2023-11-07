// ==UserScript==
// @name         names button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MTL CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/2404*
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

var names = ["백은성,Baek Eunsung",
"은성,Eunsung",
"(\w)Eunsung,$1은성",
"성도현,Sung Dohyun",
"도현,Dohyun",
"(\w)Dohyun,$1도현",
"양지환,Yang Jihwan",
"지환,Jihwan",
"(\w)Jihwan,$1지환",
"백하민,Baek Hamin",
"하민,Hamin",
"(\w)Hamin,$1하민",
"강영찬,Kang Youngchan",
"영찬,Youngchan",
"(\w)Youngchan,$1영찬",
"곽준영,Kwak Joonyoung",
"준영,Joonyoung",
"(\w)Joonyoung,$1준영",
"권수혁,Kwon Soohyuk",
"수혁,Soohyuk",
"(\w)Soohyuk,$1수혁",
"권정혁,Kwon Junghyuk",
"정혁,Junghyuk",
"(\w)Junghyuk,$1정혁",
"김우현,Kim Woohyun",
"우현,Woohyun",
"(\w)Woohyun,$1우현",
"도유담,Do Yoodam",
"유담,Yoodam",
"(\w)Yoodam,$1유담",
"백경민,Baek Kyungmin",
"경민,Kyungmin",
"(\w)Kyungmin,$1경민",
"백지성,Baek Jisung",
"지성,Jisung",
"(\w)Jisung,$1지성",
"양지율,Yang Jiyool",
"지율,Jiyool",
"(\w)Jiyool,$1지율",
"전지윤,Jeon Jiyoon",
"지윤,Jiyoon",
"(\w)Jiyoon,$1지윤",
"정의찬,Jeong Euichan",
"의찬,Euichan",
"(\w)Euichan,$1의찬",
"최재근,Choi Jaegeun",
"재근,Jaegeun",
"(\w)Jaegeun,$1재근",
"권자옥,Kwon Jaok",
"자옥,Jaok",
"(\w)Jaok,$1자옥",
"최승철,Choi Seuncheol",
"승철,Seungcheol",
"(\w)Seungcheol,$1승철",
"김준호,Kim Joonho",
"최지현,Choi Jihyun",
"정동성,Jeong Dongsung",
"삼초온,Uncleee",
"삼촌,Uncle",
"백씨,Baek-ssi",
"백우 길드,Baekwoo Guild",
"Baek Jisung 길드장,Guild Leader Baek Jisung",
"백 길드장,Guild Leader Baek",
"부길드장님,Vice Guild Leader-nim",
"길드장님,Guild Leader-nim",
"협회장님,Association President-nim",
"백 길드장,Guild Leader Baek",
"귀속 길드,Kwisok Guild",
"유성 길드,Yoosung Guild",
"백우,Baekwoo",
"(\w)Baekwoo,$1백우",
"귀속,Kwisok",
"(\w)Kwisok,$1귀속",
"유성,Yoosung",
"(\w)Yoosung,$1유성",
"정노을,Jeong Noeul",
"이여은,Lee Yeoeun",
"여은,Yeoeun",
"(\w)Yeoeun,$1여은",
"Guild장,Guild Leader",
"신부님,Father-nim",
"판사님,Judge-nim",
"([a-z]) 헌터,$1 Hunter",
"(\b([A-Za-z])+\b)\s+Hunter,Hunter $1",
"(\b([A-Za-z])+\b)\s+Hunter,Hunter $1",
"([A-Z])급 헌터 ([A-Z]),$1 Class Hunter $2",
"헌터님,Hunter-nim",
"환이 Uncle,Uncle Hwan-ie",
"삼초오오온,Uncleeee",
"(\b([A-Za-z])+\b)-ie Uncle,Uncle $1-ie",
"Dohyun Uncle,Uncle Dohyun",
"아실,Asil",
"백가,Baek Family",
"Eunsung Uncle,Uncle Eunsung",
"유민이,Yoomin-ie",
"현 비서,Secretary Hyun",
"백 비서,Secretary Baek",
"동담 hyung,Dongdam hyung",
"화니 Uncle,Uncle Hwanie",
"Dohyun이 Uncle,Uncle Dohyun-ie",
"권 수 혁,Kwon Soohyuk",
"성읍읍,Sung Eupeup",
"댓쓰니,Daesseunie",
"길드 짱,Guild Lead",
"애깅,Aeging",
"Aeging이,Aeging-ie",
"인연 길드,Inyeon Guild",
"(([A-Z])+)이 Uncle,Uncle $1-ie",
"Jihwan이 Uncle,Uncle Jihwan-ie",
"Dohyun이 Uncle,Uncle Dohyun-ie",
"Eunsung이 Uncle,Uncle Eunsung-ie",
"보듬 길드,Bodeum Guild",
"퐁당퐁당,Pongdang Pongdang",
"세이렌,Siren",
"세이,Sei",
"(\w)Sei,$1세이",
"Sei렌,Siren",
"동담형,Dongdam hyung",
"동담,Dongdam",
"(\w)Dongdam,$1동담",
"센터장님,Center Director-nim",
"\r\n￣;\r\n—",





                 ];