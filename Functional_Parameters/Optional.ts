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