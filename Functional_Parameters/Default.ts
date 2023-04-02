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