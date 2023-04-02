//Write an application which performs addition and substraction of 2 numbers

//Kay karaych aahe ?(Method) --> Addition & Substraction

//Te karayla kay lagnar aahe?(Data) --> 2 numbers


class Arithmatic
{
   No1:number;
   No2:number;
   Ans:number;
   
   constructor(A:number,B:number)
   {
	   this.No1=A;
	   this.No2=B;
	   this.Ans=0;
   }
   
   Addition():number
   {
	 	   
	   this.Ans=this.No1+this.No2;
	   
	   return this.Ans;
   }
   
   Substraction():number
   {
	     
	   this.Ans=this.No1-this.No2;
	   
	   return this.Ans;
   }
   
}

var Ret:number=0;
var ObjA=new Arithmatic(11,10);
Ret=ObjA.Addition();
console.log("Addition of ObjA is : "+Ret);
Ret=ObjA.Substraction();
console.log("Substraction of ObjA is : "+Ret);

var ObjB=new Arithmatic(30,10);
Ret=ObjB.Addition();
console.log("Addition of ObjB is : "+Ret);
Ret=ObjB.Substraction();
console.log("Substraction of ObjB is : "+Ret);