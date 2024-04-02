if (! (navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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";

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 30 * this.s, 30 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;z-index:99999;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}
}