function setup(){
    canvas=createCanvas(550,450);
canvas.position(600,110);
Da_VARRIABLE=ml5.poseNet(video,modelLoaded)
      video = createCapture(VIDEO);
      video.size(550, 450); 
      Da_VARRIABLE.on("pose",gotPoses)   
}
function preload(){

}
function draw(){
background("aqua");
Text("this block is strechy",300,300);
}
function modelLoaded(){
console.log("DA MODEL IS LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}
function gotPoses(results){

if(results.length>0){
    console.log(results)
}
}