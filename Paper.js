class Paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
		this.image=loadImage("paper.png");
		this.body =Matter.Bodies.circle(this.x,this.y,10, options);
		World.add(world, this.body)

	}
	display()
	{
			var pos=this.body.position;			

			push()
			rectMode(CENTER);
			
			fill("white");
            ellipse(pos.x,pos.y, 30,30);
			imageMode(CENTER);
			image(this.image, pos.x,pos.y,50,50)
			pop();
	}

}