
$(function(){
	$(window).on("resize", function(){
		//1.1 获取窗口的宽度
		var clientW = $(window).width();
	//	console.log(clientw);
		
		//1.2 设置临界值
		
		var idShowBigImage = clientW >= 800;
		
		//1.3 获取所有的 item
		
		var $allItems = $("#lk_carousel .item");
		//console.log($allItems);
		
		//1.4 遍历
		$allItems.each(function(index,item){
		//	1.4.1 取出图片路径
		
		var src = idShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
		var imgUrl ='url("'+ src +'")'
		
		// 1.4.2 设置背景
		$(item).css({
			backgroundImage:imgUrl
		});
		// 1.43 设置img标签
		if(!idShowBigImage){
		var $img = "<img src='"+ src +"'>";
		$(item).empty().append($img);
		}else{
			$(item).empty();
		}
		
		});
		
	});
	
	$(window).trigger("resize");
});



    // 2. 工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 3. 动态处理宽度
    $(window).on("resize", function () {
         var $ul = $("#lk_product .nav");
         var $allLis = $("[role='presentation']", $ul);
         // console.log($allLis);

         // 3.1 遍历
        var totalW = 0;
        $allLis.each(function (index, item) {
             totalW += $(item).width();
        });

        // console.log(totalW);

        var parentW = $ul.parent().width();

        // 3.2 设置宽度
        if(totalW > parentW){
            $ul.css({
                width: totalW + "px"
            })
        }else {
            $ul.removeAttr("style");
        }
    });



    // 4. 导航处理
    var allLis = $("#lk_nav li");
    
    $(allLis[2]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
    });


    $(window).trigger("resize");
});