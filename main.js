let player;


// VIDEO_ID: ["Album", "Song", "Date"]
const _PLAYLIST = {
  "iLXyoC2HRgY": ["Love Shake", "Love Shake", "September 22, 2014"],                                    //DC OFFICIAL
  "pBtQg3490l0": ["Love Shake", "Shut Up", "September 22, 2014"],                                       //DC OFFICIAL
  "zihoyz0u_cs": ["Nightmare", "Chase Me", "January 13, 2017"],                                         //DC OFFICIAL
  "5ST_EJBhwO4": ["Nightmare", "Emotion", "January 13, 2017"],                                          //DC OFFICIAL
  "Lxfl8LRab_I": ["Fall asleep in the mirror", "GOOD NIGHT", "April 5, 2017"],                          //DC OFFICIAL
  "rSq1URfEEC8": ["Fall asleep in the mirror", "Lullaby", "April 5, 2017"],                             //DC OFFICIAL
  "39yeTdIuKJU": ["Prequel", "Fly High", "July 27, 2017"],                                              //DC OFFICIAL
  "vuYQhvoYXIQ": ["Prequel", "Wake Up", "July 27, 2017"],                                               //DC OFFICIAL
  "41lCjS3Ymx8": ["Prequel", "Sleep walking", "July 27, 2017"],                                         //DC OFFICIAL
  "Ecc0N9VBXqM": ["Full Moon", "Full Moon", "January 12, 2018"],                                        //DC OFFICIAL
  "LFxjwBfFIiY": ["Escape the ERA", "YOU AND I", "May 10, 2018"],                                       //DC OFFICIAL
  "3iqEB5LlO2k": ["Escape the ERA", "Mayday", "May 10, 2018"],                                          //DC OFFICIAL
  "EhwX3y9Ty20": ["Escape the ERA", "Which a star", "May 10, 2018"],                                    //DC OFFICIAL
  "jmYCH6p7HPg": ["Escape the ERA", "Scar", "May 10, 2018"],                                            //DC OFFICIAL
  "pN0dkjp1deQ": ["Alone In The City", "What", "September 20, 2018"],                                   //DC OFFICIAL
  "iITO8xBvcHI": ["Alone In The City", "Wonderland", "September 20, 2018"],                             //DC OFFICIAL
  "H9AYF1Sl72Q": ["Alone In The City", "Trap", "September 20, 2018"],                                   //DC OFFICIAL
  "rFzVEYenJO4": ["Alone In The City", "July 7th", "September 20, 2018"],                               //DC OFFICIAL
  "3F2nRTyVPGo": ["Over the Sky", "Over the Sky", "January 16, 2019"],                                  //DC OFFICIAL
  "Pq_mbTSR-a0": ["The End of Nightmare", "PIRI", "Febuary 13, 2019"],                                  //DC OFFICIAL
  "YKntbwYuL7s": ["The End of Nightmare", "Diamond", "Febuary 13, 2019"],                               //DC OFFICIAL
  "NGRx-g-K-zg": ["The End of Nightmare", "And there was no one left", "Febuary 13, 2019"],             //DC OFFICIAL
  "mN5IwXQjPTs": ["The End of Nightmare", "Daydream", "Febuary 13, 2019"],                              //DC OFFICIAL
  "-GwP6BnZt1Y": ["The Beginning of the End", "What - Japanese. Ver.", "September 11, 2019"],           // JP
  "LPBIO2B6BEI": ["The Beginning of the End", "Chase Me - Japanese. Ver.", "September 11, 2019"],       //DC OFFICIAL
  "IWzCsl6dIao": ["The Beginning of the End", "I Miss You", "September 11, 2019"],                      //DC OFFICIAL
  "ZOsu__wtD30": ["The Beginning of the End", "PIRI - Japanese Ver.", "September 11, 2019"],            // JP
  "EDbvV8tLu5E": ["The Beginning of the End", "Good Night - Japanese Ver.", "September 11, 2019"],      //DC OFFICIAL
  "s6xu5S-MAOQ": ["The Beginning of the End", "Wonderland - Japanese Ver.", "September 11, 2019"],      //DC OFFICIAL
  "SHmOpFbFgrM": ["The Beginning of the End", "Breakout", "September 11, 2019"],                        // JP
  "hm1dYdDKS9M": ["The Beginning of the End", "My Way", "September 11, 2019"],                          //DC OFFICIAL
  "oxLfVoBOhaY": ["The Beginning of the End", "Mata Hitori ni Natta", "September 11, 2019"],            //DC OFFICIAL
  "6B4sh12t48w": ["The Beginning of the End", "You and I - Japanese Ver.", "September 11, 2019"],       //DC OFFICIAL
  "W761DtH1oRg": ["Raid of Dream", "Deja Vu", "September 18, 2019"],                                    //DC OFFICIAL
  "tsdHLWP1rV8": ["Raid of Dream", "The curse of the Spider", "September 18, 2019"],                    //DC OFFICIAL
  "lxn7QeEWkUk": ["Raid of Dream", "Silent Night", "September 18, 2019"],                               //DC OFFICIAL
  "9xAtEL_1IoA": ["Raid of Dream", "Polaris", "September 18, 2019"],                                    //DC OFFICIAL
  "FKlGHHhTOsQ": ["Dystopia: The Tree of Language", "Scream", "February 18, 2020"],                     //DC OFFICIAL
  "pXzRb-5L9aw": ["Dystopia: The Tree of Language", "Tension", "February 18, 2020"],                    //DC OFFICIAL
  "RKBJVdjOHUY": ["Dystopia: The Tree of Language", "Red Sun", "February 18, 2020"],                    //DC OFFICIAL
  "-QAJjjOvaF8": ["Dystopia: The Tree of Language", "Black Or White", "February 18, 2020"],             //DC OFFICIAL
  "V4m11THQv9I": ["Dystopia: The Tree of Language", "Jazz Bar", "February 18, 2020"],                   //DC OFFICIAL
  "BgLhbkKu1s4": ["Dystopia: The Tree of Language", "SAHARA", "February 18, 2020"],                     //DC OFFICIAL
  "GK9d465bJe8": ["Dystopia: The Tree of Language", "In The Frozen", "February 18, 2020"],              //DC OFFICIAL
  "LoLNM9Q3xtE": ["Dystopia: The Tree of Language", "Daybreak", "February 18, 2020"],                   //DC OFFICIAL
  "wCALuFy2YVI": ["Japanese Single - Endless Night", "Endless Night", "March 11, 2020"],                // JP
  "Om4xNQhHI6k": ["Japanese Single - Endless Night", "Over the Sky - Japanese Ver.", "March 11, 2020"], //DC OFFICIAL
  "aH6VcimxcuI": ["Japanese Single - Endless Night", "Silent Night - Japanese Ver.", "March 11, 2020"], //DC OFFICIAL
  "MZ4JGye4dQU": ["Dystopia : Lose Myself", "BOCA", "August 17, 2020"],                                 //DC OFFICIAL
  "TqcPjwKU_zc": ["Dystopia : Lose Myself", "Break The Wall", "August 17, 2020"],                       //DC OFFICIAL
  "ckMdebvhKyg": ["Dystopia : Lose Myself", "Can’t get you out of my mind", "August 17, 2020"],         //DC OFFICIAL
  "PFLs3_euguY": ["Dystopia : Lose Myself", "Dear", "August 17, 2020"],                                 //DC OFFICIAL
  "1QD0FeZyDtQ": ["Dystopia : Road to Utopia", "Odd Eye", "January 26, 2021"],                          //DC OFFICIAL
  "t6FnECoSlrQ": ["Dystopia : Road to Utopia", "Wind Blows", "January 26, 2021"],                       //GENIE
  "wKXjvh-wYKY": ["Dystopia : Road to Utopia", "Poison Love", "January 26, 2021"],                      //DC OFFICIAL
  "MDEt3qs5lNc": ["Dystopia : Road to Utopia", "4 Memory", "January 26, 2021"],                         //DC OFFICIAL
  "dhbiIYS08lI": ["Dystopia : Road to Utopia", "New Days", "January 26, 2021"],                         //DC OFFICIAL
  "b9UxVkTfkVg": ["Japanese Single - Eclipse", "Eclipse", "March 24, 2021"],                            //DC OFFICIAL
  "HanFwe41w9s": ["Japanese Single - Eclipse", "No More", "March 24, 2021"],                            // JP
  "_r2LYookCz8": ["Japanese Single - Eclipse", "Don't Light My Fire", "March 24, 2021"],                //DC OFFICIAL
  "PEKkdIT8JPM": ["Summer Holiday", "BEcause", "July 30, 2021"],                                        //DC OFFICIAL
  "-dP-GPp6jFg": ["Summer Holiday", "Airplane", "July 30, 2021"],                                       //DC OFFICIAL
  "Mhn-vzU1Hd4": ["Summer Holiday", "Whistle", "July 30, 2021"],                                        //DC OFFICIAL
  "h-xwPPWnAPE": ["Summer Holiday", "Alldaylong", "July 30, 2021"],                                     //DC OFFICIAL
  "MxpRGl737cU": ["Summer Holiday", "A Heart of Sunflower", "July 30, 2021"],                           //DC OFFICIAL
  "Noc8Ba1IKFc": ["Apocalypse : Save Us", "Locked Inside A Door", "April 12, 2022"],                    //DC OFFICIAL
  "z4t9LLq1Nk0": ["Apocalypse : Save Us", "Maison", "April 12, 2022"],                                  //DC OFFICIAL
  "DcUQp2Cf_04": ["Apocalypse : Save Us", "Starlight", "April 12, 2022"],                               //DC OFFICIAL
  "yL9xPI2yx5g": ["Apocalypse : Save Us", "Together", "April 12, 2022"],                                //DC OFFICIAL
  "2L0q-nWS1xA": ["Apocalypse : Save Us", "Cherry", "April 12, 2022"],                                  //DC OFFICIAL
  "oxPyRRKEtHI": ["Apocalypse : Save Us", "No Dot", "April 12, 2022"],                                  //DC OFFICIAL
  "CowRTDlxbWg": ["Apocalypse : Save Us", "Entrancing", "April 12, 2022"],                              //DC OFFICIAL
  "jQ_ogJWssXU": ["Apocalypse : Save Us", "Winter", "April 12, 2022"],                                  //DC OFFICIAL
  "1HwjxbE7_Qw": ["Apocalypse : Save Us", "For", "April 12, 2022"],                                     //DC OFFICIAL
  "nivI7w9HagI": ["Apocalypse : Save Us", "Beauty Full", "April 12, 2022"],                             //DC OFFICIAL
  "iYvErpLnQ-8": ["Apocalypse : Save Us", "Playground", "April 12, 2022"],                              //DC OFFICIAL
  "jKrJBVLnRiM": ["Apocalypse : Follow  Us", "Vision", "October 11, 2022"],                             //DC OFFICIAL
  "1EVbRMmxPfg": ["Apocalypse : Follow  Us", "Fairytale", "October 11, 2022"],                          //DC OFFICIAL
  "jIyBiNSwUJo": ["Apocalypse : Follow  Us", "Some Love", "October 11, 2022"],                          //DC OFFICIAL
  "4dvDcXsqBAM": ["Apocalypse : Follow  Us", "Rainy Day", "October 11, 2022"],                          //DC OFFICIAL
  "G3fUZUh1LBs": ["Reason", "Reason", "January 13, 2023"],                                              //DC OFFICIAL
  "RPNaYj6etb8": ["Apocalypse : From us", "BONVOYAGE", "May 24, 2023"],                                 //DC OFFICIAL
  "iCH2rI7z_M0": ["Apocalypse : From us", "DEMIAN", "May 24, 2023"],                                    //DC OFFICIAL
  "KzqwSxhBf9Y": ["Apocalypse : From us", "Propose", "May 24, 2023"],                                   //DC OFFICIAL
  "ttK_mfVmsWE": ["Apocalypse : From us", "To. Yo", "May 24, 2023"],                                    //DC OFFICIAL
  "5sE36Kv2miM": ["VillainS", "OOTD", "November 22, 2023"],                                             //DC OFFICIAL
  "Fbmcb11fh0w": ["VillainS", "Rising", "November 22, 2023"],                                           //DC OFFICIAL
  "SecHjKKYCRk": ["VillainS", "Shatter", "November 22, 2023"],                                          //DC OFFICIAL
  "jsEzGTVx_qg": ["VillainS", "We Are Young", "November 22, 2023"],                                     //DC OFFICIAL
  SONG: '',
  ALBUM: '',
  RELEASE: '',
  GAMEOVER: false,
  // Function to get the next song
  GETSONG: function () {
  if (!this.SONGORDER) {
    // Initialize SONGORDER array with keys
    this.SONGORDER = Object.keys(this).filter(
      key =>
        this.hasOwnProperty(key) &&
        Array.isArray(this[key]) &&
        this[key].length === 3
    );

    // Fisher-Yates (Knuth) shuffle for randomizing the array
    for (let i = this.SONGORDER.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.SONGORDER[i], this.SONGORDER[j]] = [this.SONGORDER[j], this.SONGORDER[i]];
    }
  }

  // Get the next song from the shuffled order
  const NEXTSONGKEY = this.SONGORDER.pop();

  // Log the progress
  const SONGSPLAYED = this.SONGSCOUNT() - this.SONGORDER.length;
  const REMAININGSONGS = this.SONGORDER.length;

  this.ALBUM = this[NEXTSONGKEY][0];
  this.SONG = this[NEXTSONGKEY][1];
  this.RELEASE = this[NEXTSONGKEY][2];

  // If all songs have been played, reset the order
  if (this.SONGORDER.length <= 0) {
    this.SONGORDER = null;

    
    //_BUTTONS.SKIP.style.visibility = "hidden";
    this.GAMEOVER = true;
  }
  //console.log(`${this.SONGORDER.length} songs remaining`);

  return NEXTSONGKEY;
  },
  // Count the length of songs in the playlist
  SONGSCOUNT: function() {
    let SONGCOUNT = 0;

    for (const key in this) {
      // Check if the key is a valid song entry
      if (this.hasOwnProperty(key) && Array.isArray(this[key]) && this[key].length === 3) {
        SONGCOUNT++;
      }
    }

    return SONGCOUNT;
  },
  // Reset all values
  RESET: function() {
    this.SONG = '';
    this.ALBUM = '';
    this.RELEASE = '';
    this.SONGORDER = null;
  },
}

// Member specific profiles
const _DC = {
  SELECTED_SRC: '',
  SELECTED_LIELEMENTSCOLOR: '',
  SELECTED_OVERLAYCOLOR: '',
  MEMBERS: {
    JIU: {
      SRC: `./content/jiu.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #BE3144 50%, #BE3144 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(50, 0, 0, 0.3)',
    },
    SUA: {
      SRC: `./content/sua.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #000 50%, #000 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(0, 0, 0, 0.3)',
    },
    SIYEON: {
      SRC: `./content/siyeon.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #000 50%, #000 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(0, 0, 0, 0.4)',
    },
    HANDONG: {
      SRC: `./content/handong.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #000 50%, #000 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(128, 128, 128, 0.5)',
    },
    YOOHYEON: {
      SRC: `./content/yoohyeon.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #000 50%, #000 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(128, 128, 128, 0.5)',
    },
    DAMI: {
      SRC: `./content/dami.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #000 50%, #000 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(0, 0, 0, 0.4)',
    },
    GAHYEON: {
      SRC: `./content/gahyeon.mp4`,
      LIELEMENTSCOLOR: 'linear-gradient(to right, transparent 0%, transparent 15%, #BE3144 50%, #BE3144 50%, transparent 85%)',
      OVERLAYCOLOR: 'rgba(50, 0, 0, 0.3)',
    },
  },
}

// Object used for state handling
const _STATE = {
  START: false,
  PLAYING: false,
  // Reset all values
  RESET: function() {
    this.START = false;
    this.PLAYING = false;
  },
}

// Object for player interactions
const _PLAYERINTERACTION = {
  SCORE: 0,
  SKIPCOUNT: 0,
  TIMECOUNT: 0,
  ADDTIME: 0,
  MAXIMUMALLOWEDTRIES: 5,
  GUESSEDSONGSCOUNT: 0,
  GUESSEDSONGSCLICKS: 0,
  INPUT: document.getElementById("myInput"),
  INCREMENTCOUNT: function(TARGET) {
    if (TARGET === 'SCORE') {
      this.SCORE++;
    }
    if (TARGET === 'SKIPCOUNT') {
      this.SKIPCOUNT++;
    }
    if (TARGET === 'TIMECOUNT') {
      this.TIMECOUNT++;
    }
    if (TARGET === 'ADDTIME') {
      this.ADDTIME++;
    }
    if (TARGET === 'GUESSEDSONGSCOUNT') {
      this.GUESSEDSONGSCOUNT++;
    }
    if (TARGET === 'GUESSEDSONGSCLICKS') {
      this.GUESSEDSONGSCLICKS++;
    }
  },
  // Reset all values
  RESET: function() {
    this.SCORE = 0;
    this.SKIPCOUNT = 0;
    this.TIMECOUNT = 0;
    this.ADDTIME = 0;
    this.MAXIMUMALLOWEDTRIES = 5;
    this.GUESSEDSONGSCOUNT = 0;
    this.GUESSEDSONGSCLICKS = 0;
  },
}

// Object containing parameters for Youtube
const _YOUTUBEPARAMETERS = {
  VID: '',
  TIMESTART: 0,
  TIMESTARTINSECONDS: 0,
  TIMEEND: 0,
  TIMEENDINSECONDS: 0,
  // Reset all values
  RESET: function() {
    this.VID = '';
    this.TIMESTART = 0;
    this.TIMESTARTINSECONDS = 0;
    this.TIMEEND = 0;
    this.TIMEENDINSECONDS = 0;
  },
}

// Object contains button elements
const _BUTTONS = {
	GROUP: document.getElementById("buttonGroup"),
	TIME: document.getElementById("timeButton"),
	PLAY: document.getElementById("playButton"),
	SKIP: document.getElementById("skipButton"),
	// DISPLAY: function(q) {
	// 	this.GROUP.style.display = q ? 'flex' : 'none';
	// },
}


const _PAGE = {
	BODY: document.getElementById("mainBody"),
	CONTAINER: document.getElementById("idContainer"),
	DROPDOWN: document.getElementById("contentList"),
	INPUT: document.getElementById("inputField"),
	CLEARICON: document.getElementById("clearIcon"),
	VIDEOELM: document.getElementById("videoElement"),
	VIDEOSRC: document.getElementById("videoSource"),
  OVERLAY: document.getElementById("overlay"),
  ALERT: document.getElementById("sec-a7ac"),
  ALERTXT: document.getElementById("alertText"),
	RESET: function() {
		this.INPUT.value = '';
	},
	DISPLAY: function(q) {
    this.OVERLAY.style.display = q ? 'block' : 'none';
	}
}

const _MODAL = {
  HEAD: document.getElementById("modalHead"),
  TEXT: document.getElementById("modalText"),
  BUTTON: document.getElementById("modalButton"),
}

// Select member theme
function GETRANDOMMEMBER() {
  const membersArray = Object.keys(_DC.MEMBERS);
  const randomIndex = Math.floor(Math.random() * membersArray.length);
  const randomMemberKey = membersArray[randomIndex];
  const randomMember = _DC.MEMBERS[randomMemberKey];
    
  // Log or use the selected member as needed
  //console.log('Selected Member:', randomMemberKey);

  return randomMember;
}

// Update theme for specific DC member
function UPDATETHEME(_member) {
  _DC.SELECTED_SRC = _member.SRC;
  _DC.SELECTED_LIELEMENTSCOLOR = _member.LIELEMENTSCOLOR;
  _DC.SELECTED_OVERLAYCOLOR = _member.OVERLAYCOLOR;

  // Load Theme
  LOADTHEME();
}

// Load theme
function LOADTHEME() {
  // Update video source
  _PAGE.VIDEOSRC.src = _DC.SELECTED_SRC;
  _PAGE.VIDEOELM.load();

  // Update Dropdown elements background color
  _PAGE.DROPDOWN.style.background = _DC.SELECTED_LIELEMENTSCOLOR;

  // Update Overlay color
  _PAGE.OVERLAY.style.background = _DC.SELECTED_OVERLAYCOLOR;
}

// Reset all values and elements to their default state
function RESETALL() {
  _PLAYLIST.GAMEOVER = false;
  SHOWUI(true);
  _PAGE.RESET();
  _YOUTUBEPARAMETERS.RESET();
  _PLAYERINTERACTION.RESET();
  _STATE.RESET();
  _PLAYLIST.RESET();
  //REMOVEELEMENT(_PAGE.VIDEOELM);
}

// End game finish modal
function STARTGAMEMODAL() {
  SHOWUI(false);
  //LOADVIDEOELEMENT("", true);
  UPDATETHEME(GETRANDOMMEMBER());
  _PAGE.RESET();
  DATALOADER(_PAGE.DROPDOWN, 1);

  _MODAL.HEAD.innerHTML = `
  HOW TO PLAY
  `;
  _MODAL.TEXT.innerHTML = `
  TIME button add an extra second<br>
  PLAY button allows you to start<br>
  SKIP button allows you to skip songs that you don't know<br>
  PAUSE button will pause the song<br>
  NEXT button will play the next song<br>
  <br>
  <br>
  You get 5 tries overall to guess all songs<br>
  if you exceed those tries<br>
  Dreamcatcher won't spare you!
  <br>
  <br>
  Good luck<br>
  `;
  _MODAL.BUTTON.textContent = "Begin";
}

// End game finish modal
function ENDGAMEMODAL() {
  _MODAL.HEAD.innerHTML = `
  YOU COMPLETED THE GAME
  `;
  _MODAL.TEXT.innerHTML = `
  <br>
  <br>
  FINAL SCORE: ${_PLAYERINTERACTION.SCORE}<br>
  SKIPS: ${_PLAYERINTERACTION.SKIPCOUNT}<br>
  `;
  _MODAL.BUTTON.textContent = "Play again";
}

// Game over finish modal
function GAMEOVERMODAL() {
  _MODAL.HEAD.innerHTML = `
  GAME OVER
  `;
  _MODAL.TEXT.innerHTML = `
  <br>
  <br>
  FINAL SCORE: ${_PLAYERINTERACTION.SCORE}<br>
  SKIPS: ${_PLAYERINTERACTION.SKIPCOUNT}<br>
  `;
  _MODAL.BUTTON.textContent = "Try again";
}

// Display or Hide UI elements on page
function SHOWUI(_q) {
  //_BUTTONS.DISPLAY(_q);
  _PAGE.DISPLAY(_q);
}

// Change the background video source and load it
function NEXTBACKGROUND(_src) {
  _PAGE.VIDEOSRC.src = `./content/${_src}`;
  _PAGE.VIDEOELM.load();
}

// Set the selected li element text to input's value
function SECTIONHANDLER(e) {
  console.log(_PLAYERINTERACTION.MAXIMUMALLOWEDTRIES);
  if (_PLAYERINTERACTION.MAXIMUMALLOWEDTRIES < 0) {
    _PLAYLIST.GAMEOVER = true;
    SHOWUI(false);
    //REMOVEELEMENT(_PAGE.VIDEOELM);
    //LOADVIDEOELEMENT("gameover.mp4", false);
    // Update video source
    _BUTTONS.PLAY.style.visibility = "hidden";
    _BUTTONS.SKIP.style.visibility = "hidden";
    _BUTTONS.TIME.style.visibility = "hidden";
    _PAGE.INPUT.style.visibility = "hidden";
    //_PAGE.VIDEOSRC.src = "./content/gameover.mp4";
    _PAGE.VIDEOELM.removeAttribute("loop");
    //_PAGE.VIDEOELM.load();
    NEXTBACKGROUND("gameover.mp4");
    GAMEOVERMODAL();
    setTimeout(() => { document.getElementById("sec-3b12").style.display = "block"; }, 7000)
  } else {
    if (e.target.tagName === "LI") {
      // Set the input value to the selected li elements value
      _PAGE.INPUT.value = e.target.textContent;
      // If selected li element value equals the Picked SONG, +++, else ---
      if (e.target.textContent === _PLAYLIST.SONG) {
        console.log('Correct song selected!');
        _PAGE.INPUT.style.backgroundColor = "green";
        setTimeout(() => { _PAGE.INPUT.style.backgroundColor = "white"; }, 1000)

        // Song guessed correctly, add to score
        _PLAYERINTERACTION.INCREMENTCOUNT("SCORE");

        // Adjust the endtime so that when the song is guessed correctly, it will play it for 30 seconds before it ends
        youTubePlayerChangeVideoId(videoId, _YOUTUBEPARAMETERS.TIMESTARTINSECONDS, (_YOUTUBEPARAMETERS.TIMESTARTINSECONDS + 30));
        setTimeout(() => { playVideo(); }, 500);

        // If the gameover boolean is not true set the SKIP button's text to NEXT, else, initiate end game UI
        if (!_PLAYLIST.GAMEOVER) {
          _BUTTONS.SKIP.textContent = "NEXT";
        } else {
          _BUTTONS.SKIP.style.visibility = "visible";
          _BUTTONS.SKIP.textContent = "RESULTS";
          _BUTTONS.TIME.style.visibility = "hidden";
        }

      } else {
        console.log('Incorrect song selected.');

        _PAGE.INPUT.style.backgroundColor = "red";
        setTimeout(() => { _PAGE.INPUT.style.backgroundColor = "white"; }, 1000)

        // Song guessed incorrectly, decrease the allowed attempts value
        _PLAYERINTERACTION.MAXIMUMALLOWEDTRIES--;
      }
      LIELEMENTSRESET(_PAGE.DROPDOWN);
      RESETDROPDOWN(e);
    }
  }
}

// If user clicks on the input element make the dropdown elements visible
function INPUTHANDLER(e) {
	if (e.target.tagName === "INPUT" && _BUTTONS.SKIP.textContent !== "NEXT") {
		_PAGE.DROPDOWN.style.display = "block";
		_PAGE.DROPDOWN.scrollTop = 0;
	}
}

// Make the dropdown li elements hidden when user clicks anywhere
function RESETDROPDOWN(e) {
	if (e.target.tagName !== "INPUT") {
		if (_PAGE.INPUT.value === "") {
			LIELEMENTSRESET(_PAGE.DROPDOWN);
		}
		//console.log('resetdropdown');
		_PAGE.CLEARICON.style.display = _PAGE.INPUT.value ? 'grid' : 'none';
		_PAGE.DROPDOWN.style.display = "none";
	}
}

function BUTTONSHANDLER(e) {
  console.log(e.target.textContent);
	switch(e.target.textContent) {
		case "TIME":
			console.log("Time button clicked");
      if (_PLAYERINTERACTION.TIMECOUNT < 5) {
        _PLAYERINTERACTION.INCREMENTCOUNT("TIMECOUNT");
        TIMEHANDLER();
      } else {
        console.log("You can't add more time");
      }
			break;
		case "PLAY":
			console.log("Play button clicked");
      _BUTTONS.SKIP.style.visibility = "visible";
      _BUTTONS.TIME.style.visibility = "visible";
			playVideo();
			break;
    case "PAUSE":
      console.log("Pause button clicked");
      pauseVideo();
      //ANIMATEWAVESTOP();
      break;
		case "SKIP":
			console.log("Skip button clicked");
			_PLAYERINTERACTION.INCREMENTCOUNT("SKIPCOUNT");
      if (_PLAYLIST.GAMEOVER) {
        _BUTTONS.SKIP.textContent = "RESULTS";
        _BUTTONS.TIME.style.visibility = 'hidden';
      } else {
        UPDATETHEME(GETRANDOMMEMBER());
  			NEXTSONG();
      }
			break;
		case "NEXT":
			// Reset the button textContent to SKIP
			_BUTTONS.SKIP.textContent = "SKIP";
      UPDATETHEME(GETRANDOMMEMBER());
			NEXTSONG();
			break;
    case "RESULTS":
      console.log("Ready for results. All songs played");
      ENDGAMEMODAL();
      SHOWUI(false);
      //ENDGAMEMODAL();
      document.getElementById("sec-3b12").style.display = "block";
      //openModal();
	}
}

function NEXTSONG() {
	clearInput();
  _PLAYERINTERACTION.TIMECOUNT = 0;

	// Retrieve new song from the playlist
	INITIATESONG();

	// Update videoId
	videoId = YouTubeGetID("https://www.youtube.com/watch?v=" + _YOUTUBEPARAMETERS.VID);
	// Update youtube player video parameters to reflect the new VID
	PLAYERUPDATE();
	// Play new video
	setTimeout(() => { playVideo(); }, 200);
}

// Handling Time button's action
function TIMEHANDLER () {

	console.log(_YOUTUBEPARAMETERS.TIMEEND);
    
  // Extracting minutes and seconds from _YOUTUBEPARAMETERS.TIMEEND
	const [minutes, seconds] = _YOUTUBEPARAMETERS.TIMEEND.split(':').map(Number);

	// Calculating total seconds
	const totalSeconds = minutes * 60 + seconds;

	// Adding 1 second
	const updatedTotalSeconds = totalSeconds + 1;

	// Calculating updated minutes and seconds
	const updatedMinutes = Math.floor(updatedTotalSeconds / 60);
	const updatedSeconds = updatedTotalSeconds % 60;

	// Formatting the updated time
	const updatedTime = `${updatedMinutes.toString().padStart(2, '0')}:${updatedSeconds.toString().padStart(2, '0')}`;

	// Updating _YOUTUBEPARAMETERS.TIMEEND with the new time
	_YOUTUBEPARAMETERS.TIMEEND = updatedTime;


    //_YOUTUBEPARAMETERS.TIMEEND = TIMESTRING;
    _YOUTUBEPARAMETERS.TIMEENDINSECONDS = TIMEINSECONDS(_YOUTUBEPARAMETERS.TIMEEND);
    console.log(_YOUTUBEPARAMETERS.TIMEEND, updatedTime);

    PLAYERUPDATE();
    setTimeout(() => { playVideo(); }, 500);
}

// Load data from _PLAYLIST
function DATALOADER(_elem, _idx) {
  // Create an empty array to hold the <li> elements
  let liArray = [];
  // Create an empty object to track the values already added
  let addedValues = {};
  // Loop through each key in the object
  for (let KEY in _PLAYLIST) {
    // Check if the key is valid and the corresponding array has the specified index
    if (_PLAYLIST.hasOwnProperty(KEY) && Array.isArray(_PLAYLIST[KEY]) && _PLAYLIST[KEY].length > _idx) {
      // Concatenate the two values using the array syntax
      let VALUE = _PLAYLIST[KEY][_idx];
      // Check if the value has already been added
      if (!addedValues[VALUE]) {
        // If the value hasn't been added, create a new <li> element
        const li = document.createElement("li");
        // Set the innerHTML of the <li> element to the concatenated values
        li.innerHTML = VALUE;
        // Add the <li> element to the array
        liArray.push(li);
        // Set the value as added in the addedValues object
        addedValues[VALUE] = true;
      }
    }
  }

  // Append the <li> elements to the specified element (ELEMENT)
  liArray.forEach(li => {
    _elem.appendChild(li);
  });
}

// Filtering song list based on user's input
function FILTERLIST() {
  let FILTER = _PAGE.INPUT.value.toLowerCase();
  
  // Get the list and all list items
  let ITEMS = _PAGE.DROPDOWN.getElementsByTagName("li");
  
  // Loop through all list ITEMS, and hide those that don't match the search query
  for (let i = 0; i < ITEMS.length; i++) {
    let ITEM = ITEMS[i];
    if (ITEM.innerHTML.toLowerCase().indexOf(FILTER) > -1) {
      ITEM.style.display = "";
    } else {
      ITEM.style.display = "none";
    }
  }
}

// Reset elements display property
function LIELEMENTSRESET(ulElem) {
  // Get all of the li elements inside the ul element
  const liElements = ulElem.getElementsByTagName("li");

  // Loop through all of the li elements and set their display property to "list-item"
  for (let i = 0; i < liElements.length; i++) {
    if (liElements[i].style.display === "none") {
      liElements[i].style.display = "list-item";
    }
  }
}

// Randomly select a song from _PLAYLIST
function INITIATESONG() {
  // Update youtube video id
  _YOUTUBEPARAMETERS.VID = _PLAYLIST.GETSONG();

  // Call TIMEFRAME function to format the timeframe to minutes:seconds
  TIMEFRAME();
}

// Update video on screen with new ID, Start time, and End time
function PLAYERUPDATE() {
  youTubePlayerChangeVideoId(_YOUTUBEPARAMETERS.VID, minutesToSeconds(_YOUTUBEPARAMETERS.TIMESTART), minutesToSeconds(_YOUTUBEPARAMETERS.TIMEEND));
}

// Format timeframe in minutes:seconds
function TIMEFRAME() {
  // Get a random number of seconds between 25 and 150 (2 minutes and 30 seconds)
  let NUM1 = Math.floor(Math.random() * (150 - 25 + 1) + 25);
  let NUM2 = NUM1 + 1;

  // Convert the random number of seconds to Date objects
  let STARTCONVERTER = new Date(NUM1 * 1000);
  let ENDCONVERTER = new Date(NUM2 * 1000);

  // Format the times as x:xx
  _YOUTUBEPARAMETERS.TIMESTART = STARTCONVERTER.toISOString().substr(14, 5);
  _YOUTUBEPARAMETERS.TIMESTARTINSECONDS = _YOUTUBEPARAMETERS.TIMESTART.split(':').reduce((acc, val) => acc * 60 + parseInt(val, 10), 0);
  _YOUTUBEPARAMETERS.TIMEEND = ENDCONVERTER.toISOString().substr(14, 5);
  _YOUTUBEPARAMETERS.TIMEENDINSECONDS = _YOUTUBEPARAMETERS.TIMEEND.split(':').reduce((acc, val) => acc * 60 + parseInt(val, 10), 0);
}

// Return time in seconds from x:x format
function TIMEINSECONDS(TIME) {
  return TIME.split(':').reduce((acc, val) => acc * 60 + parseInt(val, 10), 0);
}

// Start game with Intro Modal
STARTGAMEMODAL();
_BUTTONS.SKIP.style.visibility = "hidden";
_BUTTONS.TIME.style.visibility = "hidden";
//openModal();

// Add Event Listener for page elements
_PAGE.DROPDOWN.addEventListener("click", function(e) { SECTIONHANDLER(e) });
_PAGE.INPUT.addEventListener("click", function(e) { INPUTHANDLER(e) });
_PAGE.BODY.addEventListener("click", function(e) { RESETDROPDOWN(e) });

// Add Event Listener for buttons
_BUTTONS.TIME.addEventListener("click", function(e) { RESETDROPDOWN(e) });
_BUTTONS.PLAY.addEventListener("click", function(e) { RESETDROPDOWN(e) });
_BUTTONS.SKIP.addEventListener("click", function(e) { RESETDROPDOWN(e) });
_BUTTONS.GROUP.addEventListener("click", function(e) { BUTTONSHANDLER(e) });

/* Functions related to Youtube API
**
**
**/

// Set Youtube start time
function youTubePlayerCurrentTimeChange(currentTime) {
  player.currentTimeSliding = false;
  player.seekTo(currentTime*player.getDuration()/100, true);  
}

// Change volume for Youtube Player
function youTubePlayerVolumeChange(volume) {
  player.setVolume(volume);
}

function youTubePlayerCurrentTimeSlide() {
  player.currentTimeSliding = true;
}

// Pause Youtube Player
function pauseVideo() {
  player.pauseVideo();
}

// Play Player
function playVideoAgain() {
  player.playVideo();
}

// Play Youtube Player***
function playVideo() {
	if (!_STATE.PLAYING && typeof player.cueVideoById === 'function') {
		_STATE.PLAYING = true;
		INITIATESONG();
	    videoId = YouTubeGetID("https://www.youtube.com/watch?v="+_YOUTUBEPARAMETERS.VID);
	    youTubePlayerChangeVideoId(videoId, minutesToSeconds(_YOUTUBEPARAMETERS.TIMESTART), minutesToSeconds(_YOUTUBEPARAMETERS.TIMEEND));
	}

  // Make sure that the video is ready to be played before executing playVideo() and seekTo() functions
  if (typeof player.cueVideoById === 'function') {
    setTimeout(() => { player.playVideo(); }, 500);
    player.seekTo(_YOUTUBEPARAMETERS.TIMESTARTINSECONDS);
  }
}

function YouTubeGetID(url) {
  let ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
}

// Change Youtube Video
function youTubePlayerChangeVideoId(videoId, starttime, endtime) {
  player.cueVideoById({ suggestedQuality: "small", videoId: videoId, startSeconds: starttime, endSeconds: endtime });
  pauseVideo();
}

// Create new Youtube Player object
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: 270,
    width: 480,
    videoId: "",
    playerVars: {
      playsinline: 1,
      autoplay: 1,
      controls: 0,
    },
    events: {
      'onReady': function (event) {
        event.target.setVolume(40);
        onPlayerReady;
      },
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError,
    },
  });
}

// Player Error
function onPlayerError() {
}

// Player On Ready
function onPlayerReady() {
}

let done = false;
function onPlayerStateChange(event) {
  PLAYBACKSTATE(event.data);
}

function PLAYBACKSTATE(playerStatus) {
  if (playerStatus == -1) {
  	// unstarted
  	console.log('unstarted');
  } else if (playerStatus == 0) {
    _BUTTONS.PLAY.textContent = "PLAY";
    // ended
    console.log('ended');
  } else if (playerStatus == 1) {
  // playing
  	console.log('playing');
    _BUTTONS.PLAY.textContent = "PAUSE";
  } else if (playerStatus == 2) {
    // paused
    console.log('paused');
    _BUTTONS.PLAY.textContent = "PLAY";
  } else if (playerStatus == 3) {
    // buffering
    console.log('buffering');
  } else if (playerStatus == 5) {
    // video cued
    console.log('video cued');
  }
}

// Convert minutes to seconds
function minutesToSeconds(mins) {
/**
* ~~ mins param must be a str in "1:00" format ~~
* Converts time in xx:xx format to seconds
*/
	let p = mins.split(":");
    return Number((Number(p[0]) * 60 + Number(p[1])).toFixed(3));
}


// Show/hide clear icon based on input value
_PAGE.INPUT.addEventListener('input', function() {
    _PAGE.CLEARICON.style.display = _PAGE.INPUT.value ? 'grid' : 'none';
});

// Clear input field when the 'x' icon is clicked
function clearInput() {
    _PAGE.INPUT.value = '';
    _PAGE.CLEARICON.style.display = 'none';
    LIELEMENTSRESET(_PAGE.DROPDOWN);
}

// Remove any element by id
function REMOVEELEMENT(elementId) {

  if (videoElement && videoElement.parentNode) {
    // Check if the video element and its parent exist
    var parentElement = videoElement.parentNode;
    parentElement.removeChild(videoElement);
  } else {
    console.error('Video element with ID ' + videoId + ' not found or has no parent.');
  }
}
