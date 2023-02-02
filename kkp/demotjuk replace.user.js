// ==UserScript==
// @name         demotjuk button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  KKP CAN'T STOP ME
// @author       chujuchuchu
// @match        https://page.kakao.com/content/56325530/viewer/*
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

var names = ["이름 : ,Name : ",
             "칭호 : ,Title : ",
             "가창 : ,Singing : ",
             "춤 : ,Dance :",
             "외모 : ,Appearance : ",
             "끼 : ,Skill :",
             "특성 : ,Trait(s) : ",
             "!상태이상 : ,Status Effect : ",
             "남은 포인트 : ,Remaining Points : ",
             "세 진,세진",
             "배 세,배세",
             "이 세,이세",
             "청 우,청우",
             "류 청,류청",
             "아 현,아현",
             "선 아,선아",
             "박 문,박문",
             "문 대,문대",
             "건 우,건우",
             "류 건,류건",
             "유 진,유진",
             "차 유,차유",
             "래 빈,래빈",
             "김 래,김래",
             "권 희,권희",
             "희 승,희승",
             "청 려,청려",
             "테 스타,테스타",
             "테스 타,테스타",
             "테스타,TeSTAR",
             "세 진,세진",
             "배 세,배세",
             "이 세,이세",
             "배세진,Bae Sejin",
             "이세진,Lee Sejin",
             "큰세진,Keun Sejin",
             "세진,Sejin",
             "뵤햄찌,Byohamchi",
             "빅버드,Big Bird",
             "청 우,청우",
             "류 청,류청",
             "류청우,Ryu Cheongwoo",
             "청우,Cheongwoo",
             "류리다,Ryurida",
             "아 현,아현",
             "선 아,선아",
             "선아현,Seon Ahyun",
             "아현,Ahyun",
             "천사,Angel",
             "밤비,Bambi",
             "엘크,Elk",
             "하리보,Haribo",
             "당도최고멜론,Sweet Melon",
             "박 문,박문",
             "문 대,문대",
             "박문대,Park Moondae",
             "문대,Moondae",
             "건 우,건우",
             "류 건,류건",
             "류건우,Ryu Geonwoo",
             "건우,Geonwoo",
             "문댕댕,Moon Puppy",
             "문댕,Moon Pup",
             "댕댕,Puppy",
             "티벳여우,Tibetan Fox",
             "박곰머,Park Gomme",
             "곰머,Gomme",
             "유 진,유진",
             "차 유,차유",
             "유진 이그나시오 차,Eugene Ignacio Cha",
             "차유진,Cha Yujin",
             "유진,Yujin",
             "차고영,Cha Goyoung",
             "래 빈,래빈",
             "김 래,김래",
             "김래빈,Kim Raebin",
             "래빈,Raebin",
             "김래빗,Kim Rabbit",
             "중세 토끼,Medieval Rabbit",
             "효도토끼,Filial Rabbit",
             "달토끼,Moon Rabbit",
             "허스키야,Husky-ya",
             "러뷰어,LOVIEWER",
             "셤별,Seombyeol",
             "T1 스타즈,T1 Stars",
             "곽신균,Kwak Shinkyun",
             "신균,Shinkyun",
             "김준,Kim Jun",
             "아이돌 주식회사,Idol Joint Stock Company",
             "아주사,AJUSA",
             "재상장 시즌 1,Relisting Season 1",
             "최원길,Choi Wongil",
             "원길,Wongil",
             "권희승,Kwon Heeseung",
             "희승,Heeseung",
             "하일준,Ha Iljun",
             "일준,Iljun",
             "재상장 시즌 2,Relisting Season 2",
             "미리내,Miry-nay",
             "박민하,Park Minha",
             "정율기,Jeong Yulgi",
             "율기,Yulgi",
             "재상장 시즌 3,Relisting Season 3",
             "채서담,Chae Seodam",
             "서담,Seodam",
             "영린,Youngrin",
             "뮤디,Mudie",
             "연주,Yeonju",
             "민소,Minso",
             "Minso매,민소매",
             "티카,TICa",
             "브이틱,VTIC",
             "청 려,청려",
             "재시작 청려,Restart Cheongryeo",
             "신청려,Shin Cheongryeo",
             "청려,Cheongryeo",
             "신재현,Shin Jaehyun",
             "재현아,Jaehyun-ah",
             "재현 씨,Jaehyun-ssi",
             "진채율,Jin Chaeyul",
             "채율,Chaeyul",
             "신오,Shinoh",
             "오윤신,Oh Yoonshin",
             "주단,Judan",
             "정우단,Jung Woodan",
             "지태우,Ji Taewoo",
             "최나훈,Choi Nahoon",
             "석희강,Seok Heekang",
             "레티,LeTi",
             "악토버 31,October 31",
             "악토버,October",
             "골드 1,Gold 1",
             "골드 2,Gold 2",
             "김유준,Kim Yujun",
             "유준,Yujun",
             "유지호,Yu Jiho",
             "지호,Jiho",
             "박준경,Park Joonkyung",
             "준경,Joonkyung",
             "박찬주,Park Chanjoo",
             "데뷔가 아니면 죽음을,Debut or die",
             "자이롭,GY-ROP",
             "김정원,Kim Jeongwon",
             "곽정원,Kwak Jeongwon",
             "정병임,Jyeong Byongim",
             "김혜정,Kim Hyejung",
             "홈마,HomMa",
             "류서린,Ryu Seorin",
             "수현,Suhyeon",
             "최호수,Choi Hosoo",
             "오서형,Oh Seohyeong",
             "채서담,Chae Seodam",
             "서담,Seodam",
             "트윈티,TwinT",
             "최기운,Choi Kiwoon",
             "민하야,Minha-ya",
             "안소현,Ahn Sohyun",
             "위튜버,WeTuber",
             "문석춘,Moon Seokchun",
             "위튜버,WeTuber",
             "위튜브,WeTube",
             "김익제,Kim Ikje",
             "이하람,Lee Haram",
             "최동호,Choi Dongho",
             "김석원,Kim Seokwon",
             "진윤태,Jin Yuntae",
             "이고윤,Lee Goyoon",
             "류형,Ryu hyung",
             "클럽메보,Club Mebo",
             "클럽 메보,Club Mebo",
             "최태준,Choi Taejoon",
             "비한,Bihan",
             "(\w)Bihan,$1비한",
             "큰달,Keundal",
             "티홀릭,T-Holic",
             "김재훈,Kim Jaehoon",
             "박종훈,Park Jonghoon",
             "강성빈,Kang Seongbin",
             "장소현,Jang Jihyun",
             "성하린,Seong Harin",
             "하린,Harin",
             "류서진,Ryu Seojin",
             "서진,Seojin",
             "박민정,Park Minjung",
             "원더홀,Wonder Hall",
             "김서원,Kim Seowon",
             "박재석,Park Jaeseok",
             "박원주,Park Wonjoo",
             "스페이서,SPACER",
             "김나진,Kim Najin",
             "나세중,Na Sejun",
             "박진웅,Park Jinwoon",
             "이테르,ĭter",
             "(\w)Geonwoo,$1건우",
             "이사라,Lee Sara",
             "김난주,Kim Nanju",
             "스티어,STier",
             "윾진이그나시오차,Eugene Ignacio Cha",
             "유진이그나시오차,Eugene Ignacio Cha",
             "정이솔,Jung Yisol",
             "이솔,Yisol",
             "주성,Joosung",
             "하진태,Ha Jintae",
             "진태,Jintae",
             "(\w)Jintae,$1진태",
             "노아,Noah",
             "(\w)Noah,$1노아",
             "공이([[:punct:]]),Kong-ie$1",
             "([[:punct:]])공이,$1Kong-ie",
             "(\w)Kong-ie,$1공이",
             "이홍수,Lee Hongsoo",
             "이찬우,Lee Chanwoo",
             "이선좌,Already Booked",
             "스튜디오 이오제,Studio Ohje",
             "희운,Heewoon",
             "이문현,Lee Moonhyun",
             "문현,Moonhyun",
             "(\w)Moonhyun,$1문현",
             "원선우,Won Seonwoo",
             "선우,Seonwoo",
             "(\w)Seonwoo,$1선우",
             "박광제,Park Kwangje",
             "광제,Kwangje",
             "(\w)Kwangje,$1광제",
             "우단,Woodan",
             "(\w)Woodan,$1우단",
             "이 실장,Chief Lee",
             "헤일로하임,HaloHe-im",
             "헤일로 하임,HaloHe-im",
             "틱택톡,TikTakTok",
             "강지현,Kang Jihyun",
             "지현,Jihyun",
             "(\w)Jihyun,$1지현",
             "재빈,Jaebin",
             "휴고,Hugo",
             "비마걸,BEMYGIRL",
             "무([[:punct:]]) Moondae,M$1 Moondae",

                 ];




