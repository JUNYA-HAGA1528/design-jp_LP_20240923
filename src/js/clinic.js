$(function(){
	//各院詳細画面用
	//デフォルト
	var s3length=$("#clinic_list .select .map iframe").length;
	var s3compcount=0;

	$("#clinic_list .select").css("display","none");
	$("#clinic_list .select.defalut").css("display","block");

	$("#clinic_list .area a").on("click",function(){
		var getarea=$(this).attr("data-area");
		var getsrc=$("#clinic_list .select."+getarea+" .map iframe").attr("data-src");

		$("#clinic_list .select").css("display","none");	
		$("#clinic_list .select."+getarea).css("display","block");
		$("#clinic_list .select .map iframe").attr("src","");
		$("#clinic_list .select."+getarea+" .map iframe").attr("src",getsrc);
	});
});