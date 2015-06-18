/*PRIMER NIVEL*/

//variables globales
var num = 2;			//numero de pelotas
var bloque = 96 + 1;	//numero de bloques
var arraypelotas = [];
var arraycubos = [];
var vidas = 3;
var puntos = 0;
var inicio = false;
var puntosglobales = 0;

//variables globales para mover la raqueta con las flechas de direccion
var raquetadiv;
var numposi;
var posifinal;

//numero de cubos para los power ups
var pu1 = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
var pu2 = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
var pu3 = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
var pu4 = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
var pu5a = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
var pu5b = Math.floor(Math.random() * (96 - 1 + 1)) + 1; 
var pu6 = Math.floor(Math.random() * (96 - 1 + 1)) + 1; 

this.vidasmod = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

//movimiento de la raqueta
function mse(e){
	if (window.event){
		var docs=[document.body.scrollLeft,document.body.scrollTop];
		if (!document.body.scrollTop){
			docs=[document.documentElement.scrollLeft,document.documentElement.scrollTop];
		}
		return [e.clientX+docs[0]];
	}
	return [e.pageX];
}

document.onmousemove = function(e){
	e = e || window.event;
	var m=mse(e);
	testr(m[0],m[1]);
}

function testr(x){
	var all=document.getElementById("raqueta");
	all.style.left = x + "px";
}

function iniciar()
{
	document.getElementById("reiniciar").style.visibility = "visible";
	document.getElementById("start").style.display = "none";
	//actualizar la pantalla
	$(document).ready(function(){if(true){
		crearcubos();
		crearpelotas();
		var bolamov = setInterval ("moverpelotas()", 10);
	}})
}

//cubos
function cubos(i)
{	
	var colorbloque = (function(m,s,c){return (c ? arguments.callee(m,s,c-1) : '#') +
	s[m.floor(m.random() * s.length)]})(Math,'0123456789ABCDEF',5)

	$('#borde').append('<div id="cubo'+ i +'" class="cubo">'+ i +'</div>');
	if (document.getElementById('cubo'+ i))
	{
		document.getElementById('cubo'+ i).style.backgroundColor=colorbloque;
		document.getElementById('cubo'+ i).style.visibility = "visible";
	}
}

//pelota
function pelota(i)
{	
	/*variables*/
	var pdiv;
	var color;

	/*pelotas*/
	pdiv = document.createElement('div');
	pdiv.id = 'pelota' + i;
	pdiv.className = 'pelota';
	document.body.appendChild(pdiv);
	this.bolafor = document.getElementById('pelota' + i );
	
	color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	this.bolafor.style.backgroundColor=color;
	
	this.tam = 20;

	document.getElementById('pelota' + i).style.width = this.tam + "px";
	document.getElementById('pelota' + i).style.height = this.tam + "px";
	
	this.mov = [
		this.controlY=1,
		this.controlX=1,
		this.y = 400,
		this.x = 675,
		this.velocidady = 6,
		this.velocidadx = 6,
		this.conyran = Math.floor(Math.random() * (1 - -1 + 1)) + 1,
		this.conxran = Math.floor(Math.random() * (1 - -1 + 1)) + 1
	]
}

//movimiento de la pelota con rebote en la raqueta
pelota.prototype.mover = function(i)
{	
	//power ups
	if (document.getElementById("cubo" + pu1).style.visibility == "hidden")
	{
		document.getElementById("raqueta").style.width = "150px";
		document.getElementById("estado").innerHTML = "Raqueta grande";
	}
	
	else if (document.getElementById("cubo" + pu6).style.visibility == "hidden")
	{
		for(var n = 0; n < 5; n++)
		{
			var ca = Math.floor(Math.random() * (96 - 1 + 1)) + 1;
			var caale = ca + n;
		}
		document.getElementById("cubo" + caale).style.visibility = "hidden";
	}	
	
	else if (document.getElementById("cubo" + pu2).style.visibility == "hidden")
	{
		document.getElementById("raqueta").style.width = "50px";
		document.getElementById("estado").innerHTML = "Raqueta pequeña";
	}
	
	else if (document.getElementById("cubo" + pu4).style.visibility == "hidden")
	{
		document.getElementById("raqueta").style.width = "100px";
		document.getElementById("estado").innerHTML = "Raqueta normal";
	}
	
	else if (document.getElementById("cubo" + pu3).style.visibility == "hidden")
	{
		document.getElementById("raqueta").style.width = "200px";
		document.getElementById("estado").innerHTML = "Raqueta extra grande";
	}
		
	//posicion de la pelota
	var divpelota = $('#pelota' + i).offset();
	var posipelota = {};
	posipelota.width = $('#pelota' + i).width();
	posipelota.height = $('#pelota' + i).height();
	posipelota.left = divpelota.left;
	posipelota.top = divpelota.top;
	posipelota.right = divpelota.left+posipelota.width;
	posipelota.bottom = divpelota.top+posipelota.height;
	
	//posicion de la raqueta
	var divraqueta = $('#raqueta').offset();
	var posiraqueta = {};
	posiraqueta.width = $('#raqueta').width();
	posiraqueta.height = $('#raqueta').height();
	posiraqueta.left = divraqueta.left;
	posiraqueta.top = divraqueta.top;
	posiraqueta.right = divraqueta.left+posiraqueta.width;
	posiraqueta.bottom = divraqueta.top+posiraqueta.height;

	//choque de la pelota con la raqueta al bajar
	if ((posipelota.left >= posiraqueta.left) && (posipelota.left <= posiraqueta.right) && (posipelota.bottom >= posiraqueta.top))
	{
		this.conyran = 0;
		this.conxran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
		this.velocidadx = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
		this.velocidady = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
	}
	
	if ((posipelota.left >= posiraqueta.left) && (posipelota.left <= posiraqueta.right) && (posipelota.top >= posiraqueta.bottom))
	{
		this.conyran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
		this.conxran = 0;
		this.velocidadx = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
		this.velocidady = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
	}
	
	//limite del borde izquierdo
	else if (posiraqueta.left <= 0)
	{
		document.getElementById("raqueta").style.left = 1250 - posiraqueta.width + "px";
	}
	
	//limite del borde derecho
	else if (posiraqueta.right > 1280)
	{
		document.getElementById("raqueta").style.left = "0px";
	}
	
	//div borde
	var divborde = $('#borde').offset();
	var posiborde = {};
	posiborde.bottom = divborde.top+posiborde.height;
	
	//rebote con los cubos al subir	
	if ((posipelota.top < 163) && (document.getElementById("pelota" + i).style.display != "none"))
	{
		var aga = posipelota.top / 30 - 0.4;
		if (aga >= 1)
		{ 
			if (posipelota.top < 67 )
			{
				var cordx = parseInt(posipelota.left/52 + 1); 
				if (document.getElementById('cubo'+cordx).style.visibility == "visible")
				{
					this.conyran = 1;
					this.conxran = 0;
					document.getElementById('cubo'+cordx).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}

		if (aga >= 2) 
		{
			if (posipelota.top < 99 )
			{
				var cordx2 = parseInt(posipelota.left/52+ 25); 
				if (document.getElementById('cubo'+cordx2).style.visibility == "visible") 
				{
					this.conyran = 1;
					this.conxran = 0;
					document.getElementById('cubo'+cordx2).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}

		if (aga >= 3)
		{
			if (posipelota.top < 131 )
			{
				var cordx3 = parseInt(posipelota.left/52+49); 
				if (document.getElementById('cubo'+cordx3).style.visibility == "visible")
				{
					this.conyran = 1;
					this.conxran = 0;
					document.getElementById('cubo'+cordx3).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}
	
		if (aga >= 5) 
		{ 
			if (posipelota.top < 163 )
			{
				var cordx4 = parseInt(posipelota.left/52+73); 
				if (document.getElementById('cubo'+cordx4).style.visibility == "visible")
				{
					this.conyran = 1;
					this.conxran = 0;
					document.getElementById('cubo'+cordx4).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		} 
	}
	
	//rebote con los cubos al bajar
	if ((posipelota.bottom < 163) && (document.getElementById("pelota" + i).style.display != "none"))
	{
		var aga = posipelota.bottom / 30 - 0.4;
		if (aga >= 0) 
		{ 
			if (posipelota.bottom < 67 )
			{
				var cordx = parseInt(posipelota.left/52 + 1); 
				if (document.getElementById('cubo'+cordx).style.visibility == "visible") 
				{
					this.conyran = 0;
					this.conxran = this.conxran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
					document.getElementById('cubo'+cordx).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}

		if (aga >= 1) 
		{
			if (posipelota.bottom < 99 )
			{
				var cordx2 = parseInt(posipelota.left/52+ 25); 
				if (document.getElementById('cubo'+cordx2).style.visibility == "visible") 
				{
					this.conyran = 0;
					this.conxran = this.conxran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
					document.getElementById('cubo'+cordx2).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}

		if (aga >= 2)
		{
			if (posipelota.bottom < 131 )
			{
				var cordx3 = parseInt(posipelota.left/52+49); 
				if (document.getElementById('cubo'+cordx3).style.visibility == "visible") 
				{
					this.conyran = 0;
					this.conxran = this.conxran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
					document.getElementById('cubo'+cordx3).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		}
		
		if (aga >= 4) 
		{ 
			if (posipelota.bottom < 163 )
			{
				var cordx4 = parseInt(posipelota.left/52+73); 
				if (document.getElementById('cubo'+cordx4).style.visibility == "visible") 
				{
					this.conyran = 0;
					this.conxran = this.conxran = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
					document.getElementById('cubo'+cordx4).style.visibility = "hidden";
					puntos = puntos + 1;
					puntosglobales = puntosglobales +1;
				}
			}
		} 	
	}

	function siguientenivel()
	{
		window.location = "nivel2.html";
	}
	
	//contador de vidas y puntos más sus power ups
	if (puntos == pu5a)
	{
		vidas = 3;
		document.getElementById("estado").innerHTML = "¡Vidas recuperadas!";
	}
	
	if (puntos == pu1)
	{
		vidas = vidasmod;
		document.getElementById("estado").innerHTML = "¡Vidas modificadas!";
	}
	
	if (puntos == 96)
	{
		this.x = "0px";
		this.y = "0px";
		document.getElementById("reiniciar").style.display = "none";
		document.getElementById("estado").innerHTML = "¡Has ganado!";
		siguientenivel();
	}	
	document.getElementById("numvidas").innerHTML = "Vidas: " + vidas;
	document.getElementById("puntos").innerHTML = "Puntos: " + puntos;
	document.getElementById("puntosglobales").innerHTML = "Puntos globales: " + puntosglobales;
	
	//movimiento de la pelota sin rebote en la raqueta y rebote en los laterales
    if(this.conyran==1){
        this.y+=this.velocidady;
    }else{        
        this.y-=this.velocidady;
    }
    if(this.y<=13){
        this.conyran=1;
        this.y=13;
    }else if(this.y>=document.getElementById("borde").offsetHeight-this.tam){
        this.conyran=0;
        this.y=document.getElementById("borde").offsetHeight-this.tam;
		
		//game over
		vidas = vidas - 1;
		document.getElementById("estado").innerHTML = "Has perdido una vida";
		if (vidas == "0")
		{	
			for (var u = 0; u < num; u++)
			{
				$('#pelota' + u).remove();
			}
			document.getElementById("estado").innerHTML = "Has perdido";
			document.getElementById("numvidas").style.backgroundColor = "#ff0000";
			document.getElementById("estado").innerHTML = "Pulse enter";
		}
		//fin game over
    }
    if(this.conxran==1){
        this.x+=this.velocidadx;
    }else{        
        this.x-=this.velocidadx;
    }
    if(this.x<=13){
        this.conxran=1;
        this.x=13;
    }else if(this.x>=document.getElementById("borde").offsetWidth-this.tam){
        this.conxran=0;
        this.x=document.getElementById("borde").offsetWidth-this.tam;
    }
	this.bolafor.style.left=String(this.x)+"px";
    this.bolafor.style.top=String(this.y)+"px";	
}

//generacion de los cubos
function crearcubos()
{
	for (var i = 1; i < bloque; i++)
	{
		arraycubos[i] = new cubos(i);
	}
}

//generacion de las pelotas
function crearpelotas()
{
	for (var i = 0; i < num; i++)
	{
		arraypelotas[i] = new pelota(i);
	}
}

//mover las pelotas
function moverpelotas()
{
	for (var i = 0; i < num; i++)
	{
		arraypelotas[i].mover(i);
	}
}

//funciones con el teclado
function reiniciar()
{
	if(confirm("¿Esta seguro que quiere salir del juego?"))
	{
		window.location="index.html";
	}
	else
	{
		document.location.href="#";
	}
}

function mover(e)
{
	var ek = e.which;

	if (ek == 19)
	{
		alert("Pausa");
	}

	if (ek == 13)
	{
		if (document.getElementById("start").style.display != "none" )
		{
			iniciar();
		}
		else
		{
			reiniciar();	
		}
	}

	if (ek==37)
	{
		raquetadiv = document.getElementById("raqueta").style.left;
		numposi = parseInt(raquetadiv, 10);
		posifinal;
		numposi = numposi - 15;
		posifinal = numposi + "px";
		document.getElementById("raqueta").style.left = posifinal;		
	}
	
	if (ek==39)
	{
		raquetadiv = document.getElementById("raqueta").style.left;
		numposi = parseInt(raquetadiv, 10);
		posifinal;
		numposi = numposi + 15;
		posifinal = numposi + "px";
		document.getElementById("raqueta").style.left = posifinal;
	}
	
	if (posifinal == "NaNpx")
	{
		alert("Mueve antes la raqueta con el ratón para dar valor a la posicion de la raqueta.");
	}
}