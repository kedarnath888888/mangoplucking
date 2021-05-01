
     class Chain {
        constructor(bodyA,pointB){
            var options ={
                bodyA: bodyA,
                pointB: pointB,
                stiffness:0.1,
                length:80,
        
        
            }
            this.pointB=pointB;
             this.chain=Constraint.create(options); 
            World.add(world,this.chain);
        }
        attach(body){ 
            this.chain.bodyA = body;
        }
            fly(){
                this.chain.bodyA = null;
            }
        
        
        display(){
            if(this.chain.bodyA){
            var posA = this.chain.bodyA.position;
            var posC =this.pointB;
            strokeWeight(3);
            line (posA.x,posA.y,posC.x,posC.y);
        }
    }
    }