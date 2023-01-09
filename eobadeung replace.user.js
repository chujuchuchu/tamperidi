// ==UserScript==
// @name         eobadeung replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/425*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/eobadeung%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/eobadeung%20replace.user.js
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

        var honorificsreplace = honorifics;
        var totalhonorifics = honorificsreplace.length;

        var hangulhonorifics = [];
        hangulhonorifics.length = honorificsreplace.length;

        var romanhonorifics = [];
        romanhonorifics.length = honorificsreplace.length;

        for (let i = 0; i < honorificsreplace.length; i++) {
            let splittext = honorificsreplace[i].split(";");
            let regtext = new RegExp(splittext[0], "g");
            hangulhonorifics[i] = regtext;
            romanhonorifics[i] = splittext[1];
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
            for (let i = 0; i < totalhonorifics; i++) {
                oldTxt = oldTxt.replaceAll(hangulhonorifics[i], romanhonorifics[i]);
            }
            txtNode.nodeValue = oldTxt;
        }


    }, 2000);






})();


var names = ["수혁,Soohyuk",
             "프리야 쿠마리,Priya Kumari",
             "프리야,Priya",
             "쿠마리,Kumari",
             "마리스,MARIS",
             "올리비에 마틴,Olivier Martin",
             "올리비에,Olivier",
             "마틴,Martin",
             "박무현,Park Moohyun",
             "무현,Moohyun",
             "네바에 홉킨스,Neva Hopkins",
             "네바에,Neva",
             "홉킨스,Hopkins",
             "에밀리,Emily",
             "엘리엇 브라운,Elliot Brown",
             "엘리엇,Elliot",
             "이빈,Lee Bin",
             "왕웨이,Wang Wei",
             "제임스 밀러,James Miller",
             "제임스,James",
             "밀러,Miller",
             "카를로스 루이즈,Carlos Ruiz",
             "루이즈,Carlos Ruiz",
             "카를로스,Ruiz",
             "투마나코 오란가,Tumanako Oranga",
             "투마나코,Tumanako",
             "오란가,Oranga",
             "후미코,Fumiko",
             "헨리,Henry",
             "마이클 로아커,Michael Roarker",
             "마이클,Michael",
             "로아커,Roarker",
             "마커스,Marcus",
             "조동희,Cho Donghee",
             "신해량,Shin Haeryang",
             "씬해량,Sshin Haeryang",
             "해량,Haeryang",
             "강수정,Kang Soojung",
             "수정,Soojung",
             "김재희,Kim Jaehee",
             "재희,Jaehee",
             "백애영,Baek Aeyoung",
             "애영,Aeyoung",
             "서지혁,Seo Jihyuk",
             "지혁,Jihyuk",
             "정상현,Jung Sanghyun",
             "상현,Sanghyun",
             "사토 류스케,Sato Ryusuke",
             "사토,Sato",
             "류스케,Ryusuke",
             "타마키 유즈루,Tamaki Yuzuru",
             "타마키,Tamaki",
             "유즈루,Yuzuru",
             "타카하시 유리에,Takahashi Yurie",
             "유리에,Yurie",
             "타카하시,Takahashi",
             "블라디미르 세르게예비치 이바노프,Vladimir Sergeevich Ivanov",
             "블라디미르,Vladimir",
             "세르게예비치,Sergeevich",
             "이바노프,Ivanov",
             "니키타,Nikita",
             "니콜라이,Nikolai",
             "드미트리,Dmitry",
             "빅토르 바실예프,Victor Vasilyev",
             "빅토르,Victor",
             "바실예프,Vasilyev",
             "소피야,Sophia",
             "이리나,Irina",
             "하이윤,Hai Yun",
             "리웨이,Li Wei",
             "슈란,Shu Ran",
             "웨이치,Wei Qi",
             "쯔쉬안,Zi Xuan",
             "하오란,Hao Lan",
             "홍타오,Hong Tao",
             "데이비드,David",
             "제니퍼 스미스,Jennifer Smith",
             "스미스,Smith",
             "제니퍼,Jennifer",
             "대니얼 로드리게스,Daniel Rodriguez",
             "대니얼,Daniel",
             "로드리게스,Rodriguez",
             "레너드 샌더스,Leonard Sanders",
             "레너드,Leonard",
             "샌더스,Sanders",
             "케빈 윌슨,Kevin Wilson",
             "케빈,Kevin",
             "윌슨,Wilson",
             "리암,Liam",
             "해리 우즈,Harry Woods",
             "해리,Harry",
             "우즈,Woods",
             "릴리,Lily",
             "빅토리아,Victoria",
             "카밀라,Camilla",
             "타일러 존스,Tyler Jones",
             "타일러,Tyler",
             "존스,Jones",
             "윌리엄 에릭슨,William Erikson",
             "윌리엄,William",
             "에릭슨,Erikson",
             "안젤라 말론,Angela Malone",
             "안젤라,Angela",
             "유금이,Yoo Geumyi",
             "금이씨,Geumyi-ssi",
             "금이 씨,Geumyi-ssi",
             "금이님,Geumyi-ssi",
             "금이 님,Geumyi-ssi",
             "금이야,Geumyi-ya",
             "케빈 로이,Kevin Roy",
             "더스틴,Dustin",
             "로건,Logan",
             "루카스,Lucas",
             "마르티나 산체스,Martina Sanchez",
             "마르티나,Martina",
             "산체스,Sanchez",
             "벤자민,Benjamin",
             "샘 영,Sam Young",
             "엠마,Emma",
             "은자디,Njadi",
             "은라디,Nradi",
             "카누,Kano",
             "장우이,Jang Wooyi",
             "제임스 다넬,James Darnell",
             "제임스,James",
             "다넬,Darnell",
             "벨리알 라일리,Belial Riley",
             "벨리알,Belial",
             "라일리,Riley",
             "김가영,Kim Gayoung",
             "가영,Gayoung",
             "(\w)Gayoung,$1가영",
             "아서 굿맨,Arthur Goodman",
             "굿맨,Goodman",
             "카터,Carter",
             "무한Infinity교,Ininityism",
             "무한교,Infinityism",
             "마이클 로아커,Michael Roarker",
             "마이클,Michael",
             "로아커,Roarker",
             "엘리자베스 위버,Elizabeth Weaver",
             "엘리자베스,Elizabeth",
             "카누,Kano",
             "데이비드 나이트,David Knight",
             "데이비드,David",
             "나이트,Knight",
             "파멜라 브라운,Pamela Brown",
             "파멜라,Pamela",
             "브라운,Brown",
             "타일러 존스,Tyler Jones",
             "타일러,Tyler",
             "존스,Jones",
             "러시아,Russia",
             "가팀,Ga-team",
             "나팀,Na-team",
             "다팀,Da-team",
             "라팀,Ra-team",
             "마팀,Ma-team",
             "바팀,Ba-team",
             "사팀,Sa-team",
             "아팀,Ah-team",
             "해저기지,Undersea Station",
             "대한도,Daehan Island",
             "중앙동,Center Building",
             "청룡동,Cheongryong Building",
             "백호동,Baekho Building",
             "주적동,Joojeok Building",
             "현무동,Hyunmoo Building",
             "미스터 팍,Mr. Park",
             "미스터 씬,Mr. Shin",
             "이지현,Lee Jihyun",
             "지현,Jihyun",
             "신팀장,Team Leader Shin",
             "신 팀장,Team Leader Shin",
             "강부팀장,Deputy Chief Kang",
             "강 부팀장,Deputy Chief Kang",
             "(\w)Kano,\]1카누",
             "(\w)Geumyi,$1금이",
             "(\w)Haeryang,$1해량",
             "(\w)Soojung,$1수정",
             "(\w)Yurie,$1유리에",
             "(\w)Jihyun,$1지현",
             "우에하라 스미레,Uehara Sumire",
             "스미레,Sumire",
             "우에하라,Uehara",
             "야마시타,Yamashita",
             "이치다,Ichita",
             "스즈키,Suzuki",
             "치과 선생님,dentist seongsaeng-nim",
             "미첼이라,Mitchell",
             "조셉 그레이엄,Joseph Graham",
             "조셉,Joseph",
             "위버,Weaver",
             "베스,Beth",
             "리즈,Liz",
             "캐새키,Kaesaeki"
                   ];

var honorifics = ["([a-z])이 형;$1-ie hyung",
                  "([a-z])이 누나; $1-ie noona",
                  "([a-z])이 오빠;$1-ie oppa",
                  "([a-z]) 이 형;$1-ie hyung",
                  "([a-z]) 이 누나; $1-ie noona",
                  "([a-z])언니;$1 unnie",
                  "([a-z])누님;$1 noonim",
                  "([a-z])누나;$1 noona",
                  "([a-z])형;$1 hyung",
                  "([a-z])형님;$1 hyung-nim",
                  "([a-z]) 언니;$1 unnie",
                  "([a-z]) 언님;$1 unnim",
                  "([a-z]) 누님;$1 noonim",
                  "([a-z]) 누나;$1 noona",
                  "([a-z]) 형님;$1 hyung-nim",
                  "([a-z]) 형;$1 hyung",
                  "([a-z])오라버니;$1 orabeoni",
                  "([a-z])선배님;$1 sunbae-nim",
                  "([a-z])후배님;$1 hoobae-nim",
                  "([a-z]) 동생;$1 dongsaeng",
                  "([a-z])동생;$1 dongsaeng",
                  "([a-z]) 오라버니;$1 orabeoni",
                  "([a-z]) 선배님;$1 sunbae-nim",
                  "([a-z]) 후배님;$1 hoobae-nim",
                  "([a-z]) 아저씨;$1 ahjussi",
                  "([a-z])아저씨;$1 ahjussi",
                  "([a-z])오빠;$1 oppa",
                  "([a-z]) 오빠;$1 oppa",
                  "([a-z]) 선배;$1 sunbae",
                  "([a-z])선배;$1 sunbae",
                  "([a-z])아;$1-ah",
                  "([a-z])야;$1-ya",
                  "([a-z]) 씨;$1-ssi",
                  "([a-z])씨;$1-ssi",
                  "([a-z]) 님;$1-nim",
                  "([a-z])님;$1-nim",
                  "([a-z]) 군;$1-gun",
                  "([a-z]) 양;$1-yang",
                  "형님;Hyung-nim",
                  "오라버니;Orabeoni",
                  "선배님;Sunbae-nim",
                  "후배님;Hoobae-nim",
                  "여동생;sister dongsaeng",
                  "남동생;brother dongsaeng",
                  "동생;dongsaeng",
                  "X발;시발",
                  "시X;시발",
                  "X나;존나",
                  "존X;존나",
                  "X도;좆도",
                  "좆X;좆도",
                  "X새끼;씹새끼",
                  "개X끼;개새끼",
                  "X같;좆같",
                  "언니;Unnie",
                  "언님;Unnim",
                  "누님;Noonim",
                  "누나;Noona",
                  "오빠;Oppa",
                  "막내야;Maknae-ya",
                  "\r\n막내;\r\nMaknae",
                  "막내;maknae",
                  "피디님;PD-nim",
                  "([a-z]) 선생님; $1 seonsaeng-nim",
                  "선생님; Seonsaeng-nim",
                  "아저씨;Ahjussi",
                  "PD님;PD-nim",
                  "혀엉;Hyuung",
                  "선배;sunbae",
                  "도련님;Young Master-nim",
                  "([[:punct:]])형;$1Hyung",
                  "형([[:punct:]]);hyung$1",
                  ", 형;, hyung",
                  "\r\n형([[:space:]]);\r\nHyung$1",
                  "\r\n형이;\r\nHyung이",
                  "([[:space:]])형([[:space:]]);$1hyung$1",
                  "([[:punct:]]) 형;$1 Hyung",
                  "형이;hyung이",
                  "형은;hyung은",
                  "형도;hyung도",
                  "형과;hyung과",
                  "형입;hyung입",
                  "형에게;hyung에게",
                  "형으로;hyung으로",
                  "형\r\n;hyung\r\n",
                  "형의;hyung의",
                  "형을;hyung을",
                  "형들;hyung들",
                  "형은;hyung은",
                  "형만;hyung만",
                  "혀어어어엉;hyuuung",
                  "\r\n형은;\r\nhyung은",
                  "hyung([^a-z -.,…“\"이에의을과?‘'’은들도아]);형$1",
                  "Hyung([^a-z -.,…“\"이에의을과?‘'’은들도아]);형$1",
                  "([^a-zA-Z “\"‘-])hyung;$1형",
                  "([^a-zA-Z “\"‘-])Noona;$1누나",
                  "([a-z]) Ahjussi; $1 ahjussi",
                  "([a-z]) Noona; $1 noona",
                  "형한테;hyung한테",
                  "대표님;Daepyo-nim",
                  "(\w)sunbae;$1선배",
                  "(\w)Sunbae;$1선배",
                  "년 hyung이;년 형이",
                  "하이고오;haigooo",
                  "아이고오;aigooo",
                  "하이고;haigoo",
                  "아이고;aigoo",
                  "([[:space:]])([[:space:]])-yang;$1양",
                  "ah-ah;aah",
                  "([aeiouhy])-ah;$1아",
                  "([^aeiouhy])-ya;$1야",
                  "작은형;Younger hyung",
                  "큰형;Older hyung",
                  "‘님’;‘nim’",
                  "우와 씨;Uwah ssi",
                  "씨이바아알;FuUuCk",
                  "에이 씨;Eyy ssi",
                  "아이 씨;Aiy ssi",
                  "―형~;―Hyung~"
];





