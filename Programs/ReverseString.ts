/*
5. Write a program which accept string from user reverse that string 
in place. 
Input : “abcd” 
Output : “dcba” 
Input : “abba” 
Output : “abba”
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=> 
{
	
	     let iRet=FirstOccurence(string)
	     console.log(iRet);
   	     readline.close();
});

function FirstOccurence(InputString:string):string
{
	let ReverseString:string='\0';
	for(let i=InputString.length-1;i>=0;i--)
	{
			ReverseString=ReverseString+InputString[i];
	}
    	
 return ReverseString;		
}