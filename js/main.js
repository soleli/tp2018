
function init() 
{
	alert("m");
	i=0;
	archivoValidacion = "http://www.tiempopopular.com.ar/json/carusel.php?jsoncallback=?"


	$.getJSON( archivoValidacion, {id:1})

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			if(i==0)
				{
					$(".carousel-inner").append(
					
						"<div class='item active'>"+
						"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
							"<img  src='http://tiempopopular.com.ar/2018/img/noticias/"+data2.url+"_t.jpg'>"+
							"<div class='carousel-caption'>"+
									"<h1>"+data2.titulo+"</h1>"+
							"</div> </a></div>"
					);
				}
			else{
					$(".carousel-inner").append(
				
						"<div class='item'>"+
							"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
						"<img  class='img-responsive' src='http://tiempopopular.com.ar/2018/img/noticias/"+data2.url+"_t.jpg'>"+
						"<div class='carousel-caption'>"+
								"<h1>"+data2.titulo+"</h1>"+
								
						"</div></a></div>"
					);
				}
			
			i++;
		});
		$("#cargando").css("display","none");
		
	})
	
	

	
	}

		
  
		 
		
		
	
			
		
	