/* substitui a cor do código de acordo com a palavra */
function styleCode(htmlContent){	
	
	/* regex para colorir o #define */
	htmlContent.html(htmlContent.html().replace(/(#define [A-Z]*)/g,"<font color='#800080'>$1</font>"));

	/* regex para declaração de função */
	htmlContent.html(htmlContent.html().replace(/(void.*)\(/g,"<font color='#060'>$1</font>("));

	/* regex para chamada de função */
	htmlContent.html(htmlContent.html().replace(/(.*?)\(/g,"<font color='#06C'>$1</font>("));

	/* regex para colorir as palavras reservadas */
	htmlContent.html(htmlContent.html().replace(/(if|void|int|typedef|down|up|while)/g,"<font color='#009'>$1</font>"));
}	

