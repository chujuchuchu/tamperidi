// ==UserScript==
// @name         jeolsildol replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/205*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/jeolsildol%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/jeolsildol%20replace.user.js
// @grant        none
// ==/UserScript==

(function() {


    setTimeout(function() {


        var namesreplace = names;
        var totalnames = namesreplace.length;

        var hangulnames = [];
        hangulnames.length = namesreplace.length;

        var romannames = [];
        romannames.length = namesreplace.length;

        for (let i = 0; i < namesreplace.length; i++) {
            let splittext = namesreplace[i].split(",");
            let regtext = new RegExp(splittext[0], "g");
            hangulnames[i] = regtext;
            romannames[i] = splittext[1];
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

            for (let i = 0; i < totalnames; i++) {
                oldTxt = oldTxt.replaceAll(hangulnames[i], romannames[i]);
            }

            txtNode.nodeValue = oldTxt;
        }


    }, 2000);






})();


var names = ["정해원,Jeong Haewon",
             "민지호,Min Jiho",
             "황새벽,Hwang Saebyeok",
             "안주원,Ahn Joowon",
             "한효석,Han Hyoseok",
             "박선재,Park Seonjae",
             "신지운,Shin Jiwoon",
             "퍼스트라이트,First Light",
             "스퀘어,Square",
             "부정태,Boo Jeongtae",
             "국민이 선택한 아이돌,People's Choice Idol",
             "국선아,PCI",
             "박종렬,Park Jongryeol",
             "곽윤용,Kwak Yoonyong",
             "박희영,Park Heeyoung",
             "송강원,Song Kangwon",
             "박유나,Park Yuna",
             "장용규,Jang Yonggyu",
             "정기훈,Jeong Kihoon",
             "유선아,Yoo Seonah",
             "이예영,Lee Yeyoung",
             "철순,Cheolsoon",
             "강하연,Kang Hayeon",
             "박희택,Park Heetaek",
             "박중운,Park Joongwoon",
             "양이형,Yang Yihyung",
             "박선혜,Park Seonhye",
             "장지영,Jang Jiyoung",
             "민조,Minjo",
             "퍼라,FiLi",
             "정선미,Jeong Seonmi",
             "강영호,Kang Youngho",
             "김재성,Kim Jaeseong",
             "안쭈,Anjju",
             "정수연,Jeong Sooyeon",
             "우하정,Woo Hajeong",
             "효식,Hyosik",
             "해원,Haewon",
             "지호,Jiho",
             "주원,Joowon",
             "효석,Hyoseok",
             "선재,Seonjae",
             "지운,Jiwoon",
             "정태,Jeongtae",
             "종렬,Jongryeol",
             "윤용,Yoonyong",
             "희영,Heeyoung",
             "강원,Kangwon",
             "유나,Yuna",
             "용규,Yonggyu",
             "기훈,Kihoon",
             "선아,Seonah",
             "예영,Yeyoung",
             "하연,Hayeon",
             "희택,Heetaek",
             "중운,Joongwoon",
             "이형,Yihyung",
             "선혜,Seonhye",
             "지영,Jiyoung",
             "선미,Seonmi",
             "영호,Youngho",
             "재성,Jaeseong",
             "수연,Sooyeon",
             "하정,Hajeong",
             "새벽 :,Saebyeok :",
             "새벽이 형,Saebyeok-ie hyung",
             "새벽아,Saebyeok-ah",
             "새벽이,Saebyeok이",
             "새벽씨,Saebyeok-ssi",
             "새벽 씨,Saebyeok-ssi",
             "새벽 군,Saebyeok-gun",
             "새벽 형,Saebyeok hyung",
             "새벽의,Saebyeok의",
             "새부기,Saeboogi",
             "리더부기,Leader Boogi",
             "강한우,Kang Hanwoo",
             "앤서니 맥긴리,Anthony McKinley",
             "앤서니,Anthony",
             "맥긴리,McKinley",
             "신희범,Shin Heebeom",
             "박경석,Park Kyungseok",
             "빅 블루,Big Blue",
             "박건훈,Park Geonhoon",
             "장석훈,Jang Seokhoon",
             "X버스,Xverse",
             "황새,Hwangsae",
             "이승주,Lee Seungjoo",
             "김주철,Kim Joocheol",
             "햇살,Haetsal",
             "국혐,National Hated",
             "이재희,Lee Jaehee",
             "박재원,Park Jaewon",
             "이희세,Lee Heese",
             "강윤석,Kang Yoonseok",
             "아이노,INO",
             "올리버,Oliver",
             "이수한,Lee Soohan",
             "배드원,Bad One",
             "뉴데이즈,NEW days",
             "박상현,Park Sanghyun",
             "최재빈,Choi Jaebin",
             "김성민,Kim Seongmin",
             "앤써즈,Answers",
             "아이라이트,ILIGHT",
             "최정호,Choi Jeongho",
             "곽준우,Kwak Joonwoo",
             "앤 서방,An-seobang",
             "강진기,Kang Jinki",
             "강효준,Kang Hyojoon",
             "희범,Heebeok",
             "건훈,Kyungseok",
             "석훈,Geonhoon",
             "승주,Seokhoon",
             "승주,Seungjoo",
             "주철,Joocheol",
             "재희,Jaehee",
             "재원,Jaewon",
             "희세,Heese",
             "윤석,Yoonseok",
             "수한,Soohan",
             "상현,Sanghyun",
             "재빈,Jaebin",
             "성민,Seongmin",
             "정호,Jeongho",
             "준우,Joonwoo",
             "진기,Jinki",
             "효준,Hyojoon",
             "카일룸,KYLUM",
             "차우석,Cha Wooseok",
             "우석,Wooseok",
             "쭈 어머님,Jjumom",
             "지우니,Jiwooni",
             "리더님,Leader-nim",
             "쭈워니,Juuwoni",
             "황수정 과장님,Manager Hwang Soojung",
             "황수정,Hwang Soojung",
             "최정민,Choi Jungmin",
             "유찬희,Yoo Chanhee",
             "다니엘 서,Daniel Seo",
             "다니엘,Daniel",
             "다니 형,Dani hyung",
             "희은,Heeeun",
             "강진영,Kang Jinyung",
             "배신자2,Traitor 2",
             "스파이1,Spy 1",
             "최기문,Choi Kimoon",
             "세미님,Semi-nim",
             "세미 씨,Semi-ssi",
             "서민혁,Seo Minhyuk",
             "채연재,Chae Yunjae",
             "대장님,Captain",
             "Minjo조,Minjojo",
             "Hyosik이 :,Hyosik-ie :",
             "배신자1,Traitor 1",
             "스파이2,Spy 2",
             "정민,Jungmin",
             "찬희,Chanhee",
             "진영,Jinyung",
             "기문,Kimoon",
             "민혁,Minhyuk",
             "연재,Yunjae",
             "로건 윤혁 최,Logan Yoonhyuk Choi",
             "로건,Logan",
             "슬Logan,슬로건",
             "백민형,Baek Minhyung",
             "실트,trending",
             "채유호,Chae Yooho",
             "우혜정,Woo Hyejeong",
             "황지석,Hwang Jiseok",
             "루나리스,Lunaris ",
             "마태오,Matthaios ",
             "최윤솔,Choi Yoonsol",
             "소년들,Boys ",
             "박수현,Park Soohyun",
             "유호,Yooho",
             "혜정,Hyejeong",
             "지석,Jiseok",
             "윤솔,Yoonsol",
             "수현,Soohyun",
             "에블린 노을 맥긴리,Evelyn Noeul McKinley",
             "에블린,Evelyn",
             "에블린 노을 McKinley,Evelyn Noeul McKinley",
             "철아,Cheol-ah",
             "배수진,Bae Soojin",
             "박건후,Park Gunhoo",
             "허해준,Heo Haejun",
             "황지훈,Hwang Jihoon",
             "지훈이,Jihoon이",
             "이준희,Lee Junhee",
             "준희,Junhee",
             "박민하,Park Minha",
             "심한철,Shim Hancheol",
             "강여은,Kang Yeoeun",
             "(\w)Soohan,$1수한",
             "데이브 레비탄,Dave Levitan",
             "티케,Tike",
             "티케 엔터테인먼트,Tike Entertainment",
             "이용민,Lee Yongmin",
             "강채은,Kang Chaeeun",
             "강현서,Kang Hyunseo",
             "강대형,Kang Daehyung",
             "박호현,Park Hohyun",
             "호현,Hohyun",
             "김수경,Kim Sookyung",
             "수경,Sookyung",
             "이정석,Lee Jungsuk",
             "지웅이,Ji Woongi",
             "최동국,Choi Dongguk",
             "이춘형,Lee Chunhyung",
             "임수환,Im Soohwan",
             "쭈원,Jjuwon",
             "쭈워나,Jjuwonah",
             "우정훈,Woo Jonghoon",
             "이원일,Lee Wonil",
             "원일,Wonil",
             "(\w)Wonil,$1원일",
             "이선겸,Lee Seongyeom",
             "선겸,Seongyeom",
             "강유안,Kang Yooan",
             "유안,Yooan",
             "도윤,Doyun",
             "강한영,Kang Hanyoung",
             "곽민재,Kwak Minjae",
             "민재,Minjae",
             "새북아,Saeboog-ah",
             "보이드 엔터테인먼트,VOID Entertainment",
             "보이드 엔터,VOID Enter",
             "보이드,VOID",
             "김문재,Kim Moonjae",
             "문재,Moonjae",
             "박해린,Park Haerin",
             "정 PD,PD Jeong",
             "온 피디,PD Ohn",
             "곽신희,Kwak Shinhee",
             "윤시연,Yoon Siyeon",
             "클라루스,CLARUS",
             "송다온,Song Daon",
             "브삼,BEUSAM",
             "Heeyoung이 Noona,Heeyoung-ie noona",
             "박재우,Park Jaewoo",
             "박해린,Park Haerin",
             "해린,Haerin",
             "효시깅,Hyoshiking",
             "주수린,Joo Soorin",
             "박유미,Park Yoomi",
             "박상우,Park Sangwoo",
             "주니 형,Juni hyung",
             "매hyung,매형",
             "노을,Noeul",
             "김준서,Kim Junseo",
             "박의신,Park Euishin",
             "의신,Euishin",
             "데이브 유,Dave Yoo",
             "데이브,Dave",
             "뉴데,New Day",
             "송다온,Song Daon",
             "다온,Daon",
             "Yeyoung이 Noona,Yeoyoung-ie noona",
             "고석희,Koh Seokhee",
             "진형,Jinhyung",
             "백범준,Baek Beomjun",
             "범준,Beomjun-ie hyung",
             "정 씨,Jeong-ssi",
             "무로,Muro",
             "(\w)Muro,$1무로",
             "강 씨,Kang-ssi",
             "신비은,Shin Bieun",
             "비은,Bieun",
             "(\w)Bieun,$1비은",
             "명소은,Myung Soeun",
             "소은,Soeun",
             "(\w)Soeun,$1소은"
                   ];
