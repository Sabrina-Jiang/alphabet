var listFlag = 0, liIndex;

$('.WLBtn').click(function() {
    liIndex = $(this).attr('class');
    liIndex = liIndex.replace(/[^0-9]/ig,"") - 1;

    console.log(liIndex);
    exchageWithRandom(liIndex);
    $('.wordlists').css('display', 'none');
    $('.rem-card > input').css('display', 'block');
    $('.rem-card > input').focus();
    $('.info-card').css('display', 'none');
    $('.today-board').css('display', 'none');
    $('.dash-spliter').css('display', 'none');
    $('.rem-card > h2').text(wordlist[liIndex][listFlag]);
});

$('.rem-card > input').bind('keypress', function(event) {
    if(event.keyCode == "13") {
        answerList[listFlag] = $('.rem-card > input').val();
        listFlag++;
        if (listFlag >= wordlist[liIndex].length) {
            $('.wl-card > h2').text('学习完毕');
            $('.wl-card > input').css('display', 'none');
            $('.rem-wrapper').css('display', 'block');
        }
        $('.wl-card > h2').text(wordlist[liIndex][listFlag]);
        $('.wl-card > input').val('');
    }
});

$('.answer-check').click(function() {
    if (answerList.length === 0) {
        liIndex = $($($($(this).parent()).parent()).children()[0]).attr('class');
        liIndex = liIndex.replace(/[^0-9]/ig,"") - 1;

        console.log(liIndex);
        $('.wordlists').css('display', 'none');
        $('.rem-card > input').css('display', 'block');
        $('.info-card').css('display', 'none');
        $('.wl-card > h2').text('查看答案');
        $('.today-board').css('display', 'none');
        $('.dash-spliter').css('display', 'none');
        $('.wl-card > input').css('display', 'none');
        $('.rem-wrapper').css('display', 'block');
        for (var i =0; i < liIndex; i++) {
            answerList[i] = '';
        }
        $('.rem-wrapper').click();
    }
});

function listRender(requestIndex, info) {
    var renderHTML = "<div class=\"wl-card wl-card-responsive\">" +
        "<h2 class=\"ans-word\">" + wordlist[liIndex][requestIndex] + "</h2>" +
        "<ul class=\"ans-list\">" +
            "<li class=\"ans-trans\">" + resultList[liIndex][requestIndex] + "</li>"+
            "<li class=\"ans-mine\">你的答案：<p>" + answerList[requestIndex] + "</p></li>"+
        "</ul>"+
    "</div>";

    $('.container').append($(renderHTML));
}

$('.rem-wrapper').click(function() {
    console.log(liIndex);
    if ($('.rem-wrapper > .btn').text() == '返回'){
        history.go(0);
    }
    $('.rem-wrapper > .btn').text('返回');
    for (var j = 0; j < wordlist[liIndex].length; j++) {
        listRender(j);
    }
});

function exchageWithRandom(arrIndex) {
    var wlArr = wordlist[arrIndex], rsArr = resultList[arrIndex];
    for (var i = 0; i < wlArr.length; i++) {
        var wTmp = wlArr[i], rTmp = rsArr[i];
        var target = parseInt(Math.random() * (wlArr.length));
        wlArr[i] = wlArr[target];
        wlArr[target] = wTmp;
        rsArr[i] = rsArr[target];
        rsArr[target] = rTmp;
    }
}
