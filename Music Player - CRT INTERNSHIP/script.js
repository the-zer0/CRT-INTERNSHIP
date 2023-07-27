const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const music = document.querySelector("audio");
const animate = document.querySelector("img");
let isplaying = false;
const songs = [{
    name: "1",
    title: "High On Life",
    artist: "Martin-Garrix",
},
{
    name: "2",
    title: "Animals",
    artist: "Martin-Garrix",
},
{
    name: "3",
    title: "Higher Grounds",
    artist: "Martin-Garrix",
},
];
const playMusic = () =>{
    isplaying = true;
    music.play();
    console.log("playing");
    play.classList.replace("fa-play", "fa-pause");
    animate.classList.add('anime');
};

const pauseMusic = () =>{
    isplaying = false;
    music.pause();
    console.log("paused");
    play.classList.replace("fa-pause", "fa-play");
    animate.classList.remove('anime');
};

play.addEventListener("click", () =>{
    isplaying ? pauseMusic() : playMusic();
});


const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    animate.src ="1.jpg";
};
songIndex = 0;
// loadSong(songs);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);