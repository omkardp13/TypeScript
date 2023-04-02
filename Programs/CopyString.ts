/*
1.Write a program which accept string from user and copy the 
contents of that string into another string. (Implement strcpy() 
function) 
Input : “Marvellous Multi OS” 
Output : “Marvellous Multi OS” in another string
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=> 
{
	
	     var iRet:string=CopyString(string)
	     console.log(iRet);
   	     readline.close();
});

function CopyString(Str:string):string
{
	var newString:string="\0";
	
	for(var i:number=0;i<Str.length;i++)
	{
		newString=newString+Str[i];
	}
	
	return newString;
}

