
const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter Number: ",(number)=>
{
  var iRet:boolean=CheckEvenOdd(parseInt(number));
  
  if(iRet)
  {
	  console.log(number+" is even number");
  }
  else
  {
	  console.log(number+" is odd number");
  }
  readline.close();
});


function CheckEvenOdd(No:number):boolean
{
	if(No%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}