function draw() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j].show();
        }
    }
}

function setup() {
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            board[i][j] = new Grid(i, j);
        }
    }
}

let frame = 0;
function startFinding() {
    if (frame % speed.value === 0 && stop.value === "Stop") {
        if (!aStar() && openset.length) {
            draw();
            path = [];
        }
        else {
            draw()
        }
    }
    frame++;    
    requestAnimationFrame(startFinding)
}

const speed = document.getElementById("speed");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
stop.onclick = function() {
    if (this.value === "Stop")
        this.value = "Continue";
    else
        this.value = "Stop";
}

let board = new Array(rows);
setup();
let path = [];
let been = [];
let openset = [board[0][0]];
let end = board[rows-1][cols-1];
end.wall = false;

reset.onclick = function() {
    stop.value = "Continue";
    board = new Array(rows);
    setup();
    path = [];
    been = [];
    openset = [board[0][0]];
    end = board[rows-1][cols-1];
    end.wall = false;
    draw();
}

draw();
startFinding();
