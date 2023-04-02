/*
5.Write a program which accept number from user and return difference between 
summation of all its factors and non factors. 

Input : 12 
Output : -34 (16 - 50) 
Input : 10 
Output : -29 (8 - 37) 

*/

function SumNonFactors(No:number):number
{
	let SumFactors=0;
	let SumNonFactors=0;
	for(let i:number=1;i<No;i++)
	{
		if(No%i==0)
		{
			
			SumFactors=SumFactors+i;
			
		}
		else
		{
			SumNonFactors=SumNonFactors+i;
		}
	}
	
	return SumFactors-SumNonFactors;
}



var readline=require('readline').createInterface(
{
	input:process.stdin,
	output:process.stdout
});

readline.question("Enter Number: ",(number)=>
{
    var Ans:number=SumNonFactors(number);
	console.log(Ans);
   readline.close();
});