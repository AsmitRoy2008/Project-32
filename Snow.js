class Snow
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic: false,
            restitution: 0.04
        }

        this.body = Bodies.circle(x,y,r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        console.log(this.body.position.x);

        this.image = loadImage("snow5.webp");
        this.fall = [];
        

    }

    display()
    {
        image(this.image, this.fall[0][0], this.fall[0][1]);
        
        var pos = [this.body.position.x, this.body.postion.y];
        this.fall.push(pos);
        

    }
}