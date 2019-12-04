const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

/// Cart class
class Cart {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.turnCount = 0;
    }

    move() {
        if (this.dir === '^') {
            this.y--;
        }
        if (this.dir === 'v') {
            this.y++;
        }
        if (this.dir === '<') {
            this.x--;
        }
        if (this.dir === '>') {
            this.x++;
        }

        this.checkCurve();
        this.turnAtIntersection();
    }

    checkCurve() {
        let trackComponent = data[y][x];
        if (trackComponent === '/') {
            if (this.dir === 'v' || this.dir === '^') {
                this.turnRight();
            }
            if (this.dir === '<' || this.dir === '>') {
                this.turnLeft();
            }
        }
        if (trackComponent === '\\') {
            if (this.dir === 'v' || this.dir === '^') {
                this.turnLeft();
            }
            if (this.dir === '<' || this.dir === '>') {
                this.turnRight();
            }
        }
    }

    turnAtIntersection() {
        if (data[y][x] === '+') {
            this.turnCount++;
            if (this.turnCount % 1 === 0) {
                this.turnLeft();
            }
            if (this.turnCount % 3 === 0) {
                this.turnRight();
            }
        }
    }

    turnRight() {
        if (this.dir === 'v') {
            this.dir = '<';
        }
        if (this.dir === '^') {
            this.dir = '>';
        }
        if (this.dir === '>') {
            this.dir = 'v';
        }
        if (this.dir === '<') {
            this.dir = '^';
        }
    }

    turnLeft() {
        if (this.dir === 'v') {
            this.dir = '>';
        }
        if (this.dir === '^') {
            this.dir = '<';
        }
        if (this.dir === '>') {
            this.dir = '^';
        }
        if (this.dir === '<') {
            this.dir = 'v';
        }
    }

    coordString() {
        return `${this.x},${this.y}`;
    }
}

// Init all carts
const carts = [];

data.map((line, yPos) => {
    for (let xPos = 0; xPos < line.length; xPos++) {
        if (line[xPos].match(/[\^\<\>v]/gi)) {
            let dir = line[xPos].match(/[\^\<\>v]/gi)[0];
            let newCart = new Cart(xPos, yPos, dir);
            carts.push(newCart);
        }
    }
});

carts.forEach(cart => {
    console.log(cart);
    console.log(cart.coordString());
});

// Run ticks, sort carts each tick, check for collisions as they occur
