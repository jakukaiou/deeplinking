window.onload = function(){
    console.log("deeplinking");
    var facebooklinkList = document.querySelectorAll('.fblink');

    facebooklinkList.forEach(function(facebooklink) {
        console.log(facebooklink);

        //通常リンクを取得
        var normalLink = facebooklink.getAttribute('href');
        console.log(normalLink);
        //通常リンクを無効にする
        facebooklink.setAttribute('href','javascript:void(0)');

        //ディープリンク用リンクを取得
        var deeplink = facebooklink.getAttribute('fbhref');
        console.log(deeplink);


        facebooklink.addEventListener('click',function(e){
            window.location.href = deeplink;
            setTimeout(function() {
            window.location.href = normalLink;
            }, 500); 
        });
    },false);
}