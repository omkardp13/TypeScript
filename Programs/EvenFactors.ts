/*
2. Write a program which accept number from user and print even factors of that 
number. 
Input : 24 
Output: 1 2 4 6 8 12
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter Number: ",(number)=>
{
	DisplayEvenFactor(number);
	readline.close();
});


function DisplayEvenFactor(No:number):void
{
	console.log("1");
	for(var i:number=2;i<=No/2;i++)
	{
		if(No%i==0&&i%2==0)
		   console.log(i);
	}
}