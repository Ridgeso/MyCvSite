let scale = 40;
const rows = Math.floor(width/scale);
const cols = Math.floor(height/scale);


class Grid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.h = 0;
        this.g = 0;
        this.wall = Math.random() < 0.2;
        this.previous = null;
    }

    show() {
        c.beginPath();
        if (this.wall) c.fillStyle = "#000000";
        else if (this.belongs(path)) c.fillStyle = "#00FF00";
        else if (this.belongs(been)) c.fillStyle = "#FF0000";
        else c.fillStyle = "#FFFFFF"
        // c.fillRect(this.x*scale, this.y*scale, scale, scale);
        c.fillRect(10+this.x*scale, 10+this.y*scale, scale-10, scale-10);
        c.stroke();
    }

    belongs(array) {
        if (array.includes(this))
            return true;
        return false;
    }
}

function retraice(pos) {
    path.push(pos);
    let prev = pos.previous;
    while(prev != null) {
        path.push(prev);
        prev = prev.previous;
    }
}

function neighbours(pos) {
    let all = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) continue;
            if (0 <= pos.x-i && pos.x-i < rows && 0 <= pos.y-j && pos.y-j < cols)
                all.push(board[pos.x-i][pos.y-j]);
        }
    }
    return all;
}

function heuristic(a, b) {
    let x = Math.abs(a.x - b.x);
    let y = Math.abs(a.y - b.y);
    return x + y - 0.5 * Math.min(x, y);
}

function aStar() {
    let del = 0;
    for (let i = 0; i < openset.length; i++) {
        if (openset[i].f < openset[del].f) {
            del = i;
        }
    }

    let pos = openset[del];
    if (pos == end) {
        retraice(pos);
        return true;
    }

    been.push(openset.splice(del, 1)[0]);

    let neigh = neighbours(pos);
    for (let ind in neigh) {
        let n = neigh[ind];
        if (been.includes(n) || n.wall) continue;
        let temp_g = pos.g + heuristic(n, pos);
        let contain = !openset.includes(n);

        if (temp_g < n.g || contain) {
            n.g = temp_g;
            n.h = heuristic(n, end)
            n.f = n.h + n.g;
            n.previous = pos;
            if (contain) openset.push(n);
        }
    }
    retraice(pos);
    return false;
}
