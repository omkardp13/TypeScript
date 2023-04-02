//Default parameters in TypeScript are a feature that allows developers to provide default values for function parameters. 
//This means that if a function is called without providing a value for a certain parameter, the default value will be used instead.

function Percentage(Marks:number=300,OutOf:number=500):number
{
  let Ans:number=0;
  
  Ans=(Marks/OutOf)*100;
 
  return Ans;

}

var Per:number=0;

//Per=Percentage(220,300);
//console.log("Percentage is: "+Per); 


//Per=Percentage(220);
//console.log("Percentage is: "+Per);


Per=Percentage();
console.log("Percentage is: "+Per);
//default parameter should be always telling 
