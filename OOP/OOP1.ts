



class Student
{	
  //Charactoristics
	Name:string;
	Marks:number;
	Age:number;
	City:string;
	
	constructor(N:string,M:number,A:number,C:string)
	{
		this.Name=N;
		this.Marks=M;
		this.Age=A;
		this.City=C;
	}
	
	Display():void
	{
		console.log("Name of student : "+this.Name);
		console.log("Marks of student : "+this.Marks);
		console.log("Age of student : "+this.Age);
		console.log("City of student : "+this.City);
	}
}

var Obj071=new Student("Onkar",95,23,"Sangli");
var Obj072=new Student("Ram",97,24,"Pune");

Obj071.Display();
Obj072.Display();