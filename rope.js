class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		line(bob1.x,bob1.y,320,roofObject.y)
		line(bob2.x,bob2.y,360,roofObject.y)
		line(bob3.x,bob3.y,400,roofObject.y)
		line(bob4.x,bob4.y,440,roofObject.y)
		line(bob5.x,bob5.y,480,roofObject.y)
	}

}