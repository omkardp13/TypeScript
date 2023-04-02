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
	     let iRet=CheckCharactorIsPreset(string,any)
	     console.log(iRet);
   	     readline.close();
	})});

function CheckCharactorIsPreset(InputString:string,InputCharactor:any):number
{
	let iCounter:number=0;
	for(let i=0;i<InputString.length;i++)
	{
		if(InputString.charAt(i)==InputCharactor)
		{
			iCounter++;
		}		
	}
    	
 return iCounter;		
}