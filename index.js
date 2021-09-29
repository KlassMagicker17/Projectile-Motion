var xIn = 300;
var yIn = 80;

var mouseClicked = false, mouseReleased = true;
document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);
function onMouseClick() {
    if (event.clientX >= 250) {
        mouseClicked = !mouseClicked;
        xIn = event.clientX;
        yIn = event.clientY;
        move();
    }
}
function onMouseMove() {
    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");

    if (mouseClicked && event.clientX >= 250) {
        xIn = event.clientX;
        yIn = event.clientY;
        move();
    }
}
//ctx.fillStyle = 'rgba(50,50,50,0.1)';
function move() {
    var a = document.getElementById("angle").value;
    var v = document.getElementById("velocity").value;
    var r = document.getElementById("radius").value;
    var g = document.getElementById("gravity").value;
    var t = 0;
    var it = document.getElementById("iteration").value;
    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");
    var height = c.height = window.innerHeight;
    var width = c.width = window.innerWidth;
    x = ((v * Math.cos(a * Math.PI / 180)) * it) + xIn;
    y = -(((v * Math.sin(a * Math.PI / 180)) * it + (g * it ** 2) / 2)) + yIn;
    ctx.fillStyle = 'rgb(50,50,50)';
    for (i = 0; i <= it; i++) {
        if (document.getElementById("moving").checked && i != it) {
            ctx.fillStyle = 'rgba(50,50,50,0.1)';
        }
        var ti = document.getElementById("tmeInt").value;
        x = ((v * Math.cos(a * Math.PI / 180)) * t) + xIn;
        y = -(((v * Math.sin(a * Math.PI / 180)) * t + (g * t ** 2) / 2)) + yIn;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.fill();
        t += parseFloat(ti);
        ctx.fillStyle = 'rgb(50,50,50)';
    }

    // ctx.beginPath();
    // ctx.moveTo(xIn, yIn);
    // var xThing = ((v * Math.cos(a * Math.PI / 180)) * it / 2) + xIn;
    // var yThing = -(((v * Math.sin(a * Math.PI / 180)) * (it/2) + (g * (it/2) ** 2) / 2)) + yIn;
    // ctx.bezierCurveTo(xThing, yThing,x,y, x, y);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(xThing, yThing, r, 0, 2 * Math.PI, false);
    // ctx.fill();

    //(0.5) * xIn/2 + 0.5 * x
    var as = document.getElementById("angle");
    var vs = document.getElementById("velocity");
    var gs = document.getElementById("gravity");
    var its = document.getElementById("iteration");
    var tis = document.getElementById("tmeInt");
    var rs = document.getElementById("radius");

    var aP = document.getElementsByName("aglP");
    var vP = document.getElementsByName("vlcP");
    var gP = document.getElementsByName("grvP");
    var itP = document.getElementsByName("itP");
    var IntP = document.getElementsByName("tIntP");
    var rP = document.getElementsByName("rP");

    var mode = document.getElementById("mode");

    if (document.getElementById("normal").checked) {
        mode.innerHTML = "Showing All Balls";
    } else {
        mode.innerHTML = "Showing Last Ball";
    }

    for (i = 0; i < aP.length; i++) {
        aP[i].innerHTML = "angle " + as.value + " (θ)";
        vP[i].innerHTML = "velocity " + vs.value + " (v)";
        gP[i].innerHTML = "gravity " + gs.value + " (g)";
        itP[i].innerHTML = "Iterations " + its.value + " (?)";
        IntP[i].innerHTML = "time interval " + tis.value + " (t)";
        rP[i].innerHTML = "Circle size " + rs.value + " (r)";
    }
}