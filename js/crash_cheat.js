//网页标题效果
var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '╭(°A°`)╮小可爱走丢了呦';
         clearTimeout(titleTime);
     }
     else {
         document.title = '(ฅ>ω<*ฅ)找到我啦!' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });