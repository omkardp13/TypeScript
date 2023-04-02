/*
4.Write a program which accept number from user and return summation of all its 
non factors. 
Input : 12 
Output : 50 
Input : 10 
Output : 37

*/

function SumNonFactors(No:number):number
{
	let SumNonFactors=0;
	for(let i:number=1;i<No;i++)
	{
		if(No%i!=0)
		{
			SumNonFactors=SumNonFactors+i;
		}
	}
	return SumNonFactors;
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