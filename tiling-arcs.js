let truchet_1 = function (p) {
    let height = 500;
    let width = 500;
    let size = 10;
    let count = 1000;
    let colors = ['#ffd1d8', '#b4ecb4', "#80f4ff"]
    let sel_color = '#ffd1d8';
    let sel_bg_color = '#80f4ff';
    let prev_orientation = -10;
    let tiles;

    p.setup = function () {

        canvas = p.createCanvas(width, height);
        // canvas.position(475, 55);
        p.noLoop();
        selectedColor = p.random(colors);
        tiles = new Array();
    }

    p.draw = function () {
        for (var i = 0; i < width / size; i++) {
            tiles[i] = new Array();
            for (var j = 0; j < height / size; j++) {
                tiles[i][j] = {
                    x: i * size,
                    y: j * size,
                    orientation: p.random([0, 1]),
                    sel_color: '#ffd1d8',
                    sel_bg_color: '#80f4ff',
                    swap: false
                }
            }
        }
        i = 0; j = 0;
        for (i = 0; i < width / size; i++) {
            for (j = 0; j < height / size; j++) {
                if (i > 0 && j == 0) {
                    if (tiles[i - 1][0].orientation == tiles[i][0].orientation) {
                        tiles[i][0].swap = !tiles[i - 1][0].swap;
                    } else {
                        tiles[i][0].swap = tiles[i - 1][0].swap;
                    }

                }

                if (j > 0) {
                    if (tiles[i][j - 1].orientation == tiles[i][j].orientation) {
                        tiles[i][j].swap = !tiles[i][j - 1].swap;
                    } else {
                        tiles[i][j].swap = tiles[i][j - 1].swap;
                    }
                }
            }
        }

        for (i = 0; i < width / size; i++) {
            for (j = 0; j < height / size; j++) {
                p.tile(tiles[i][j]);
            }
        }
    }


    p.tile = function (t) {
        if (t.swap) {
            var tmp = t.sel_color;
            t.sel_color = t.sel_bg_color;
            t.sel_bg_color = tmp;
        }
        p.push();
        p.translate(t.x, t.y);
        p.noStroke();
        p.fill(t.sel_bg_color)
        p.rect(0, 0, size, size);
        p.translate(size / 2, size / 2);
        p.rotate(t.orientation * p.PI / 2);
        p.translate(-size / 2, -size / 2);
        p.stroke('black');
        p.fill(t.sel_color);
        p.arc(0, 0, size, size, 0, p.PI / 2);
        p.arc(size, size, size, size, p.PI, 3 * p.PI / 2);
        p.pop();
    }
}






