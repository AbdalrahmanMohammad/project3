let numberOfSuccess = 0;
let triesElement = document.querySelector('.tries span');
let yourName = "";


// Select The Start Game Button
document.querySelector(".control-buttons span:last-child").onclick = function () {

  let nameInput = document.querySelector("#namePopup");
  let startGame = document.querySelector("#startGameBtn");
  nameInput.style.display = "flex";
  startGame.onclick = function () {
    yourName = document.querySelector("#playerNameInput").value;
    nameInput.style.display = "none";
    // If Name Is Empty
    if (yourName == null || yourName == "") {

      // Set Name To Unknown
      document.querySelector(".name span").innerHTML = 'مجهول';

      // Name Is Not Empty
    } else {

      // Set Name To Your Name
      document.querySelector(".name span").innerHTML = yourName;

    }

    // Remove Splash Screen
    document.querySelector(".control-buttons").remove();
  }


};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

  // Add CSS Order Property
  block.style.order = orderRange[index];

  // Add Click Event
  block.addEventListener('click', function () {

    // Trigger The Flip Block Function
    flipBlock(block);

  });

});

// Flip Block Function
function flipBlock(selectedBlock) {

  // Add Class is-flipped
  selectedBlock.classList.add('is-flipped');

  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If Theres Two Selected Blocks
  if (allFlippedBlocks.length === 2) {

    // console.log('Two Flipped Blocks Selected');

    // Stop Clicking Function
    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

  }

}

// Stop Clicking Function
function stopClicking() {

  // Add Class No Clicking on Main Container
  blocksContainer.classList.add('no-clicking');

  // Wait Duration
  setTimeout(() => {

    // Remove Class No Clicking After The Duration
    blocksContainer.classList.remove('no-clicking');

  }, duration);

}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {


  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    let audioSuccess = document.getElementById('success');
    audioSuccess.pause();
    audioSuccess.currentTime = 0;
    audioSuccess.play();

    numberOfSuccess++;
    if (numberOfSuccess == 10) {
      showResult(true);
    }

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    if(parseInt(triesElement.innerHTML)>30)
    {
      showResult(false);
    }

    setTimeout(() => {

      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

    }, duration);

    let audioFail = document.getElementById('fail');
    audioFail.pause();
    audioFail.currentTime = 0;  // Reset to the beginning
    audioFail.play();           // Play the audio

  }

}

// Shuffle Function
function shuffle(array) {

  // Settings Vars
  let current = array.length,
    temp,
    random;

  while (current > 0) {

    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // [1] Save Current Element in Stash
    temp = array[current];

    // [2] Current Element = Random Element
    array[current] = array[random];

    // [3] Random Element = Get Element From Stash
    array[random] = temp;

  }
  return array;
}
document.getElementById('success').playbackRate = 1.3;
document.getElementById('fail').playbackRate = 1.3;
// Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element From Stash
*/

function showResult(flag) {
  let noOfTries=parseInt(triesElement.innerHTML);
    let resultPopUp = document.querySelector(".result");
  resultPopUp.style.display = "flex";
  resultPopUp = resultPopUp.querySelector(".result-container");

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Months are zero-indexed
  let year = currentDate.getFullYear();
    let formattedDate = `${day}/${month}/${year}`;

  resultPopUp.querySelector(".date").innerHTML=formattedDate;

  if(flag)// success
  {
    resultPopUp.querySelector(".message").innerHTML=`مبروك ${yourName} لقد فزت باللعبة!`;
    resultPopUp.querySelector(".no-of-worng").innerHTML=`عدد المحاولات الخاطئة: ${noOfTries}`;
  }
  else{
    resultPopUp.querySelector(".message").innerHTML=`عذرا ${yourName} لقد تجاوزت عدد المحاولات الخاطئة المسموحة`;
    resultPopUp.querySelector(".no-of-worng").innerHTML=`عدد المحاولات الخاطئة: ${noOfTries}`;
    resultPopUp.querySelector(".share-with-us").innerHTML=`نرجو منك إعادة المحاولة`;
    resultPopUp.querySelector(".message").style.color="red";
    resultPopUp.querySelector("i").style.color="red";
    resultPopUp.querySelector("i").classList.add("fa-circle-xmark");
    resultPopUp.querySelector("i").classList.remove("fa-circle-check");
  }

}

document.querySelector(".play-again").addEventListener("click", () => {
  location.reload();
});
