noseX=0;
noseY=0;


function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/bJ5d0GD0/PNGPIX-COM-Mustache-PNG-Image-4.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    clown_nose.x = noseX
    clown_nose.y = noseY

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('PoseNet Is Innitialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.y + 5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 80, 50);
}

function take_snapshot()
{
    save('myFilterImage.png');
}