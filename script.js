// Global constants
//const clueHoldTime = 1000;  //how long to hold each clue's light/sound || Part of tutorial
const cluePauseTime = 200;  //how long to pause in between clues
const nextClueWaitTime = 1000;  //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern;          
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var min = 1;
var max = 6;
var mistakes = 3;
var myVar;
var secondTime = 60;

// Displaying the timer
document.getElementById("timer").innerHTML = "Timer: " + secondTime + " seconds";
document.getElementById("lives").innerHTML = mistakes + " lives";
// function that starts the game
function startGame(){
  
  // Call the function to start timer
  startTimer(); 
  
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // Call the function to create a random number between 1 and 6 inclusive for variables 1-6
  var p1 = getRandomIntInclusive(min,max);
  var p2 = getRandomIntInclusive(min,max);
  var p3 = getRandomIntInclusive(min,max);
  var p4 = getRandomIntInclusive(min,max);
  var p5 = getRandomIntInclusive(min,max);
  var p6 = getRandomIntInclusive(min,max);
  pattern = [p1,p2,p3,p4,p5,p6];
  
  // Setting mistakes
  //mistakes = 3;
  
  playClueSequence();
  
}

// Function that stops the Game and changes the start/stop button
function stopGame(){
  stopTestTime();
  gamePlaying = false;
  mistakes = 3;    // Resetting the lives
  document.getElementById("lives").innerHTML = mistakes + " lives";  // Displaying the lives
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions [Edit:These were not used. Instead, other sounds replaced it]
const freqMap = {
  1: 261.6,   //Tutorial   
  2: 329.6,
  3: 392,
  4: 466.2,
  
  // Additional
  5: 500.0,
  6: 600.0
}

// I am keeping the freqMap for playback
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];    // Original code
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn);
  },len)
}

// Original code
/*function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}*/

// Function that stops the tone of the playback
function stopTone(btn){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    
    clueHoldTime = clueHoldTime - 40;    // Decreasing the amount of clueHoldTime
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(gamePlaying == false){
    return;
  }
  
  if(pattern[guessCounter] != btn)
  {
    mistakes--;              // Decrease the amount of chances
    document.getElementById("lives").innerHTML = mistakes + " lives";  // Displaying the new lives
    playClueSequence();      // Play the clue sequence again
    if(mistakes == 0)        // Use up 3 chances, lose the game.
    { 
      loseGame();
    }
       
  }
  
  else
  {
    if(guessCounter != progress)
    {
      guessCounter++;     
    }
    
    else
    {
      if(progress != pattern.length - 1)
      {
        progress++;
        playClueSequence();
      }
      else
      {
        winGame();  
      }
    } 
    
  }
}


// Function to generate a single random pattern
function getRandomIntInclusive(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)+min);
}


function playMyAudio(btn)
{
  switch(btn)
  {
    case 1:
      document.getElementById("myAudio1").play();
      break;
    case 2:
      document.getElementById("myAudio2").play();
      break;
    case 3:
      document.getElementById("myAudio3").play();
      break;
    case 4:
      document.getElementById("myAudio4").play();
      break;
    case 5:
      document.getElementById("myAudio5").play();
      break;
    case 6:
      document.getElementById("myAudio6").play();
      break;
  }
}


function stopMyAudio(btn){
  switch(btn)
  {
    case 1:
      var player1 = document.getElementById("myAudio1");
      player1.pause();
      player1.currentTime = 0;
      break;
    case 2:
      var player2 = document.getElementById("myAudio2");
      player2.pause();
      player2.currentTime = 0;
      break;
    case 3:
      var player3 = document.getElementById("myAudio3");
      player3.pause();
      player3.currentTime = 0;
      break;
    case 4:
      var player4 = document.getElementById("myAudio4");
      player4.pause();
      player4.currentTime = 0;
      break;
    case 5:
      var player5 = document.getElementById("myAudio5");
      player5.pause();
      player5.currentTime = 0;
      break;
    case 6:
      var player6 = document.getElementById("myAudio6");
      player6.pause();
      player6.currentTime = 0;
      break;
  }
}


// Start timer
function startTimer() {
  myVar = setInterval(testTime,1000);
}

// setInterval uses this function
function testTime(){
  // If 0 seconds, call the function to stop the time and display that you lost
  if(secondTime == 0)
   {
     stopTestTime();
     loseGame();
   }
   // Display the time and decrement the seconds
   else
   {
     
     secondTime--;
     document.getElementById("timer").innerHTML = "Timer: " + secondTime + " seconds";
   }
}

// Function that stops the timer and resets the values
function stopTestTime(){
  clearInterval(myVar);
  clueHoldTime = 1000;
  secondTime = 60;
  document.getElementById("timer").innerHTML = "Timer: " + secondTime + " seconds";
}