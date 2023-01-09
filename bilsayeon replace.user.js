// ==UserScript==
// @name         bilsayeon replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/809*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ridibooks.com&size=64
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/bilsayeon%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/bilsayeon%20replace.user.js
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

var names = ["권사윤,Kwon Sayoon",
             "사윤,Sayoon",
             "(\w)Sayoon,$1사윤",
             "한건주,Han Geonjoo",
             "건주,Geonjoo",
             "(\w)Geonjoo,$1건주",
             "이재희,Lee Jaehee",
             "재희,Jaehee",
             "(\w)Jaehee,$1재희",
             "박춘복,Park Chunbok",
             "춘복,Chunbok",
             "(\w)Chunbok,$1춘복",
             "구창인,Goo Changin",
             "창인,Changin",
             "(\w)Changin,$1창인",
             "한경진,Han Kyungjin",
             "경진,Kyungjin",
             "(\w)Kyungjin,$1경진",
             "강지혁,Kang Jihyuk",
             "지혁,Jihyuk",
             "(\w)Jihyuk,$1지혁",
             "김종식,Kim Jongsik",
             "종식,Jongsik",
             "(\w)Jongsik,$1종식",
             "배동주,Bae Dongjoo",
             "동주,Dongjoo",
             "(\w)Dongjoo,$1동주",
             "배민철,Bae Mincheol",
             "민철,Mincheol",
             "(\w)Mincheol,$1민철",
             "선재,Seonjae",
             "(\w)Seonjae,$1선재",
             "백룡,Baekryong/White Dragon",
             "(\w)Baekryong/White Dragon,$1백룡",
             "찬희,Chanhee ",
             "(\w)Chanhee ,$1찬희",
             "구오,Guoh ",
             "(\w)Guoh ,$1구오",
             "옌,Yen ",
             "(\w)Yen ,$1옌",
             "연이,Yeonyi ",
             "(\w)Yeonyi ,$1연이",
             "도미니크,Dominique ",
             "(\w)Dominique ,$1니크",
             "밤쥐,Night Rat",
             "(\w)Night Rat,$1밤쥐",
             "용호,Yongho",
             "(\w)Yongho,$1용호",
             "천상천하 유아독존,天上天下唯我独尊",
             "(\w)天上天下唯我独尊,$1독존",
             "미샤,Misha",
             "(\w)Misha,$1미샤",
             "리안,Lyan",
             "(\w)Lyan,$1리안",
             "라이,Rai",
             "(\w)Rai,$1라이",
             "시로,Shiro",
             "(\w)Shiro,$1시로",
             "마루,Maru",
             "(\w)Maru,$1마루",
             "송양,Songyang",
             "(\w)Songyang,$1송양",
             "그레이나,Greyna",
             "(\w)Greyna,$1이나",
             "이한,Lee Han",
             "(\w)Lee Han,$1이한",
             "벤터,Venter",
             "(\w)Venter,$1벤터",
             "우진해,Woo Jinhae",
             "(\w)Woo Jinhae,$1진해",
             "태석,Taeseok",
             "(\w)Taeseok,$1태석",
             "미정,Mijeong",
             "(\w)Mijeong,$1미정",
             "호철,Hocheol",
             "(\w)Hocheol,$1호철",
             "예쁜아,Yeppeun-ah",
             "(\w)Yeppeun-ah,$1쁜아",

            ];
