// ------------------------------------------------------------------------------------------------------------
// SCRIPT INFORMATION
// ------------------------------------------------------------------------------------------------------------
// Script:        Bus Mall Scripts
// Description:   JavaScript code for the CF 201d36 Bus Mall website
// Author:        Ben Harris
// Author URI:    http://www.harrishills.com
// Tags:          Code Fellows, 201, Practice, Lab, Website

// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// Libraries
// var Chart = require('chart.js');

// Global Variables
var myGlobals = {
  imgReel: document.getElementById('genImgReel'),
  displayCount: document.getElementById('displayCount'),
  listResults: document.getElementById('genList'),
  voteCount: 25,
  imgDisplay: 6,
  myImages: [], // stores a reference to all objects created
  imgQueue: [],
  // imgSelection: [],
};

// ------------------------------------------------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Object constructor for new images
function myImg (filename, friendlyname, votesReceived, timesDisplayed, currentImage, hasBeenDisplayed) {
  this.filename = filename;
  this.friendlyname = friendlyname;
  this.votesReceived = votesReceived;
  this.timesDisplayed = timesDisplayed;
  this.currentImage = currentImage;
  this.hasBeenDisplayed = hasBeenDisplayed;

  // Store a reference to each new instance in a global 'myImages' array
  myGlobals.myImages.push(this);
}

// ------------------------------------------------------------------------------------------------------------
// OPERATIONS
// ------------------------------------------------------------------------------------------------------------
// Create image objects
new myImg ('bag.jpg',         'R2D2 Suitcase',                  0,0, false, false);   // eslint-disable-line
new myImg ('banana.jpg',      'Banana Slicer',                  0,0, false, false);   // eslint-disable-line
new myImg ('bathroom.jpg',    'Bathroom Tablet Stand',          0,0, false, false);   // eslint-disable-line
new myImg ('boots.jpg',       'Open-Toe Rain boots',            0,0, false, false);   // eslint-disable-line
new myImg ('breakfast.jpg',   'All-in-One Breakfast Maker',     0,0, false, false);   // eslint-disable-line
new myImg ('bubblegum.jpg',   'Meatball Flavored Gum',          0,0, false, false);   // eslint-disable-line
new myImg ('chair.jpg',       'Rounded Chair',                  0,0, false, false);   // eslint-disable-line
new myImg ('cthulhu.jpg',     'Cthulhu Action Figure',          0,0, false, false);   // eslint-disable-line
new myImg ('dog-duck.jpg',    'Dog-to-Duck Converter',          0,0, false, false);   // eslint-disable-line
new myImg ('dragon.jpg',      'Dragon Meat',                    0,0, false, false);   // eslint-disable-line
new myImg ('pen.jpg',         'Silverware Pens',                0,0, false, false);   // eslint-disable-line
new myImg ('pet-sweep.jpg',   'Pet Sweep',                      0,0, false, false);   // eslint-disable-line
new myImg ('scissors.jpg',    'Pizza Scissors',                 0,0, false, false);   // eslint-disable-line
new myImg ('shark.jpg',       'Shark Sleeping Bag',             0,0, false, false);   // eslint-disable-line
new myImg ('sweep.png',       'Baby Broom Outfit',              0,0, false, false);   // eslint-disable-line
new myImg ('tauntaun.jpg',    'Taun-Taun Sleeping Bag',         0,0, false, false);   // eslint-disable-line
new myImg ('unicorn.jpg',     'Unicorn Meat',                   0,0, false, false);   // eslint-disable-line
new myImg ('usb.gif',         'Tentacle USB Drive',             0,0, false, false);   // eslint-disable-line
new myImg ('water-can.jpg',   'Self Watering Can',              0,0, false, false);   // eslint-disable-line
new myImg ('wine-glass.jpg',  'Death Star Wine Glass',          0,0, false, false);   // eslint-disable-line

// Define and render the initial image selection
imageGenerator();


// Store user votes to localStorage

// Render List

// Render Chart

// Add to localStorage

// Event Listeners
// myGlobals.displayCount.addEventListener('change', updateDisplay); // Update display count
myGlobals.imgReel.addEventListener('click', castVote); // Refresh image selection
myGlobals.imgReel.addEventListener('click', imageGenerator); // Refresh image selection
myGlobals.imgReel.addEventListener('click', voteCounter); // Refresh image selection

// ------------------------------------------------------------------------------------------------------------
// PRIMARY FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
function castVote() {

}

function imageGenerator() {
  // Clean slate!
  var imgSelection = [];
  clearNode('imgGen');

  // Generate Selection (sets CURRENT image)
  for (var imgCount = 0; imgCount < myGlobals.imgDisplay; imgCount++) {
    imgSelection.push(randomImg());
  }

  // Render Selection to DOM (no modifiers)
  for (var imgSelect = 0; imgSelect < imgSelection.length; imgSelect++) {
    imageRender(imgSelection[imgSelect]);
  }

  // Update remaining image modifiers
  for (var selection = 0; selection < myGlobals.myImages.length; selection++) {

    if (myGlobals.myImages[selection].currentImage === true && myGlobals.myImages[selection].hasBeenDisplayed === true) {
      console.log('ERROR:' + selection + '\n' + 'current: ' + myGlobals.myImages[selection].currentImage + '\n' + 'Displayed: ' + myGlobals.myImages[selection].hasBeenDisplayed);
    }

    // If previously remembered and NOT the current image...
    if (myGlobals.myImages[selection].hasBeenDisplayed === true && myGlobals.myImages[selection].currentImage === false) {
      myGlobals.myImages[selection].hasBeenDisplayed = false;
    }

    // If the current image...remember it!
    if (myGlobals.myImages[selection].currentImage === true) {
      myGlobals.myImages[selection].hasBeenDisplayed = true;
      myGlobals.myImages[selection].currentImage = false;
    }
  }
}

function imageRender(imgIndex) {
  var imgTarget = document.getElementById('imgGen');

  // Create <li> element
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');

  // Add content
  imgEl.src = 'img/' + myGlobals.myImages[imgIndex].filename;
  imgEl.name = imgIndex;
  imgEl.id = 'img'+imgIndex;
  // console.log(imgEl);

  // Append elements
  liEl.appendChild(imgEl);
  imgTarget.appendChild(liEl);
}

function renderTable() {
  console.log('Rendering table...');

  for(var index = 0; index < myGlobals.myImages.length; index++) {
    // Identify Destinations
    var tableSection = document.getElementById('tableContent');
    var tableRow = document.createElement('tr');
    var path = myGlobals.myImages[index];

    // Process Data (Filename)
    var tDataImg  = document.createElement('td');
    tDataImg.textContent = path.filename;
    tableRow.appendChild(tDataImg);

    // Process Data (Times Displayed)
    var tDataDisp = document.createElement('td');
    tDataImg.textContent = path.timesDisplayed;
    tableRow.appendChild(tDataDisp);

    // Process Data (Votes Received)
    var tDataVote = document.createElement('td');
    tDataImg.textContent = path.votesReceived;
    tableRow.appendChild(tDataVote);

    // Output to table
    tableSection.appendChild(tableRow);
  }
}

function storeData() {
  for(var index = 0; index < myGlobals.myImages.length; index++) {
    var path = myGlobals.myImages[index];
    var tempString = JSON.stringify(path);
    localStorage.setItem('Image Data', );
  }
}

function voteCounter () {
  var counter = document.getElementById('myCount');
  if (myGlobals.voteCount > 1) {
    myGlobals.voteCount--;
    counter.textContent = myGlobals.voteCount;

  } else {
    myGlobals.voteCount--;
    counter.textContent = myGlobals.voteCount;
    clearNode('genImgReel');

    // Render Table
    renderTable();

    // Render Graph
    // renderGraph();

    // Cleanup
    myGlobals.imgReel.removeEventListener('click', imageGenerator);
    myGlobals.imgReel.removeEventListener('click', voteCounter);
  }
}

// ------------------------------------------------------------------------------------------------------------
// SUPPORTING FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
function randomImg() {
  var randomIndex = NaN;
  do {
    randomIndex = myGlobals.myImages[Math.floor(Math.random() * myGlobals.myImages.length)];
    randomIndex = myGlobals.myImages.indexOf(randomIndex);
  } while (myGlobals.myImages[randomIndex].hasBeenDisplayed === true || myGlobals.myImages[randomIndex].currentImage === true); // returns only a previously unused image

  // Update selection modifiers
  myGlobals.myImages[randomIndex].timesDisplayed++;
  myGlobals.myImages[randomIndex].currentImage = true;
  return randomIndex;
}

function clearNode(myId) {
  var node = document.getElementById(myId);
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

// function renderGraph () {
//   newCanvas = document.getElementById('canvas');
// }

// function updateDisplay() {
//   myGlobals.imgDisplay = myGlobals.displayCount.value;
//   imageGenerator();
// }