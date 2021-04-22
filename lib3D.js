
//===================== class  polygon ========================//
function polygon() {
    var v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z, v4x, v4y, v4z;
    var v1xe, v1ye, v1ze, v2xe, v2ye, v2ze, v3xe, v3ye, v3ze, v4xe, v4ye, v4ze;
    var Px1, Py1, Px2, Py2, Px3, Py3, Px4, Py4;
    this.set = setp;
    this.scale = scalep;
    this.translation = translationp;
    this.rotation = rotationp;
    this.normal = normalp;
    this.normal2 = normalp2;
    this.projection = projectionp;
}
function setp(v1xa, v1ya, v1za,
    v2xa, v2ya, v2za,
    v3xa, v3ya, v3za,
    v4xa, v4ya, v4za) {
    v1x = v1xe = v1xa;
    v1y = v1ye = v1ya;
    v1z = v1ze = v1za;
    v2x = v2xe = v2xa;
    v2y = v2ye = v2ya;
    v2z = v2ze = v2za;
    v3x = v3xe = v3xa;
    v3y = v3ye = v3ya;
    v3z = v3ze = v3za;
    v4x = v4xe = v4xa;
    v4y = v4ye = v4ya;
    v4z = v4ze = v4za;
}
function scalep(dx, dy, dz) {
    v1x *= dx;
    v1y *= dy;
    v1z *= dz;
    v2x *= dx;
    v2y *= dy;
    v2z *= dz;
    v3x *= dx;
    v3y *= dy;
    v3z *= dz;
    v4x *= dx;
    v4y *= dy;
    v4z *= dz;
}
function translationp(dx, dy, dz) {
    v1x = v1x + dx;
    v1y = v1y + dy;
    v1z = v1z + dz;

    v2x = v2x + dx;
    v2y = v2y + dy;
    v2z = v2z + dz;

    v3x = v3x + dx;
    v3y = v3y + dy;
    v3z = v3z + dz;

    v4x = v4x + dx;
    v4y = v4y + dy;
    v4z = v4z + dz;
}
function rotationp(angle) {
    angle = angle * Math.PI / 180;
    v1x = v1xe * Math.cos(angle) + v1ze * Math.sin(angle);
    v1z = v1ze * Math.cos(angle) - v1xe * Math.sin(angle);
    v2x = v2xe * Math.cos(angle) + v2ze * Math.sin(angle);
    v2z = v2ze * Math.cos(angle) - v2xe * Math.sin(angle);
    v3x = v3xe * Math.cos(angle) + v3ze * Math.sin(angle);
    v3z = v3ze * Math.cos(angle) - v3xe * Math.sin(angle);
    v4x = v4xe * Math.cos(angle) + v4ze * Math.sin(angle);
    v4z = v4ze * Math.cos(angle) - v4xe * Math.sin(angle);
}

function projectionp(Prjx, Prjy, Prjz, dest) {


    var Temp = Prjz - v1z;
    if (Temp == 0) Temp = 0.00001;
    Px1 = parseInt((((dest - v1z) * (Prjx - v1x)) / Temp) + v1x);
    Py1 = parseInt((((dest - v1z) * (Prjy - v1y)) / Temp) + v1y);

    Temp = Prjz - v2z;
    if (Temp == 0) Temp = 0.00001;
    Px2 = parseInt((((dest - v2z) * (Prjx - v2x)) / Temp) + v2x);
    Py2 = parseInt((((dest - v2z) * (Prjy - v2y)) / Temp) + v2y);

    Temp = Prjz - v3z;
    if (Temp == 0) Temp = 0.00001;
    Px3 = parseInt((((dest - v3z) * (Prjx - v3x)) / Temp) + v3x);
    Py3 = parseInt((((dest - v3z) * (Prjy - v3y)) / Temp) + v3y);

    Temp = Prjz - v4z;
    if (Temp == 0) Temp = 0.00001;
    Px4 = parseInt((((dest - v4z) * (Prjx - v4x)) / Temp) + v4x);
    Py4 = parseInt((((dest - v4z) * (Prjy - v4y)) / Temp) + v4y);
}
function normalp2(v1xq, v1yq, v1zq, v2xq, v2yq, v2zq, v3xq, v3yq, v3zq) {
    //double nx, ny, nz,   tx, ty, tz,    ex, ey, ez ,    vt1x, vt1y, vt1z,    vt2x, vt2y, vt2z,  wrk;
    var ex = 0;
    var ey = 0;
    var ez = 1;
    vt1x = v1xq - v2xq;
    vt1y = v1yq - v2yq;
    vt1z = v1zq - v2zq;

    vt2x = v2xq - v3xq;
    vt2y = v2yq - v3yq;
    vt2z = v2zq - v3zq;

    var nx = vt1y * vt2z - (vt2y * vt1z);
    var ny = -vt1x * vt2z + (vt2x * vt1z);
    var nz = vt1x * vt2y - (vt2x * vt1y);
    var wrk = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (wrk == 0) wrk = 1;

    var tx = nx / wrk;
    var ty = ny / wrk;
    var tz = nz / wrk;
    return (tx * ex + ty * ey + tz * ez) / (Math.sqrt(tx * tx + ty * ty + tz * tz) *
        Math.sqrt(ex * ex + ey * ey + ez * ez));
}
//===================================			
function normalp() {
    //double nx, ny, nz,   tx, ty, tz,    ex, ey, ez ,    vt1x, vt1y, vt1z,    vt2x, vt2y, vt2z,  wrk;
    var ex = 0;
    var ey = 0;
    var ez = 1;
    vt1x = v1x - v2x;
    vt1y = v1y - v2y;
    vt1z = v1z - v2z;

    vt2x = v2x - v3x;
    vt2y = v2y - v3y;
    vt2z = v2z - v3z;

    var nx = vt1y * vt2z - (vt2y * vt1z);
    var ny = -vt1x * vt2z + (vt2x * vt1z);
    var nz = vt1x * vt2y - (vt2x * vt1y);
    var wrk = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (wrk == 0) wrk = 1;

    var tx = nx / wrk;
    var ty = ny / wrk;
    var tz = nz / wrk;
    return (tx * ex + ty * ey + tz * ez) / (Math.sqrt(tx * tx + ty * ty + tz * tz) *
        Math.sqrt(ex * ex + ey * ey + ez * ez));
}
//===================================			



//================== end class  polygon ========================//

var H = 200;
var W = 400;
p1 = new polygon();
var tx = 0;
var ty = 0;
var tz = 0;

var sx = 4;
var sy = 4;
var sz = 4;

var ax = 0;       //5;
var ay = 7;       //2.5; 
var az = 20;     //5    
var dst = 400;  //100





var b_canvas = document.getElementById("canv");
var g = b_canvas.getContext("2d");
g.fillStyle = "#000";
g.fillRect(0, 0, 640, 480);

var nx = 4;
var kx = 8;
var dx = 2 * Math.PI / kx;
var dy = 2 * Math.PI / nx;
var R = 5;
var h1 = -4;
var h2 = 4;
var cnrm = 0;
var s_cnrm = '';
var n_color = 0;
var x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4;
var tst = 0;
var rot = 0;

function pes() {
    var ff = document.getElementById("n_gons");
    kx = parseInt(ff.value);
    dx = 2 * Math.PI / kx;
    //kx = 10;
    //alert(ff.value);
    rot_cyllinder();
}
//======================== cylinder ==========================	
function rot_cyllinder() {
    rot++;
    if (rot >= 360) rot = 0;
    g.fillStyle = "#000";
    g.fillRect(0, 0, 640, 480);

    for (var k = 0; k < kx; k++) {
        x1 = R * Math.sin(k * dx);
        z1 = R * Math.cos(k * dx);
        y1 = h1;

        x2 = R * Math.sin((k + 1) * dx);
        z2 = R * Math.cos((k + 1) * dx);
        y2 = h1;

        x3 = x2;
        z3 = z2;
        y3 = h2;


        x4 = x1;
        z4 = z1;
        y4 = h2;


        p1.set(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);
        p1.rotation(rot);
        p1.translation(tx, ty, tz);
        //p1.scale (4, 4, 4);
        p1.projection(ax, ay, az, dst);

        cnrm = p1.normal();
        tst = cnrm;
        if (cnrm <= 0.2)
            cnrm = 0;
        else {
            n_color = Math.round(100 + 155 * cnrm);
            s_cnrm = String(n_color);
            g.fillStyle = 'rgba(0, 0, ' + s_cnrm + ', 255)';
            g.beginPath();
            g.moveTo(Px1 + W, Py1 + H);
            g.lineTo(Px2 + W, Py2 + H);
            g.lineTo(Px3 + W, Py3 + H);
            g.lineTo(Px4 + W, Py4 + H);
            g.lineTo(Px1 + W, Py1 + H);
            g.closePath();
            g.fill();
        }
        //==================кришка====================
        p1.set(x4, y4, z4, x3, y3, z3, 0, h2, 0, 0, h2, 0);
        p1.rotation(rot);
        p1.translation(tx, ty, tz);
        //p1.scale (4, 4, 4);
        p1.projection(ax, ay, az, dst);

        cnrm = p1.normal();
        tst = cnrm;
        if (cnrm < 0)
            cnrm = 0;
        else {
            n_color = Math.round(100 + 155 * cnrm);
            s_cnrm = String(n_color);
            g.fillStyle = 'rgba(0, 0, ' + s_cnrm + ', 255)';
            g.beginPath();
            g.moveTo(Px1 + W, Py1 + H);
            g.lineTo(Px2 + W, Py2 + H);
            g.lineTo(Px3 + W, Py3 + H);
            g.lineTo(Px4 + W, Py4 + H);
            g.lineTo(Px1 + W, Py1 + H);
            g.closePath();
            g.fill();
        }

    }
    //===================== sphere =============================

    /*	
        for (var n=0; n<nx; n++)
        {
        var dh = R/nx;
            for (var k=0; k<kx; k++)
            {
        x1 = R*Math.sin (n * dy/2) * Math.sin (k * dx);
        z1 = R *Math.sin (n * dy/2) * Math.cos (k * dx);
        y1 = R *Math.cos (n * dy/2);
    	
        x2 = R*Math.sin (n * dy/2) * Math.sin ((k+1) * dx);
        z2 = R *Math.sin (n * dy/2) * Math.cos ((k+1) * dx);
        y2 = R *Math.cos (n * dy/2);
    	
        x3 = R*Math.sin ((n+1) * dy/2) * Math.sin ((k+1) * dx);
        z3 = R*Math.sin ((n+1) * dy/2) * Math.cos ((k+1) * dx);
        y3 = R *Math.cos ((n+1) * dy/2);
    	
    	
        x4 = R*Math.sin ((n+1) * dy/2) * Math.sin ((k) * dx);
        z4 = R*Math.sin ((n+1) * dy/2) * Math.cos ((k) * dx);
        y4 = R *Math.cos ((n+1) * dy/2);
    	
    	
        p1.set (x1, y1, z1,   x2, y2, z2,   x3, y3, z3,   x4, y4, z4);
        p1.rotation (rot);
        p1.translation (tx, ty, tz);
        p1.scale (1, 1, 1);
        p1.projection (ax, ay, az, dst);
                	
        cnrm = p1.normal();
        tst = cnrm;
        if (cnrm <= -0.2)
            cnrm = 0;	
        else {		
        n_color = Math.round(100+155*cnrm);
        s_cnrm	= String(n_color);
        g.fillStyle = 'rgba(0, 0, '+ s_cnrm +', 255)';
        g.beginPath();
        g.moveTo(Px1 + W, Py1 + H);
        g.lineTo(Px2 + W, Py2 + H);
        g.lineTo(Px3 + W, Py3 + H);
        g.lineTo(Px4 + W, Py4 + H);
        g.lineTo(Px1 + W, Py1 + H);
        g.closePath();
        g.fill();
    	
        //alert(Px1+' '+Py1+' '+Px2+' '+Py2);
        }
        	
        }
    }*/
    //==========================================================
}

setInterval("rot_cyllinder()", 20);


//header ("Content-type: image/png");
