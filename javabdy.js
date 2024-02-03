
var btn = document.getElementById('cl'),
    btn2 = document.getElementById('cl2'),
    caja1 = document.getElementById('caja1'),
    imagen1= document.getElementById('imagen1'),
    contador=0,
    contador8=0,
    contador2=0, 
    contador23=2,
    f=new Date(),
    mes= (f.getMonth()+1).toString(),
    dia= (f.getDate()).toString(),
    anio= (f.getFullYear()).toString(),
    fecha_actual= (f.getFullYear()).toString();

   function cuenta()
   {
	document.getElementById('caja1').innerHTML='';
	if(contador==1) 
	{   
	   document.getElementById('caja1').innerHTML='1';  
	   caja1.classList.add('uno');
	}
	else if(contador==2) 
	{
	   
	   if(contador2==0)
	   {
		document.getElementById('caja1').innerHTML='2';
		contador--;
		contador2++; 	
	   }	  
	   else
	   {
		document.getElementById('caja1').innerHTML='02';
	   }		
	}
	if(contador==8) 
	{
	   document.getElementById('caja1').innerHTML='8'; 
	   if(contador8==0)
	   {
		contador--;
		contador8++; 	
	   }	
	}
	else if(contador==9) 
	{
	   document.getElementById('caja1').innerHTML='9';	
	}
	else if(contador==19) 
	{
	   document.getElementById('caja1').innerHTML='19'; 	
	}
	else if(contador==23) 
	{
	   document.getElementById('caja1').innerHTML='23'; 	
	}
	else if(contador==88) 
	{
	   document.getElementById('caja1').innerHTML='88'; 	
	}
	else if(contador==98) 
	{
	   document.getElementById('caja1').innerHTML='98'; 	
	}
	else if(contador==1988) 
	{
	   document.getElementById('caja1').innerHTML='1988';	 	
	}

	if(contador23==23) 
	{
	   contador++;	
	}
 	else if(contador<23) 
	{
	   contador23++;
	}   

   }

   function comparar()
   {
        var fecha_input= document.getElementById('fechahoy').value;
	fecha_input
	if (mes.length<=1)
	{
		mes = "0" + mes;	
	}
	if (dia.length<=1)
	{
		dia = "0"+ dia;	
	}
	fecha_actual= anio + "-" + mes + "-" + dia;

	if(fecha_input == "1988-02-23")
	{
		console.log(fecha_input)
		console.log(fecha_actual)
		alert("QUE CREES!");
		document.getElementById('imagen1').innerHTML='<img class="imagen2" id="imagen2" src="https://c.tenor.com/6B-Jw3LhNpMAAAAC/tenor.gif">';
		document.getElementById('caja1').innerHTML='';
	}
	else 
	{
		alert("Equivocado :(")	
		document.getElementById('imagen1').innerHTML='';
	}
	
   }
 

btn.addEventListener('click',cuenta,true)


