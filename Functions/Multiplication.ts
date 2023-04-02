//Positional Parameters

function Multiplication(A:number,B:number,C:number):number
{
  let Ans:number=0;
  
   Ans=A * B * C;
   return Ans;
}

var No1:number=10;

var No2:number=20;

var No3:number=30;

var Ret:number=0;

Ret=Multiplication(No1,No2,No3);
console.log("Multiplication is: "+Ret);

