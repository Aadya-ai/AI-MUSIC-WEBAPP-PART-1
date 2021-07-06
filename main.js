song_1 = "";
song_2 = "";

function preload() {
    song_1 = loadSound("OFFICIAL MUSIC VIDEO _ BABY DON’T WANT YOU _ Baby Queen _ Rimorav Vlogs presents RI Vlogs [YTmp3.net].mp3");
    song_2 = loadSound("OFFICIAL MUSIC VIDEO _ VAARI JAWAN _ Rimorav Vlogs [YTmp3.net].mp3")
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function AI_MUSIC() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-2/";
}

function Click_here() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-3/";
}
