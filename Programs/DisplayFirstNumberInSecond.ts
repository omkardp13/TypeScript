/*  4. Accept two numbers from user and display first number in second 
number of times. 
Input : 12 5 
Output : 12 12 12 12 12 

Input : -2 3 
Output : -2 -2 -2 

Input : 21 -3 
Output : 21 21 21 

Input : -2 0 
Output :
*/


const readline=require('readline').createInterface({
	input:process.stdin,
    output:process.stdout	
	
});

readline.question("Enter First Number: ",(number1)=> {
  readline.question("Enter Second Number: ",(number2)=> {
	  Display(parseInt(number1),parseInt(number2));
	   readline.close();
	   
  });
});


function Display(No1:number,No2:number):void
{
    if(No1<0)
	{
		No1=-No1;
	}else if(No2<0)
	{
		No2=-No2;
	}
	for(var i:number=0;i<No2;i++)
	{
		console.log(No1+"\n");
		
	}
}
