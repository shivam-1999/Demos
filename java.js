var count = 0;
    var timer = null;

	 

    function changefontsize(size) 
        	
        { 	clearTimeout(timer);
        	timer = setTimeout( function (){
        	var el = document.getElementById('text');
         	var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        	var fontSize = parseFloat(style); 
        	el.style.fontSize = (fontSize + size) + 'px';
    		count++;
			document.getElementById("clicks").innerHTML = count;}, 2000); 
		   
		}      
			 