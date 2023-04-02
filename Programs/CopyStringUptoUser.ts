/*
2. Write a program which accept string from user and copy the 
contents of that string into another string. (Implement strncpy() 
function) 
Input : “Marvellous Multi OS” 
 10 
Output : “Marvellous
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=> 
{
	readline.question("Enter Number: ",(number)=> 
   {
	     var iRet:string=CopyString(string,number)
	     console.log(iRet);
   	     readline.close();
   })});

function CopyString(Str:string,No:number):string
{
	if(No>Str.length)
	{
		No=Str.length;
	}
	var newString:string="\0";
	
	for(var i:number=0;i<No;i++)
	{
		newString=newString+Str[i];
	}
	
	return newString;
}
