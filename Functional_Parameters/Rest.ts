
//In TypeScript, a rest parameter is denoted by using the ellipsis ... followed by the name of the parameter. 
//A rest parameter allows a function to accept an indefinite number of arguments as an array.
//Note that the rest parameter must be the last parameter in the function's parameter list.


function Addition(...Arr:number[]):number
{
	let Sum:number=0;
	let Cnt:number=0;
	
	for(Cnt=0;Cnt<Arr.length;Cnt++)
	{
		Sum=Sum+Arr[Cnt];
	}
	return Sum
}

var Ret:number=0;

Ret=Addition(10,20);
console.log("Result is: "+Ret);

Ret=Addition();
console.log("Result is: "+Ret);

Ret=Addition(10,20,30,40);
console.log("Result is: "+Ret);

Ret=Addition(10,20,30,40,50,60);
console.log("Result is: "+Ret);

