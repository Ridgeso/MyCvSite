function setup(head) {
    let snake_tail = head;
    for (let i = 0; i < 10; i++){
        snake_tail.tail = new Snake(snake_tail.pos.x-snake.Radius*2, 150);
        snake_tail = snake_tail.tail;
    }
}

function redraw() {
    c.beginPath();
    c.rect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "#FCFAEF";
    c.fill();
   
    snake.draw();

    food.draw();
}

let frame = 0;
const speed = 8;
const snake_speed = 18;
const snake_acc = 0.5;

function main() {
    if (run && frame%speed == 0) {

        let old = snake;

        snake = new Snake(old.pos.x, old.pos.y);
        snake.vel = old.vel;
        snake.tail = old;

        if (keys["s"])
            acc.y += snake_acc;
        if (keys["w"])
            acc.y -= snake_acc;
        if (keys["a"])
            acc.x -= snake_acc;
        if (keys["d"])
            acc.x += snake_acc;

        snake.move(acc, snake_speed);
        acc.zero();
        keys = {};

        if (snake.die())
            run = false;
        if (snake.collide(food, food.Radius)) {
            food = new Food(snake);
            snake.del = false;
        } else {
            snake.del = true;
        }
        redraw();
    } else {
        if (keys["enter"]) {
            snake = new Snake(150, 150);
            acc = new Vector(1, 0);
            food = new Food(snake);
            setup(snake);
            keys = {};
            run = true;
        }
    }
    frame++;
    requestAnimationFrame(main);
}

let run = true;
let snake = new Snake(150, 150);
let acc = new Vector(1, 0);
let food = new Food(snake);
setup(snake);

let keys = {};
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) return;
    switch (event.key) {
        case "S": case "s": keys["s"] = true; break;
        case "W": case "w": keys["w"] = true; break;
        case "A": case "a": keys["a"] = true; break;
        case "D": case "d": keys["d"] = true; break;
        case "Enter": keys["enter"] = true; break;
        default: return;
    }
    event.preventDefault();
  }, true);
// window.addEventListener("keyup", function (event) {
//     if (event.defaultPrevented) return;
//     switch (event.key) {
//         case "s": keys["s"] = true; break;
//         case "w": keys["w"] = true; break;
//         case "a": keys["a"] = true; break;
//         case "d": keys["d"] = true; break;
//         default: return;
//     }
//     event.preventDefault();
//   }, false);

main();
