/*
1.Write a program which accept string from user and accept one 
character. Check whether that character is present in string or not. 
Input : “Marvellous Multi OS” 
 e 
Output : TRUE 
Input : “Marvellous Multi OS” 
 W 
Output : FALSE
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
	      if(iRet)
		  {
			  console.log("TRUE");
		  }
		  else
		  {
			  console.log("FALSE");
		  }
   	     readline.close();
	})});

function CheckCharactorIsPreset(InputString:string,InputCharactor:any):boolean
{
	for(let i=0;i<InputString.length;i++)
	{
		if(InputString.charAt(i)==InputCharactor)
		{
			return true;
			break;
		}		
	}
    	
 return false;		
}