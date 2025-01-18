const data = [
    { id: 1, song: './assets/songs/badtameezdil.m4a', image: './assets/images/badtameezdil.jpeg', name:'Badtameez Dil', artist:'Benny Dayal and Shefali Alvares', genre:'rock' },
    { id: 2, song: './assets/songs/balampichkari.m4a', image: './assets/images/balam-pichkari.jpeg',name:'Balam Pichkari', artist:'Shalmali kholkade and Amitabh Bhattacharya', genre:'rock' },
    { id: 3, song: './assets/songs/beggin.m4a', image: './assets/images/beggin.jpeg',name:'Beggin', artist:'Maneskin', genre:'rock' },
    { id: 4, song: './assets/songs/cheapthrills.m4a', image: './assets/images/cheap-thrills.jpeg',name:'Cheap Thrills', artist:'Sia', genre:'pop' },
    { id: 5, song: './assets/songs/ghagra.m4a', image: './assets/images/ghagra.jpeg',name:'Ghagra', artist:'Rekha Bharadwaj', genre:'hip-hop' },
    { id: 6, song: './assets/songs/ilahi.m4a', image: './assets/images/ilahi.jpeg',name:'Illahi', artist:'Arjith sing', genre:'pop' },
    { id: 7, song: './assets/songs/popular.m4a', image: './assets/images/popular.jpeg',name:'Popular', artist:'Ariana Grande', genre:'pop' },
    { id: 8, song: './assets/songs/subhanallah.m4a', image: './assets/images/subanallah.jpeg',name:'Subhanallah', artist:'Sree ramachandra and Shilpa Rao', genre:'pop' },
    { id: 9, song: './assets/songs/unstoppable.m4a', image: './assets/images/unstoppable.jpeg',name:'Unstoppable', artist:'Sia', genre:'hip-hop' },
];

let currentSong = 1

function toggleTheme(){
    isChecked = document.getElementById("theme-toggle").checked
    document.body.style.backgroundColor = !isChecked?"darkslategrey":"white";
}

function showSongs(){
    const selectedGenre = document.getElementById('genre')
    const newDiv = document.getElementById("show-songs");
    newDiv.innerHTML = ""
    let songs
    if(selectedGenre.value=="all"){
        songs=data
    } else {
        songs = data.filter(item=>item.genre==selectedGenre.value)
    }
    
    for (const song of songs){
        const songCard = document.createElement("div")
        const songTitle = document.createElement("p")
        songTitle.textContent = `${song.name} - ${song.artist}`
        songTitle.classList.add("center")
        songCard.appendChild(songTitle)
        newDiv.appendChild(songCard)
        songCard.classList.add("song-card")
    }
}

function selectSong(selectedSong){
    const currentImage = document.getElementById('current-img');
    const currentSong = document.getElementById('audio-player')
    currentImage.src = data.find(item=>item.id==selectedSong).image
    currentSong.src = data.find(item=>item.id==selectedSong).song
    player.play()
}

function forward(){
    if(currentSong==data.length){
        currentSong=1
    } else {
        currentSong+=1
    }
    selectSong(currentSong)
}

function backward(){
    if(currentSong==1){
        currentSong=data.length
    } else {
        currentSong-=1
    }
    selectSong(currentSong)
}

showSongs()
selectSong(currentSong)