/*
1.Write a program which accept one number from user and print that number of 
even numbers on screen. 
Input : 7 
Output: 2 4 6 8 10 12 14
*/


function DisplayEvenNumbers(No:Number):void
{
	var TempEven=2;
	for(var i:number=0;i<No;i++)
	{
		 console.log(TempEven);
		 TempEven=TempEven+2;
	}	
}

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter Number: ",(number)=>
{
  DisplayEvenNumbers(number);
  readline.close();
});