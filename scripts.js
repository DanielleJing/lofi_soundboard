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
        image: "heart1.svg"
    },
    "KeyY": {
        sound: "p_lofi_snare.wav", 
        image: "heart2.svg"
    },
    "KeyU": {
        sound: "p_lofi_snap.wav", 
        image: "heart3.svg"
    },
    "KeyI": {
        sound: "noise_chirp.wav", 
        image: "heart4.svg"
    },
    "KeyO": {
        sound: "noise_crackle.wav", 
        image: "heart5.svg"
    },
    "KeyP": {
        sound: "noise_rain.wav", 
        image: "heart6.svg"
    },
    "KeyZ": {
        sound: "m_bordeaux.wav", 
        image: "heart7.svg"
    },
    "KeyX": {
        sound: "m_deluxe_synth.wav", 
        image: "heart8.svg"
    },
    "KeyC": {
        sound: "m_etern_piano.wav", 
        image: "heart9.svg"
    },
    "KeyV": {
        sound: "m_etern_piano2.wav", 
        image: "heart10.svg"
    },
    "KeyB": {
        sound: "m_exp_1.wav", 
        image: "heart11.svg"
    },
    "KeyN": {
        sound: "m_exp_2.wav", 
        image: "heart12.svg"
    },
    "KeyM": {
        sound: "m_mountains.wav", 
        image: "heart13.svg"
    },
    "KeyH": {
        sound: "os_cartoon.wav", 
        image: "heart14.svg"
    },
    "KeyJ": {
        sound: "os_frozen.wav", 
        image: "heart15.svg"
    },
    "KeyK": {
        sound: "os_kalimba.wav", 
        image: "heart16.svg"
    },
    "KeyL": {
        sound: "os_subtle.wav", 
        image: "heart17.svg"
    },
    "KeyA": {
        sound: "g_deluxe_lofi.wav", 
        image: "heart18.svg"
    },
    "KeyS": {
        sound: "g_dreams.wav", 
        image: "heart19.svg"
    },
    "KeyD": {
        sound: "g_etern_elec.wav", 
        image: "heart20.svg"
    },
    "KeyF": {
        sound: "g_loop_1.wav", 
        image: "heart1.svg"
    },
    "KeyG": {
        sound: "g_loop_2.wav", 
        image: "wink.svg"
    },
};

const text = "This is my soundboard";
let i = 0;

function typeEffect() {
  const div = document.getElementById("typing-effect");
  if (i < text.length) {
    div.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

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

