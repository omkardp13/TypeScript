/*
3.Write a program which accept number from user and display all its non factors. 
Input : 12 
Output : 5 7 8 9 10 11 
Input : 13 
Output : 2 3 4 5 6 7 8 9 10 11 12 
Input : 10 
Output : 3 4 6 7 8 9  

*/

function NonFactors(No:number):void
{
	
	for(let i:number=1;i<No;i++)
	{
		if(No%i!=0)
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
    NonFactors(number);
   readline.close();
});