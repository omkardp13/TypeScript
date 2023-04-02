//1.Program to divide two numbers 

var iValue1:number=15;
var iValue2:number=5;
var iRet:number=0;

iRet=Divide(iValue1,iValue2);
console.log(iRet);

function Divide(No1:number,No2:number):number
{
	if(No2==0)
		return -1;
	else 
		return No1/No2;
}

