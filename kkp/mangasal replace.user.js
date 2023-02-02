// ==UserScript==
// @name         mangasal button replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  KKP CAN'T STOP ME
// @author       chujuchuchu
// @match        https://page.kakao.com/content/58038142/viewer/*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://page.kakao.com&size=64
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/kkp/mangasal%20button%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/kkp/mangasal%20button%20replace.user.js
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

var names = ["서호윤,Seo Hoyoon",
             "서호진,Seo Hojin",
             "김성현,Kim Seonghyun",
             "성지원,Sung Jiwon",
             "강이채,Kang Yichae",
             "정다준,Jung Dajoon",
             "임현수,Lim Hyunsoo",
             "주우성,Joo Woosung",
             "유혁,Yoohyuk ",
             "김희영,Kim Heeyoung",
             "유지아,Yoo Jia",
             "이지현,Lee Jihyun",
             "민지헌,Min Jiheon",
             "강연후,Kang Yeonhoo",
             "한채리,Han Chaeri",
             "채정우,Chae Jungwoo",
             "하서연,Ha Seoyeon",
             "리즈,Liz ",
             "윤희언,Yoon Heeeon",
             "정원하,Jung Wonha",
             "유정화,Yoo Junghwa",
             "이정훈,Lee Junghoon",
             "민승태,Min Seungtae",
             "이강석,Lee Kangseok",
             "더 던,The Dawn",
             "더던,The Dawn",
             "블랙콜,Black Call",
             "화이트 체리,White Cherry",
             "대파성,Daepaseong",
             "투데이,Today",
             "리파인드,Refind",
             "마즈,Marz",
             "나이트메어,Nightmare",
             "리아퍼플,Leah Purple",
             "하이파이브,Hi-Five",
             "베르씨,Bercy",
             "TEW,TEW",
             "트라이,Try",
             "프오브,FOB",
             "별스타,ByeolSTAR",
             "너튜브,NEOtube",
             "너튜버,NEOtuber",
             "샤이닝 스타,Shining Star",
             "샤스,ShiStar",
             "블루타이거,Blue Tiger",
             "청범,Cheongbeom",
             "호우호우,Houhou",
             "방방,Bongbong",
             "호윤,Hoyoon",
             "호진,Hojin",
             "성현,Seonghyun",
             "지원,Jiwon",
             "이채,Yichae",
             "다준,Dajoon",
             "현수,Hyunsoo",
             "우성,Woosung",
             "희영,Heeyoung",
             "지아,Jia",
             "지현,Jihyun",
             "지헌,Jiheon",
             "연후,Yeonhoo",
             "채리,Chaeri",
             "정우,Jungwoo",
             "서연,Seoyeon",
             "희언,Heeeon",
             "정화,Junghwa",
             "정훈,Junghoon",
             "승태,Seungtae",
             "강석,Kangseok",
             "정문선,Jung Moonsun",
             "피디,PD",
             "이한성,Lee Hanseong",
             "서호굥,Seo Hogyoong",
             "호굥,Hogyoong",
             "김재연,Kim Jaeyeon",
             "재연 씨,Jaeyeon-ssi",
             "황모,Hwang Mo",
             "더던,TheDawn",
             "쥬성,Jyoosung",
             "김성철,Kim Seongcheol",
             "더던나리,TheDawnNight",
             "영군,Younggun",
             "김위수,Kim Wisoo",
             "김숙희,Kim Seokhee",
             "피디니이임,PD-niiim",
             "민다정,Min Dajung",
             "김영석,Kim Youngseok",
             "캘리포니아,California",
             "캘리포,Cali",
             "냥냥이,Nyangnyang-ie",
             "호유니,Hoyoonie",
             "주형진,Joo Hyungjin",
             "성지워어언,Sung Jiwooon",
             "황정규,Hwang Jeonggyu",
             "노을,Sunsets",
             "서 PD,PD Seo",
             "김 PD,PD Kim",
             "이 PD,PD Lee",
             "최 PD,PD Choi",
             "Junghoon PD,PD Junghoon",
             "연리,Yeonri",
             "구찬,Goochan",
             "이성진 디자이너님,Designer Lee Sungjin-nim",
             "성진 디자이너님,Designer Sungjin-nim",
             "이성진,Lee Sungjin",
             "성진,Sungjin",
             "리엘 편집장,Editor Riel",
             "송지온,Song Jion",
             "정청연,Jeong Cheongyeon",
             "주 모 씨,Joo-mo-ssi",
             "이유지,Lee Yooji",
             "이주환,Lee Joohwan",
             "강성천,Kang Sungchun",
             "김여주,Kim Yeoju",
             "최지성,Choi Jisung",
             "최지훈,Choi Jihoon",
             "정해윤,Jung Haeyoon",
             "이릭스,IRIX",
             "레이첼 크루거,Rachel Kruger",
             "레이첼,Rachel",
             "크루거,Kruger",
             "아스타,ASTAR",
             "루카,Luka",
             "유미,Yoomi",
             "김아리,Kim Ahri",
             "강채연,Kang Chaeyeon",
             "채연,Chaeyeon",
             "양철의,Yang Chulee",
             "정선의,Jung Sunui",
             "정 피디,PD Jung",
             "정 PD,PD Jung",
             "김우호,Kim Wooho",
             "김우형,Kim Woohyung",
             "우형,Woohyung",
             "민한준,Min Hanjun",
             "한준,Hanjun",
             "신희찬,Shin Heechan",
             "희찬,Heechan",
             "서의영,Seo Euiyoung",
             "의영,Euiyoung",
             "지영원,Ji Youngwon",
             "영원,Youngwon",
             "스튜디오 올리오,Studio Ollio",
             "올리오,Ollio",
             "강지성,Kang Jisung",
             "지성,Jisung",
             "주형창,Joo Hyungchang",
             "형창,Hyungchang",
             "우호,Wooho",
             "한영진,Han Youngjin",
             "영진,Youngjin",
             "김명혁,Kim Myunghyuk",
             "이한주,Lee Hanjoo",
             "한주,Hanjoo",
             "전새영,Jeon Saeyoung",
             "이범현,Lee Beomhyun",
             "범현,Beomhyun",
             "새영,Saeyoung",
             "(\w)Jiwon,$1지원",
             "강! 연! 후!,Kang! Yeon! Hoo!",
             "블로이,BLOY",
             "Youngwon한,영원한",
             "우경운,Woo Kyungwoon",
             "경운,Kyungwoon",
             "(\w)Kyungwoon,$1경운",
             "김 차장,Manager Kim",
             "김 매니저,Manager Kim",
             "한지혁,Han Jihyuk",
             "한 상무,Director Han",
             "동생새끼,dongsaeng saekki",
             "정민,Jungmin",
             "(\w)Jungmin,$1정민",
             "서호윤 양,서호윤  양",
             "심정윤,Shim Jeongyoon",
             "정윤,Jeongyoon",
             "(\w)Jeongyoon,$1정윤",
             "이주형,Lee Jookyung",
             "주형,Jookyung",
             "(\w)Jookyung,$1주형",
             "정주은,Jung Jooeun",
             "주은,Jooeun",
             "(\w)Jooeun,$1주은",
             "김해영,Kim Haeyoung",
             "해영,Haeyoung",
             "(\w)Haeyoung,$1해영",
             "이세현,Lee Sehyun",
             "세현,Sehyun",
             "(\w)Sehyun,$1세현",
             "하파브,HiFiv",
             "하파,HiFi",
             "유쟈,Yooja",
             "(\w)Yooja,$1유쟈",
             "우빈,Woobin",
             "(\w)Woobin,$1우빈",
             "김채준,Kim Chaejoon",
             "채준,Chaejoon",
             "(\w)Chaejoon,$1채준",
             "서민강쥬,SeoMinKangJoo",
             "우찬새,Woo Chansae",
             "한채혁,Han Chaehyuk",
             "정채형,Jung Chaehyung",
             "채형,Chaehyung",
             "(\w)Chaehyung,$1채형",
             "리영,Riyoung",
             "이 세 현,LEE SE HYUN",
             "성동형,Sung Donghyung",
             "동형,Donghyung",
             "(\w)Donghyung,$1동형",
             "Lee Junghoon PD, PD Lee Junghoon",
             "원재욱,Won Jaewook",
             "정 팀장,Team Leader Jung",
             "코끼리 씨,Elephant-ssi",
             "강정군,Kang Jeonggun",
             "강주환,Kang Joohwan",
             "이 정 훈 PD,PD Lee Jung hoon",
             "강혜진,Kang Hyejin",
             "혜진,Hyejin",
             "(\w)Hyejin,$1혜진",
             "스타 캣닙,Star Catnip",
             "래비쉬,RAVISHY",
             "장영혁,Jang Younghyuk",
             "영혁,Younghyuk",
             "(\w)Younghyuk,$1영혁",
             "하이리,Highry",
             "강이([[:punct:]]),Kang Yi$1",
             "양주리,Yang Joori",
             "주리,Joori",
             "(\w)Joori,$1주리",
             "곽서정,Kwak Seojung",
             "서정,Seojung",
             "(\w)Seojung,$1서정",
             "강영준,Kang Youngjoon",
             "영준,Youngjoon",
             "(\w)Youngjoon,$1영준",
             "한우주,Han Woojoo",
             "우주,Woojoo",
             "(\w)Woojoo,$1우주",
             "강주균,Kang Joongyoon",
             "주균,Joongyoon",
             "(\w)Joongyoon,$1주균",
             "Yang Joori PD,PD Yang Joori",
             "양 PD,PD Yang",


                 ];




