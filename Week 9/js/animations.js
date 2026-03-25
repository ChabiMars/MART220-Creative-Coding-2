class animationImage {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.createAnimations();
        this.currentAnimation;
        this.direction = "";
    }

    // getter and setter for x and y
    //setup
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }


    createAnimations() {
        this.currentAnimation = new Sprite(this.x, this.y, this.w, this.h);
    }

    loadAnimation(animationType, filenames) {
        this.currentAnimation.addAni(animationType, filenames);
        this.currentAnimation.scale = 0.4;
    }

    // display

drawAnimation(animationType) {
    this.currentAnimation.rotationSpeed = 0;
    myAnimation.currentAnimation.velocity.x = 0;
    myAnimation.currentAnimation.velocity.y = 0;
    this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
             this.currentAnimation.scale.x = 0.4;
            this.currentAnimation.velocity.x = 5;

        } 
        else if (animationType == 'walk' && this.direction == 'up') {
             //this.currentAnimation.scale.x = 0.5;
           
             this.currentAnimation.velocity.y = -5;
        
        }
        else if (animationType == 'walk' && this.direction == 'down') {
            // this.currentAnimation.scale.x = 0.5;
         
            this.currentAnimation.scale.y = 0.4;
            this.currentAnimation.velocity.y = 5;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {
            this.currentAnimation.scale.x = -0.4;
            this.currentAnimation.velocity.x = -5;
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }
    }
    updatePosition(direction) {
        this.direction = direction;  
    }

    Collision(myImage) {
        return this.currentAnimation.collide(myImage);
    }


}


