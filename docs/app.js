window.onload = function(){
    var facebooklinkList = document.querySelectorAll('.fblink');

    alert('start linking');
    facebooklinkList.forEach(function(facebooklink) {
        alert('linking now');

        //通常リンクを取得
        var normalLink = facebooklink.getAttribute('href');

        //通常リンクを無効にする
        facebooklink.setAttribute('href','javascript:void(0)');

        //ディープリンク用リンクを取得
        var deeplink = facebooklink.getAttribute('fbhref');


        facebooklink.addEventListener('click',function(e){
            window.location.href = deeplink;
            setTimeout(function() {
            window.location.href = normalLink;
            }, 500); 
        });
    },false);
}