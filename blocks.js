class Blocks{

    constructor (x,y,w,h,opt){

        this.object=Bodies.rectangle(x,y,w,h,opt)
        World.add(world,this.object)
        this.width=w
        this.height=h




    }
    display() {
        push()
        translate(this.object.position.x,this.object.position.y)
        angleMode(RADIANS)
        rotate(this.object.angle)

        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()


        
    }
}