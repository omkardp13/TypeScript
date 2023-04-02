//4. Accept one number and check whether is is divisible by 5 or not. 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Please enter a Number",(number)=>
{
   const input=parseInt(number);
   var iRet:boolean =isDivisibleByFive(input);
   if(iRet)
   {
       console.log(input +" is divisible by five");
   }
   else
   {
      console.log(input +" is not divisible by five");
   }
   readline.close();
});
function isDivisibleByFive(iNo:number):boolean 
{
     if(iNo%5==0)
	 {
	 return true;
	 }
	 else
	 return false;
}