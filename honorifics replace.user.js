// ==UserScript==
// @name         honorifics replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RIDI CAN'T STOP ME
// @author       chujuchuchu
// @match        https://view.ridibooks.com/books/*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ridibooks.com&size=64
// @updateURL    https://github.com/chujuchuchu/tamperidi/blob/main/honorifics%20replace.user.js
// @downloadURL  https://github.com/chujuchuchu/tamperidi/blob/main/honorifics%20replace.user.js
// @grant        none
// ==/UserScript==

(function() {

    setTimeout(function() {

        var honorificsreplace = honorifics;
        var totalhonorifics = honorificsreplace.length;

        var hangulhonorifics = [];
        hangulhonorifics.length = honorificsreplace.length;

        var romanhonorifics = [];
        romanhonorifics.length = honorificsreplace.length;

        for (let i = 0; i < honorificsreplace.length; i++) {
            let splittext = honorificsreplace[i].split(";");
            let punctreplace = splittext[0].replaceAll("([[:punct:]])","([^A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])");
            let regtext = new RegExp(punctreplace.replaceAll("(\w)","([A-za-z\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])"), "g");

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

            for (let i = 0; i < totalhonorifics; i++) {
                oldTxt = oldTxt.replaceAll(hangulhonorifics[i], romanhonorifics[i]);
            }

            txtNode.nodeValue = oldTxt;
        }

    }, 2000);

})();

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
                  "선생님;Seonsaeng-nim",
                  "아저씨;Ahjussi",
                  "PD님;PD-nim",
                  "혀엉;Hyuung",
                  "선배;sunbae",
                  "도련님;Young Master-nim",
                  "([^[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]])형;$1Hyung",
                  "형([^[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]]);hyung$1",
                  ", 형;, hyung",
                  "\r\n형 ;\r\nHyung ",
                  "\r\n형이;\r\nHyung이",
                  " 형 ; hyung ",
                  "([^[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]]) 형;$1 Hyung",
                  "([^[A-za-z \uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]])형 ;$1Hyung",
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
                  "  -yang;$1양",
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




