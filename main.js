const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

class Object {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
    }
}

// Implementation

let circle1, circle2;
let objects;

function init() {
    objects = [];

    for (let i = 0; i < 50; i++) {
        objects.push(circle1 = new Object(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 30, "black"))
    }
    console.log(objects);

    circle2 = new Object(300, 30, 15, "blue");

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((circle1) => {
        circle1.update()
    })
    circle1.update();
    circle2.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;

    if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = "red";
    } else {
        circle1.color = "black";
    }
}

init();
animate();