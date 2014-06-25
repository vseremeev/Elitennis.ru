function getban()
{var data=$('#mydata').val()
	var data2=$('#server').val()
	$.ajax({
		type:"POST",
		url:"/getban.php",
		data:({"data":data,"server":data2}),
		success:function(html){
			$("#result").animate({opacity:0},500,function(){
				$("#result").empty();$("#result").append(html);
			}).animate({opacity:1},500);
		}
	});
};