//Positional parameters in TypeScript are the standard parameters that are passed to a function in a specific order.
//Positional parameters are defined in the function signature and correspond to the arguments passed to the function in the order they are listed.

function Addition(No1 :number,No2:number):number
{
	
	return No1+No2;
}

var Ret:number=Addition(10,20);
console.log(Ret);
