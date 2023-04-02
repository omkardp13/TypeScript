/*
2.Write a program which accept number from user and display its factors in 
decreasing order. 
Input : 12 
Output : 6 4 3 2 1 
Input : 13 
Output : 1 
Input : 10 
Output : 5 2 1 

*/

function DisplayReverseFactor(No:number):void
{
	
	for(let i:number=Math.floor(No/2);i>=1;i--)
	{
		if(No%i==0)
		{
			console.log(i);
		}
	}
	
}



var readline=require('readline').createInterface(
{
	input:process.stdin,
	output:process.stdout
});

readline.question("Enter Number: ",(number)=>
{
    DisplayReverseFactor(number);
   readline.close();
});