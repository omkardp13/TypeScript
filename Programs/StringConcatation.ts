/*
5. Write a program which 2 strings from user and concat second string 
after first string. (Implement strcat() function). 
Input : “Marvellous Infosystems” 
 “Logic Building” 
Output : “Marvellous Infosystems Logic Building” 
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter First String: ",(string)=>
{
readline.question("Enter Second String: ",(any)=>
{	
	var iRet:string=ConcateString(string,any);
	console.log(iRet);
	
    readline.close();
})});

function ConcateString(Str1:string,Str2:string)
{
		
	return Str1+" "+Str2;
}
