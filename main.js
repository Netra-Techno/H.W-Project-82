var Mouse_Event = "empty";
var last_postion_of_x, last_postion_of_y;

canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    Mouse_Event = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_X = e.clientX - canvas.offSetLeft;
    current_position_of_Y = e.clientY - canvas.offSetTop;
    if (Mouse_Event == "mouseDown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last_postion_of_x and y coordinates =");
        console.log("x =" + last_postion_of_x + "y =" + last_postion_of_y);
        ctx.moveTo(last_postion_of_x, last_postion_of_y);
        console.log("current_position_of_x and y coordinates =");
        console.log("x =" + current_position_of_X + "y =" + current_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
    }
    last_postion_of_x = current_position_of_X;
    last_postion_of_y = current_position_of_Y;
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    Mouse_Event = "mouseleave";
}
canvas.addEventListener("mouseUP", my_mouseUp);

function my_mouseUp(e) {
    Mouse_Event = "mouseUp";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas, width, ctx.canvas.height);
}