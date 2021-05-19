class paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.papeprWidth=200;
		this.paperHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.paperWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.papaerHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.papaerWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			
	}

}