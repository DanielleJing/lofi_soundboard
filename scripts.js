const mapping = {
    "KeyQ": {
        sound: "p_90s_clap.wav", 
        image: "evil1.svg"
    },
    "KeyW": {
        sound: "p_bourbon_kick.wav", 
        image: "evil2.svg"
    },
    "KeyE": {
        sound: "p_chrome_hihat.wav", 
        image: "evil3.svg"
    },
    "KeyR": {
        sound: "p_etern_hihat.wav", 
        image: "evil4.svg"
    },
    "KeyT": {
        sound: "p_open_hihat.wav", 
        image: "wink.svg"
    },
    "KeyY": {
        sound: "p_lofi_snare.wav", 
        image: "wink.svg"
    },
    "KeyU": {
        sound: "p_lofi_snap.wav", 
        image: "wink.svg"
    },
    "KeyI": {
        sound: "noise_chirp.wav", 
        image: "wink.svg"
    },
    "KeyO": {
        sound: "noise_crackle.wav", 
        image: "wink.svg"
    },
    "KeyP": {
        sound: "noise_rain.wav", 
        image: "wink.svg"
    },
    "KeyZ": {
        sound: "m_bordeaux.wav", 
        image: "wink.svg"
    },
    "KeyX": {
        sound: "m_deluxe_synth.wav", 
        image: "wink.svg"
    },
    "KeyC": {
        sound: "m_etern_piano.wav", 
        image: "wink.svg"
    },
    "KeyV": {
        sound: "m_etern_piano2.wav", 
        image: "wink.svg"
    },
    "KeyB": {
        sound: "m_exp_1.wav", 
        image: "wink.svg"
    },
    "KeyN": {
        sound: "m_exp_2.wav", 
        image: "wink.svg"
    },
    "KeyM": {
        sound: "m_mountains.wav", 
        image: "wink.svg"
    },
    "KeyH": {
        sound: "os_cartoon.wav", 
        image: "wink.svg"
    },
    "KeyJ": {
        sound: "os_frozen.wav", 
        image: "wink.svg"
    },
    "KeyK": {
        sound: "os_kalimba.wav", 
        image: "wink.svg"
    },
    "KeyL": {
        sound: "os_subtle.wav", 
        image: "wink.svg"
    },
};

var playable = new Audio()
document.addEventListener("keydown", function(e) {
    if(e.code in mapping) {
        console.log(e.code)
        let sound = mapping[e.code]["sound"];
        playable.src = ("./media/sounds/" + sound)
        playable.play();
        let seeable = "./media/images/" + mapping[e.code]["image"]
        document.querySelector("#heart").src = seeable;
        playable.onended = function() {
            document.querySelector("#heart").src = "";
        }

    }
});

