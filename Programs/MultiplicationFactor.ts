/*
Calculate Time Complexity of each program. 
1.Write a program which accept number from user and display its multiplication of 
factors. 
Input : 12 
Output : 144 (1 * 2 * 3 * 4 * 6) 
Input : 13 
Output : 1 (1) 
Input : 10 
Output : 10 (1 * 2 * 5)

*/

function MultiplicationFactor(No:number):number
{
	let FactorMul=1;
	for(let i:number=1;i<=No/2;i++)
	{
		if(No%i==0)
		{
			FactorMul=FactorMul*i;
		}
	}
	return FactorMul;
}



var readline=require('readline').createInterface(
{
	input:process.stdin,
	output:process.stdout
});

readline.question("Enter Number: ",(number)=>
{
   var Ans:number=MultiplicationFactor(number);
   console.log("Multiplication Of Factors: "+Ans);
   readline.close();
});