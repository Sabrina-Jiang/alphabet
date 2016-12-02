$('.root-frame').load(function() {
    var ra = $(document.getElementsByClassName('root-frame')[0].contentWindow.document.body).html();
    console.log(ra);
});
