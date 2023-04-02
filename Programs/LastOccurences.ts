/*
2.Write a program which accept string from user and accept one 
character. Return frequency of that character. 
Input : “Marvellous Multi OS” 
 M 
Output : 2 
Input : “Marvellous Multi OS” 
 W 
Output : 0 
*/

const readline=require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
});


readline.question("Enter String: ",(string)=> 
{
	readline.question("Enter Charactor: ",(any)=>
	{
	     let iRet=FirstOccurence(string,any)
	     console.log(iRet);
   	     readline.close();
	})});

function FirstOccurence(InputString:string,InputCharactor:any):number
{
	let iCounter:number=0;
	for(let i=InputString.length-1;i>=0;i--)
	{
		if(InputString.charAt(i)==InputCharactor)
		{
			return i;
			break;
		}		
	}
    	
 return -1;		
}