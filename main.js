song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song_1 = loadSound("OFFICIAL MUSIC VIDEO _ BABY DON’T WANT YOU _ Baby Queen _ Rimorav Vlogs presents RI Vlogs [YTmp3.net].mp3");
    song_2 = loadSound("OFFICIAL MUSIC VIDEO _ VAARI JAWAN _ Rimorav Vlogs [YTmp3.net].mp3")
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song_1.play();
    song_1.setVolume();
    song_1.rate();
}

function AI_MUSIC() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-2/";
}

function Click_here() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-3/";
}
