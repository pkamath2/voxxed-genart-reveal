let truchet_2 = function (p) {
    let height = 500;
    let width = 1000;
    let size = 10;
    let colors = ['black']
    let density = 0.02;

    p.setup = function () {
        canvas = p.createCanvas(width, height);
        // canvas.position(475, 55);
        p.noLoop();
        p.background('floralwhite')
    }

    p.draw = function () {
        for (var i = 0; i < height / size; i++) {
            for (var j = 0; j < width / size; j++) {
                p.tile(i * size, j * size, p.random([0, 1, 2, 3]))
            }
        }
    }

    p.tile = function (x, y, orientation) {
        var angle = orientation * p.PI / 2;
        var s_orientation = orientation + 2;
        s_orientation = s_orientation > 3 ? s_orientation - 4 : s_orientation;
        var s_angle = s_orientation * p.PI / 2;
        p.push();
        p.noStroke();
        p.fill(p.random(colors));
        p.translate(y, x);
        p.translate(size / 2, size / 2);
        p.rotate(angle);
        p.translate(-size / 2, -size / 2);
        p.triangle(size, 0, size, size, 0, size);
        p.pop();

        if (Math.random() < density * x / 10) {
            p.push()
            p.noStroke();
            p.fill(p.random(colors));
            p.translate(y, x);
            p.translate(size / 2, size / 2);
            p.rotate(s_angle);
            p.translate(-size / 2, -size / 2);
            p.triangle(size, 0, size, size, 0, size);
            p.pop()
        }
    }
}




















