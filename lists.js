var width=screen.width;
new_width= screen.width- 70;
new_height = screen.height - 300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
function my_mousestart(e){
    console.log("my_mousestart");

    last_position_of_x=e.mouses[0].clentX-canvas.offsetLeft;
    last_position_of_y=e.mouses[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath()
    }
}
function back(){
    window.location="index.html";
}