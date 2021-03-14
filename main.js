tint_color="";
function preload(){

}
function filter(){
    tint_color=document.getElementById("input").value;
    save("selfie.png")
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.position(500,200)
    video=createCapture(VIDEO)
video.hide();
}
function draw(){
    tint(tint_color);
    image(video,0,0,400,400);
}
