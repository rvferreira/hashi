
/* substitui a cor do código de acordo com a palavra */
function styleCode(code){	
	htmlContent = ($("#"+code+"_content"));
	htmlComment = ($("#"+code+"_comment"));
	/* regex para colorir o #define */
	htmlContent.html(htmlContent.html().replace(/(#define [A-Z]*)/g,"<font color='#800080'>$1</font>"));

	/* regex para declaração de função */
	htmlContent.html(htmlContent.html().replace(/(void .*?)\(/g,"<font color='#060'>$1</font>("));

	/* regex para chamada de função */
	htmlContent.html(htmlContent.html().replace(/(test|put_forks?|eat|take_forks?|think*?)\(/gi,"<font color='#06C'>$1</font>("));

	/* regex para colorir as palavras reservadas */
	htmlContent.html(htmlContent.html().replace(/(if|void|int|typedef|down|up|while|semaphore)/g,"<font color='#009'>$1</font>"));

	/* regex para colorir as palavras reservadas */
	htmlComment.html(htmlComment.html().replace(/(\/\*.*?\*\/)/g,"<font color='#999'>$1</font>"));
}	

function contentCode(){
	$("#code_error_content").html("<pre>#define N 5<br /><br />"+
		"void philosopher(int i)<br />"+
		"{<br />"+
		"	while(TRUE){ <br/>"+
		"		think(); <br/>"+
		"		take_fork(i); <br/>"+
		"		take_fork((i+1) % N); <br/>"+
		"		eat(); <br/>"+
		"		put_fork(i); <br/>"+
		"		put_fork((i+1) % N); <br/>"+
		"	} <br/>"+
	"}</pre>");

	$("#code_correct_content").html("<pre>#define N 	 5<br/>"+
		"#define LEFT	 (i+N-1)%N <br/>"+
		"#define RIGHT 	 (i+1)%N<br/>"+
		"#define THINKING 0<br/>"+
		"#define HUNGRY 	 1<br/>"+
		"#define EATING 	 2<br/>"+
		"typedef int semaphore;<br/>"+
		"int state[N];<br/>"+
		"semaphore mutex = 1;<br/>"+
		"semaphore s[N];<br/><br/>"+
		"void philosopher(int i)<br/>"+
		"{<br />"+
		"	while(TRUE){<br/>"+
		"		think();<br/>"+
		"		take_forks(i);<br/>"+
		"		eat();<br/>"+
		"		put_forks(i);<br/>"+
		"	}<br/>"+
		"}<br/><br/>"+
		"void take_forks(int i)<br/>"+
		"{<br/>"+
		"	down(&mutex);<br/>"+
		"	state[i] = HUNGRY;<br/>"+
		"	test(i);<br/>"+
		"	up(&mutex);<br/>"+
		"	down(&s[i]);<br/>"+
		"}<br/><br/>"+
		"void put_forks(i)<br/>"+
		"{<br/>"+
		"	down(&mutex);<br/>"+
		"	state[i] = THINKING;<br/>"+
		"	test(LEFT);<br/>"+
		"	test(RIGHT);<br/>"+
		"	up(&mutex);<br/>"+
		"}<br/><br/>"+
		"void test(i)<br/>"+
		"{<br/>"+
		"	if(state[i]==HUNGRY && state[LEFT] != EATING<br/>"+
		"		&& state[RIGHT] != EATING)<br/>"+
		"	{<br/>"+
		"		state[i] = EATING;<br/>"+
		"        up(&s[i]);<br/>"+
		"	}<br/>"+	
	"}</pre>");

}		

function codeLanguageComment(lang){
	
	if(!lang) {
		
		$("#code_error_comment").html("<pre>"+
			"/* número de filósofos */<br/></br>"+
			"/* i:número do filósofo, de 0 a 4 */<br/>"+
			"<br/><br/>"+
			"/* o filósofo está pensando */<br/>"+
			"/* pega o garfo esquerdo */<br/>"+
			"/* pega o garfo direito; % é o operador do módulo */<br/>"+
			"/* hummm! Espaguete */<br/>"+
			"/* devolve o garfo esquerdo à mesa */<br/>"+
			"/* devolve o garfo direito à mesa */<br/></pre>"); 

		$("#code_correct_comment").html("<pre>"+
			"/* número de filósofos */<br/>"+
			"/* número do vizinho à esquerda esquerda de i */<br/>"+
			"/* número do vizinho à direita de i */<br/>"+
			"/* o filósofo está pensando */<br/>"+
			"/* o filósofo está tentando pegar garfos */<br/>"+
			"/* o filósofo está comendo */<br/>"+
			"/* semáforos são um tipo especial de int */<br/>"+
			"/* arranjo para controlar o estado de cada um */<br/>"+
			"/* exclusão mútua para  as regiões críticas */<br/>"+
			"/* um semáforo por filósofo */<br/></br>"+
			"/* i: o número do filósofo, de 0 a N-1 */<br/></br>"+
			"/* repete para sempre */<br/>"+
			"/* o filósofo está pensando */<br/>"+
			"/* pega dois garfos ou bloqueia */<br/>"+
			"/* Hummm! Espaguete! */<br/>"+
			"/* devolve os dois garfos à mesa */<br/>"+
			"</br><br/><br/>"+
			"/* i: o número do filósofo, de 0 a N-1 */<br/><br/>"+
			"/* entra na região crítica */<br/>"+
			"/* registra que o filósofo está faminto */<br/>"+
			"/* tenta pegar dois garfos */<br/>"+
			"/* sai da região crítica */<br/>"+
			"/* bloqueia se os garfos não foram pegos */<br/>"+
			"<br/><br/>"+
			"/* i: o número do filósofo, de 0 a N-1 */<br/><br/>"+
			"/* entra na região crítica */<br/>"+
			"/* o filósofo acabou de comer */<br/>"+
			"/* vê se o vizinho da esquerda pode comer agora */<br/>"+
			"/* vê se o vizinho da direita pode comer agora */<br/>"+
			"/* sai da região crítica */<br/>"+
			"<br/><br/>"+
			"/* i: o número do filósofo, de 0 a N-1 */<br/><br/>"+
			"</pre>"); 
		
		$("#code p").html("<center>Os algoritmos dessa página foram retirados "+
			"do livro: <br />TANENBAUM, Andrew S., Sistemas operacionais modernos, 3ed.  <center>");
		
		$("#code h2").html("<center>Solução errada para o problema do jantar dos filósofos"+
		 "<br />Algoritmo usado na primeira simulação.");	
		
		$("#code h3").html("<center>Uma solução para o problema do jantar dos filósofos"+
		 "<br />Algoritmo usado na segunda simulação.");	
	}
	else {
		
		$("#code_error_comment").html("<pre>"+
			"/* number of philosophers */<br/></br>"+
			"/* i: philosopher number, from 0 to 4*/<br/>"+
			"<br/><br/>"+
			"/* philosopher is thinking */<br/>"+
			"/* take left fork */<br/>"+
			"/* take right fork; % is modulo operator */<br/>"+
			"/* yum-yum, spaghetti */<br/>"+
			"/* put left fork back on the table */<br/>"+
			"/* put right fork back on the table */<br/></pre>"); 

		$("#code_correct_comment").html("<pre>"+
			"/* number of philosophers */<br/>"+
			"/* number of i’s left neighbor */<br/>"+
			"/* number of i’s right neighbor */<br/>"+
			"/* philosopher is thinking */<br/>"+
			"/* philosopher is trying to get forks */<br/>"+
			"/* philosopher is eating */<br/>"+
			"/* semaphores are a special kind of int */<br/>"+
			"/* array to keep track of everyone’s state */<br/>"+
			"/* mutual exclusion for critical regions */<br/>"+
			"/* one semaphore per philosopher */<br/></br>"+
			"/* i: philosopher number, from 0 to N−1 */<br/></br>"+
			"/* repeat forever */<br/>"+
			"/* philosopher is thinking */<br/>"+
			"/* acquire two forks or block*/<br/>"+
			"/* yum-yum, spaghetti */<br/>"+
			"/* put both forks back on table */<br/>"+
			"</br><br/>"+
			"/* i: philosopher number, from 0 to N−1 */<br/><br/>"+
			"/* enter critical region */<br/>"+
			"/* record fact that philosopher i is hungry */<br/>"+
			"/* try to acquire 2 forks */<br/>"+
			"/* exit critical region*/<br/>"+
			"/* block if forks were not acquired */<br/>"+
			"<br/><br/>"+
			"/* i: philosopher number, from 0 to N−1 */<br/><br/>"+
			"/* enter critical region */<br/>"+
			"/* philosopher has finished eating */<br/>"+
			"/* see if left neighbor can now eat */<br/>"+
			"/* see if right neighbor can now eat*/<br/>"+
			"/* exit critical region */<br/>"+
			"<br/><br/>"+
			"/* i: philosopher number, from 0 to N−1 */<br/><br/>"+
			"</pre>");
		
		$("#code p").html("<center><center>The algorithms to this page were taken from the book: "+
			"<br />TANENBAUM, Andrew S., Moderns Operating Systems, 3th.  <center>");

		$("#code h2").html("<center>Nonsolution to the dining philosophers problem."+
		 "<br />Algorithm used in the first simulation.</center>");	
		
		$("#code h3").html("<center>A solution to the dining philosophers problem."+
		 "<br />Algorithm used in the second simulation<center/>");	

	}
}


function contentAbout(lang){
	if (!lang){
		$("#content_about").html("Trabalho realizado dentro das dependências da Universidade de São Paulo, "+
		 "como parte do conteúdo da disciplina de Sistemas Operacionais, sob orientação do Prof. Paulo Sérgio"+ 
		 " Lopes de Souza.<br /> <br />"+
		 "Código desenvolvido pelos alunos:<br />");

	}
	else{
		$("#content_about").html("hi");
	}


	$("#content_about").append("<img src='./img/Andressa.png' class='photo_img' />"+
		 "<img src='./img/Jessika.png' 	class='photo_img' />"+
		 "<img src='./img/Raphael.png' 	class='photo_img' /><br/>"+
		 "<pre> Andressa Andrião	   Jéssika Darambaris	  Raphael V. Ferreira</pre>"+
		 "<br class='clear' />"+
		 "");
}

function contentSimulator(lang){
	if (!lang){
		$(".title").html("Jantar dos Filósofos");
	}
	else {
		$(".title").html("Philosopher's Dinner");
	}
}

function legendContent(lang){
	
    if (!lang){
    	$("#legend").html("<font color='blue'>"+
    		"<ul> <li><font color='blue'> Filósofo pensando </font></li>"+
    		"<font color='red'><li> Filósofo com fome</li> </font>"+
    		"<font color='green'> <li>Filósofo comendo</li>  </font></ul>");
    }
    else {
    	$("#legend").html("<font color='blue'>"+
    		"<ul> <li><font color='blue'>Thinking philosopher</font></li>"+
    		"<font color='red'><li>Hungry philosopher</li></font>"+
    		"<font color='green'><li>Eating philosopher</li></font></ul>");
    }
}