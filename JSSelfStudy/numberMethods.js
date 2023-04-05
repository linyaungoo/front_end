document.getElementById("demo").innerHTML = 
("ParseInt<br>")+
  parseInt("-10") + "<br>" +
  parseInt("-10.33") + "<br>" +
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10") + "<br>" + 
  ("parseFloat<br>") + "<br>" + 
  parseFloat("10") + "<br>" + 
  parseFloat("10.33") + "<br>" + 
  parseFloat("10 20 30") + "<br>" + 
  parseFloat("10 years") + "<br>" + 
  parseFloat("years 10") ;