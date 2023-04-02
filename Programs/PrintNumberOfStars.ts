const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


function Display(No:number):void
{
   var i:number=0;
   for(i=0;i<No;i++)
   {
     console.log("*\n");
   }	
}

readline.question("Enter Number: ",(number)=>
{
	Display(parseInt(number));
	readline.close();
});