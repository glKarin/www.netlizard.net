function ShowImageSWin_2009(ID, width, height,WinTitle)
{
	if(WinTitle === '3D Clone' || WinTitle === "3D Клон")
		ID = "2009/klon.mp4 скачать бесплатно - SPCS.ME.mp4";
	else if(WinTitle === "3D Shadows of Egypt" || WinTitle === "3D Тени Египта")
		ID = "2009/3D TENI EGIPTA spaces.ru.mp4 скачать бесплатно - .mp4";
	var scroll = "no";
	var top=0, left=0;
	if(width > screen.width-10 || height > screen.height-28) scroll = "yes";
	if(height < screen.height-28) top = Math.floor((screen.height - height)/2-14);
	if(width < screen.width-10) left = Math.floor((screen.width - width)/2-5);
	width = Math.min(width, screen.width-10);	
	height = Math.min(height, screen.height-28);	
	var wnd = window.open("","picpopup","scrollbars="+scroll+",resizable=yes,resizable=no,width="+width+",height="+height+",left="+left+",top="+top);
	wnd.document.write("<html><head>\n");
	wnd.document.write("<title>"+WinTitle+"</title></head>\n");
	wnd.document.write("<body topmargin=0 leftmargin=0 marginwidth=0 marginheight=0 onKeyPress=\"KeyPress()\" align=\"center\">\n");
	wnd.document.write("<video id=\"_nl_video\" src=\""+ID+"\" border=\"0\" autoplay=\"autoplay\" controls=\"controls\">Your browser not support video!</video>");
	wnd.document.write("<script>window.onload=function(){document.getElementById(\"_nl_video\").play()}</script>");
	wnd.document.write("</body>");
	wnd.document.write("</html>");
	wnd.document.close();
}
