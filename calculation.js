function getHistory(){
	return document.getElementById("history-value").innerHTML;
}
function printHistory(num){
	document.getElementById("history-value").innerHTML=num;
}

function getOutput(){
	return document.getElementById("output-value").innerHTML;
}
function printOutput(num){
	if(num=="")
		 document.getElementById("output-value").innerHTML=num;
    else
	     document.getElementById("output-value").innerHTML=getFormattedNumber(num);
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
}
function reverseFormatNumber(num){
	return Number(num.replace(/,/g,''));
}

var op = document.getElementsByClassName("operator");
  for( var i = 0 ; i < op.length ; i++ )
  {
	  op[i].addEventListener('click',function(){ 
	       if(this.id=="clear"){
			   printHistory("");
		       printOutput("");
		   }
		  else if(this.id=="backspace"){
			  var g=getOutput();
			  var output=reverseFormatNumber(g).toString();
			  var history=getHistory();
			  
			  if(g.length==0){
				   history=history.substr(0,history.length-1);
				   printHistory(history);
			   }
			   if(output){
				   output=output.substr(0,output.length-1);
				   printOutput(output);
			   }
			   
			 }
			 
         else{
			 var output=getOutput();
			 var history=getHistory();
			 if(output=="" && history!=""){
				 if(isNaN(history[history.length-1])){
					 history=history.substr(0,history.length-1);
				 }
			 }
			 if(output!="" || history!=""){
				output=output=="" ? output : reverseFormatNumber(getOutput());
                history = history + output;	
                if(this.id=="="){
					 var result=eval(history);
					 if(result==Infinity){
						 printOutput("0");
					 }
                     else{
						 printOutput(result);
					 }					 
					 printHistory("");
				}	
                else{
					history=history+this.id;
					 printOutput("");
					 printHistory(history);
				}				
			 }
		} 
		 
	  });
  }
  
 var no = document.getElementsByClassName("number");
  for( var i = 0 ; i < no.length ; i++ )
  {
	  no[i].addEventListener('click',function(){ 
	      var output=reverseFormatNumber(getOutput());
		  if(output!=NaN)
		  output=output+this.id;
		  printOutput(output);  
	  });
  } 