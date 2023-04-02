//Optional parameters in TypeScript are a feature that allows developers to define function parameters that may or may not be passed when the function is called.
//Optional parameters are indicated by adding a question mark ? after the parameter name.


//Optional Parameter

function Area(Redius:number,PI ? :number,Abc ?:number):number
{
	let Ans:number=0;
	
	if(PI == undefined)
	{
		console.log("Inside if");
		PI=3.14
		
	}
	
	Ans=PI * Redius * Redius;
	
	return Ans;
}

//var Ret:number=0;

//Ret = Area(20.3,3.14);
//console.log("Area is : "+Ret);

//Ret = Area(20.3);
//console.log("Area is : "+Ret);
