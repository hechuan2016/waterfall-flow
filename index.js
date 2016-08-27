
$(window).on("load",function(){
    imgLocation();
        var dateImg = {"date":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        window.onscroll = function(){
        	if (scrollside()) {
        		$.each(dateImg.date,function(index,value){
        			var box = $("<div>").addClass("box").appendTo($(".container"));
        			var content = $("<div>").addClass("content").appendTo(box);
        			$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
        		});
        		imgLocation();
        	}
        };
        window.onresize = function(){
            imgLocation();
        };
});

function scrollside(){
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeigth = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight<scrollHeight+documentHeigth)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function(index,value){
        // console.log(index+"--"+value);
        var boxHeight = box.eq(index).height();
        if (index<num) {
        	boxArr[index] = boxHeight;
        	// console.log(boxHeight);
         //    $(value).css({
         //        "position":"absolute";
         //        "top":"0px"；
         //        "left":boxWidth*index
         //    });
        }else{
        	var minboxHeight = Math.min.apply(null,boxArr);
        	// console.log(minboxHeight);
        	var minboxIndex = $.inArray(minboxHeight,boxArr);
        	// console.log(minboxIndex);
        	$(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
        	});
        	boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}