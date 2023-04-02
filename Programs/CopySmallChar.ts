/*
4. Write a program which accept string from user and copy small 
characters of that string into another string. 
Input : “Marvellous multi OS” 
Output : “arvellous multi” 
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=>
{
	var iRet:string=CopySmallChar(string);
	console.log(iRet);
	
    readline.close();
});

function CopySmallChar(Str:string)
{
	var NewString:string="\0";
	for(var i:number=0;i<Str.length;i++)
	{
		if(Str[i] == Str[i].toLowerCase()&&Str[i]!=" ")
			NewString=NewString+Str[i];
		
	}
	return NewString;
}
