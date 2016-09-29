
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Cuál es el nombre completo de Chicharito?",
				      "respuestas": [
				        {
				          "respuesta": "Javier Hernández Gutiérrez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Hernández Balcázar",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Javier Alberto Hernández Balcázar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Francisco Javier Hernández Balcázar",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En dónde nació?",
				      "respuestas": [
				        {
				          "respuesta": "Guadalajara",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Monterrey",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ciudad de México",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estado de México",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles lleva en el Tri?",
				      "respuestas": [
				        {
				          "respuesta": "47",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "54",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "45",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "44",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué equipo NO jugó?",
				      "respuestas": [
				        {
				          "respuesta": "Chivas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Manchester United",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Atlético de Madrid",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Bayer Leverkusen",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es su película favorita?",
				      "respuestas": [
				        {
				          "respuesta": "Gladiador",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Troya",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Volver al futuro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gol",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué Selección anotó su primer gol en un Mundial?",
				      "respuestas": [
				        {
				          "respuesta": "Brasil",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Argentina",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alemania",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Francia",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo se llama su novia?",
				      "respuestas": [
				        {
				          "respuesta": "María Villalón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Lucía Villalón",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Leticia Sahagún",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Lucía Sahagún",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es su bebida favorita?",
				      "respuestas": [
				        {
				          "respuesta": "Tequila",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jugo de naranja",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Agua",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Refresco de naranja",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año debutó?",
				      "respuestas": [
				        {
				          "respuesta": "2005",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2006",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2007",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2008",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es su serie favorita?",
				      "respuestas": [
				        {
				          "respuesta": "Two and a half men",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Game of Thrones",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Breaking Bad",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Los Simpson",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué equipo anotó su primer gol oficial en el Manchester United?",
				      "respuestas": [
				        {
				          "respuesta": "Hull City",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Arsenal",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Crystal Palace",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chelsea",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué otro deporte le gusta?",
				      "respuestas": [
				        {
				          "respuesta": "Básquetbol",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Futbol Americano",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Tenis",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Automovilismo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Primer gol con el Real Madrid.",
				      "respuestas": [
				        {
				          "respuesta": "Deportivo La Coruña",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Atlético de Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Valladolid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Barcelona",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿A quién dedica la seña cuando festeja un gol?",
				      "respuestas": [
				        {
				          "respuesta": "A su papá",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "A su novia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "A su abuela",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "A su hermana",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra quién marcó su primer gol con el Leverkusen?",
				      "respuestas": [
				        {
				          "respuesta": "Mainz",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hannover",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "BATE",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Dortmund",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue su primer título profesional?",
				      "respuestas": [
				        {
				          "respuesta": "Community Shield",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Premier League",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Liga MX",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Mundial de Clubes",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo lo llama su familia?",
				      "respuestas": [
				        {
				          "respuesta": "Chicha",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javi",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Junior",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra quién marcó su primer gol en el Tri?",
				      "respuestas": [
				        {
				          "respuesta": "Nueva Zelanda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Colombia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Venezuela",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bolivia",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿A quién considera el mejor de todos los tiempos?",
				      "respuestas": [
				        {
				          "respuesta": "Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Maradona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Pelé",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo es el cumpleaños de Chicharito?",
				      "respuestas": [
				        {
				          "respuesta": "1 de junio",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1 de julio",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3 de junio",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3 de julio",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="no mereces la bendición de Chichadios, ¡que vergüenza!";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="seguro eres uno de los haters de Chichadios, pero bien que estás al pendiente de él.";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="eres un digno fan de Chichadios, ¡no bajes los brazos!";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="la bendición de Chichadios está contigo, eres un verdadero fan.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Bayer Leverkusen "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Borussia Dortmund primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-chicharito");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


