/*posicion*/
var posy = Math.floor(Math.random() * (500 - 0 + 1 )) + 0;
var posx = Math.floor(Math.random() * (800 - 0 + 1 )) + 0;

var posy2 = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
var posx2 = Math.floor(Math.random() * (800 - 0 + 1)) + 0;

var posy3 = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
var posx3 = Math.floor(Math.random() * (800 - 0 + 1)) + 0;

var posy4 = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
var posx4 = Math.floor(Math.random() * (800 - 0 + 1)) + 0;

/*velocidad*/
var velocidad = Math.floor(Math.random() * (4 - 1 + 1 )) + 1;
var velocidad2 = Math.floor(Math.random() * (4 - 1 + 1 )) + 1;
var velocidad3 = Math.floor(Math.random() * (4 - 1 + 1 )) + 1;
var velocidad4 = Math.floor(Math.random() * (4 - 1 + 1 )) + 1;

/*colores*/
var color = ["black", "yellow", "white", "maroon", "green", "olive", "grey"];
var color1 = color[Math.floor(Math.random() * 7)];
var color2 = color[Math.floor(Math.random() * 7)];
var color3 = color[Math.floor(Math.random() * 7)];
var color4 = color[Math.floor(Math.random() * 7)];

/*var 1º bola*/
var y=posy;         
var x=posx;
var controlY=1; 
var controlX=1; 
var velocidad=velocidad;

/*var 2º bola*/
var y2=posy2;
var x2=posx2;
var controlY2=1;
var controlX2=1;
var velocidad2=velocidad2;

/*var 3º bola*/
var y3=posy3;
var x3=posx3;
var controlY3=1;
var controlX3=1;
var velocidad3=velocidad3;

/*var 4º bola*/
var y4=posy4;
var x4=posx4;
var controlY4=1;
var controlX4=1;
var velocidad4=velocidad4;
/*fin var*/
if(true){
/*comprobacion de posicion*/
	var bola1movimiento=setInterval("bola()",6);
	var bola2movimiento=setInterval("bola2()",6);
	var bola3movimiento=setInterval("bola3()",6);
	var bola4movimiento=setInterval("bola4()",6);	
}

function bola(){
    if(controlY==1){
        y+=velocidad;
    }else{        
        y-=velocidad;
    }
    if(y<=13){
        controlY=1;
        y=13;
     }else if(y>=document.getElementById("borde").offsetHeight-20){
        controlY=0;
        y=document.getElementById("borde").offsetHeight-20;
    }
    if(controlX==1){
        x+=velocidad;
    }else{        
        x-=velocidad;
    }
    if(x<=13){
        controlX=1;
         x=13;
    }else if(x>=document.getElementById("borde").offsetWidth-20){
        controlX=0;
        x=document.getElementById("borde").offsetWidth-20;
    }
    document.getElementById("pelota").style.left=String(x)+"px";
    document.getElementById("pelota").style.top=String(y)+"px";
	document.getElementById("pelota").style.backgroundColor=color1;
}

/*segunda bola*/
function bola2()
{
	if(controlY2==1)
	{
		y2+=velocidad2;
	}
	else
	{
		y2-=velocidad2;
	}
	if(y2<=13)
	{
		controlY2=1;
		y2=13;
	}
	else if(y2>=document.getElementById("borde").offsetHeight-20){
    controlY2=0;
    y2=document.getElementById("borde").offsetHeight-20;
    }
	if(controlX2==1)
	{
		x2+=velocidad2;
	}
	else
	{
		x2-=velocidad2;
	}
	if(x2<=13)
	{
		controlX2=1;
		x2=13;
	}
	else if(x2>=document.getElementById("borde").offsetWidth-20){
        controlX2=0;
        x2=document.getElementById("borde").offsetWidth-20;
    }	
	document.getElementById("pelota2").style.left=String(x2)+"px";
	document.getElementById("pelota2").style.top=String(y2)+"px";	
	document.getElementById("pelota2").style.backgroundColor=color2;
}

/*tercera pelota*/
function bola3()
{
	if(controlY3==1)
	{
		y3+=velocidad3;
	}
	else
	{
		y3-=velocidad3;
	}
	if(y3<=13)
	{
		controlY3=1;
		y3=13;
	}
	else if(y3>=document.getElementById("borde").offsetHeight-20){
    controlY3=0;
    y3=document.getElementById("borde").offsetHeight-20;
    }
	if(controlX3==1)
	{
		x3+=velocidad3;
	}
	else
	{
		x3-=velocidad3;
	}
	if(x3<=13)
	{
		controlX3=1;
		x3=13;
	}
	else if(x3>=document.getElementById("contenido").offsetWidth-20){
        controlX3=0;
        x3=document.getElementById("contenido").offsetWidth-20;
    }	
	document.getElementById("pelota3").style.left=String(x3)+"px";
	document.getElementById("pelota3").style.top=String(y3)+"px";
	document.getElementById("pelota3").style.backgroundColor=color3;
}

/*cuarta bola*/
function bola4()
{
	if(controlY4==1)
	{
		y4+=velocidad4;
	}
	else
	{
		y4-=velocidad4;
	}
	if(y4<=13)
	{
		controlY4=1;
		y4=13;
	}
	else if(y4>=document.getElementById("borde").offsetHeight-20){
    controlY4=0;
    y4=document.getElementById("borde").offsetHeight-20;
    }
	if(controlX4==1)
	{
		x4+=velocidad4;
	}
	else
	{
		x4-=velocidad4;
	}
	if(x4<=13)
	{
		controlX4=1;
		x4=13;
	}
	else if(x4>=document.getElementById("borde").offsetWidth-20){
        controlX4=0;
        x4=document.getElementById("borde").offsetWidth-20;
    }	
	document.getElementById("pelota4").style.left=String(x4)+"px";
	document.getElementById("pelota4").style.top=String(y4)+"px";	
	document.getElementById("pelota4").style.backgroundColor=color4;
}