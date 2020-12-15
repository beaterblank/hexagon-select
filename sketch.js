points = [];
points1 = [];
points2 = [];


function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0, 'fixed');
    cnv.style('cursor', 'none')
    r = 15
    x = r
    y = r
    nx = ((windowWidth - r) / (3 * r)) + 2
    ny = ((windowHeight) / (sqrt(3) * r)) + 2
    for (i = 0; i < nx; i++) {
        for (j = 0; j < ny; j++) {
            k = x + i * 3 * r
            l = y + j * sqrt(3) * r
            append(points, [k, l])
            m = x + i * 3 * r + 1.5 * r
            n = y + sqrt(3) / 2 * r + j * sqrt(3) * r
            append(points, [m, n])
            polygon(x + i * 3 * r, y + j * sqrt(3) * r, r, 6)

            polygon(x + i * 3 * r + 1.5 * r, y + sqrt(3) / 2 * r + j * sqrt(3) * r, r, 6)


        }
    }
}

function draw() {
    background(0)
    drawpoly()
    d = []
    for (i = 0; i < points.length; i++) {
        distance = (mouseX - points[i][0]) * (mouseX - points[i][0]) + (mouseY - points[i][1]) * (mouseY - points[i][1])
        d.push(distance)
    }

    m = ind(d)
    polygon(points[m][0], points[m][1], r, 6, true)
}

function drawpoly() {
    for (i = 0; i < nx; i++) {
        for (j = 0; j < ny; j++) {
            stroke(198, 217, 233, 40)
            polygon(x + i * 3 * r, y + j * sqrt(3) * r, r, 6)
            polygon(x + i * 3 * r + 1.5 * r, y + sqrt(3) / 2 * r + j * sqrt(3) * r, r, 6)
        }
    }
}

function polygon(x, y, radius, npoints, show = false) {
    let angle = TWO_PI / npoints;
    if (show) { fill(255, 218, 185) } else { fill(0, 0, 0, 0) }
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function ind(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    nx = (windowWidth - r) / (3 * r) + 2
    ny = ((windowHeight) / (sqrt(3) * r)) + 2
    pointsx = []
    for (i = 0; i < nx; i++) {
        for (j = 0; j < ny; j++) {
            k = x + i * 3 * r
            l = y + j * sqrt(3) * r
            append(pointsx, [k, l])
            m = x + i * 3 * r + 1.5 * r
            n = y + sqrt(3) / 2 * r + j * sqrt(3) * r
            append(pointsx, [m, n])
        }
    }
    points = pointsx
}