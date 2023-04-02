/*
3. Write a program which accept string from user and copy capital 
characters of that string into another string. 
Input : “Marvellous Multi OS” 
Output : “MMOS”
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=>
{
	var iRet:string=CopyCapitalChar(string);
	console.log(iRet);
	
    readline.close();
});

function CopyCapitalChar(Str:string)
{
	var NewString:string="\0";
	for(var i:number=0;i<Str.length;i++)
	{
		if(Str[i] == Str[i].toUpperCase()&&Str[i]!=" ")
			NewString=NewString+Str[i];
		
	}
	return NewString;
}
