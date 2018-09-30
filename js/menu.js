var menu=(function () {
   return{
       init:function () {
           this.event();
       },
       event:function () {
           var _this=this;
           $('li:has(ul)').on('click',function () {
               $(this).children('ul').slideToggle();
               $(this).children("div").children("i").toggleClass("icon-jian").toggleClass("icon-jia")//切换
           });
           $("li").on("click", function(ev) {
               ev.stopPropagation();
           })
       }
   } 
}());