class Vector {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        let q = Math.sqrt(this.x*this.x + this.y*this.y);
        this.x /= q;
        this.y /= q;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
    }

    mull(num) {
        return new Vector(this.x*num, this.y*num);
    }

    zero() {
        this.x = 0;
        this.y = 0;
    }

    assignment(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {
    Color = "#00FF00";
    Radius = 10;
    Friction = 0.8;
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector();
        this.tail = null;
        this.del = true;
    }

    move(acc, speed) {
        this.pos.add(this.vel.mull(speed));
        this.vel.add(acc);
        snake.vel.normalize();
    }

    draw() { 
        let snake_tail = this;
        while (snake_tail.tail.tail != null) {
            c.beginPath()
            c.arc(snake_tail.pos.x, snake_tail.pos.y,
                this.Radius, 0, Math.PI*2, false);
            c.fillStyle = this.Color;
            c.fill();

            snake_tail = snake_tail.tail;
        }
        c.beginPath()
        c.arc(snake_tail.pos.x, snake_tail.pos.y,
            this.Radius, 0, Math.PI*2, false);
        c.fillStyle = this.Color;
        c.fill();
        c.beginPath()
        c.arc(snake_tail.tail.pos.x, snake_tail.tail.pos.y,
            this.Radius, 0, Math.PI*2, false);
        c.fillStyle = this.Color;
        c.fill();
        if (this.del) snake_tail.tail = null;
    }

    collide(other, radius2) {
        let distX = Math.pow(this.pos.x-other.pos.x, 2);
        let distY = Math.pow(this.pos.y-other.pos.y, 2);
        let range = this.Radius*this.Radius + radius2*radius2;
        if (distX+distY <= range)
            return true;
        return false;
    }

    die() {
        if (this.pos.x < 0)
            this.pos.x = canvas.width-4;
        else if(this.pos.x > canvas.width)
            this.pos.x = 4;
        if (this.pos.y < 0)
            this.pos.y = canvas.height-4;
        else if(this.pos.y > canvas.height)
            this.pos.y = 4;

        let snake_tail = this.tail.tail.tail.tail.tail;
        while (snake_tail != null) {
            if (!this.collide(snake_tail, 0)){
                snake_tail = snake_tail.tail;
            }
            else
                return true;
        }
        return false;
    }
}

class Food {
    Radius = 10;
    Color = "#FF0000";
    constructor(head) {
        do {
            this.pos = new Vector(
                this.Radius+Math.random()*(canvas.width-this.Radius),
                this.Radius+Math.random()*(canvas.height-this.Radius)
            );
        } while(head.collide(this, this.Radius));
    }

    draw() {
        c.beginPath()
        c.arc(this.pos.x, this.pos.y,
            this.Radius, 0, Math.PI*2, false);
        c.fillStyle = this.Color;
        c.fill();
    }
}
