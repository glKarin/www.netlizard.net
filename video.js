function ShowImageSWin(ID, width, height,WinTitle)
{
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
	wnd.document.write("<img alt=\"\" src=\""+ID+"\" border=\"0\">");
	wnd.document.write("</body>");
	wnd.document.write("</html>");
	wnd.document.close();
}
