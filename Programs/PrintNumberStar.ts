//1.Accept one number from user and print that number of * on screen

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter Number: ",(number)=>
{
	Display(parseInt(number));
	readline.close();
});

function Display(No:number):void
{
   var i:number=0;
   for(i=0;i<No;i++)
   {
      console.log("*\n");
   }	   
}