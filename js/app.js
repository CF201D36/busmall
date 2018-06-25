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

// Global Variables
var myGlobals = {
  imgReel: document.getElementById('genImgReel'),
  displayCount: document.getElementById('displayCount'),
  voteCount: 25,
  imgDisplay: 0,
  myImages: [],
  imgQueue: [],
  // imgSelection: [],
};

// ------------------------------------------------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Object constructor for new images
function myImg (filename, friendlyname, votesReceived, timesDisplayed) {
  this.filename = filename;
  this.friendlyname = friendlyname;
  this.votesReceived = votesReceived;
  this.timesDisplayed = timesDisplayed;

  // Store a reference to each new instance in a global 'myImages' array
  myGlobals.myImages.push(this);
}

// ------------------------------------------------------------------------------------------------------------
// METHODS
// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------
// OPERATIONS
// ------------------------------------------------------------------------------------------------------------
// Create image objects
new myImg ('bag.jpg',         'R2D2 Suitcase',                  0,0);   // eslint-disable-line
new myImg ('banana.jpg',      'Banana Slicer',                  0,0);   // eslint-disable-line
new myImg ('bathroom.jpg',    'Bathroom Tablet Stand',          0,0);   // eslint-disable-line
new myImg ('boots.jpg',       'Open-Toe Rain boots',            0,0);   // eslint-disable-line
new myImg ('breakfast.jpg',   'All-in-One Breakfast Maker',     0,0);   // eslint-disable-line
new myImg ('bubblegum.jpg',   'Meatball Flavored Gum',          0,0);   // eslint-disable-line
new myImg ('chair.jpg',       'Rounded Chair',                  0,0);   // eslint-disable-line
new myImg ('cthulhu.jpg',     'Cthulhu Action Figure',          0,0);   // eslint-disable-line
new myImg ('dog-duck.jpg',    'Dog-to-Duck Converter',          0,0);   // eslint-disable-line
new myImg ('dragon.jpg',      'Dragon Meat',                    0,0);   // eslint-disable-line
new myImg ('pen.jpg',         'Silverware Pens',                0,0);   // eslint-disable-line
new myImg ('pet-sweep.jpg',   'Pet Sweep',                      0,0);   // eslint-disable-line
new myImg ('scissors.jpg',    'Pizza Scissors',                 0,0);   // eslint-disable-line
new myImg ('shark.jpg',       'Shark Sleeping Bag',             0,0);   // eslint-disable-line
new myImg ('sweep.png',       'Baby Broom Outfit',              0,0);   // eslint-disable-line
new myImg ('tauntaun.jpg',    'Taun-Taun Sleeping Bag',         0,0);   // eslint-disable-line
new myImg ('unicorn.jpg',     'Unicorn Meat',                   0,0);   // eslint-disable-line
new myImg ('usb.gif',         'Tentacle USB Drive',             0,0);   // eslint-disable-line
new myImg ('water-can.jpg',   'Self Watering Can',              0,0);   // eslint-disable-line
new myImg ('wine-glass.jpg',  'Death Star Wine Glass',          0,0);   // eslint-disable-line

// Set the total number of images to be displayed
myGlobals.imgDisplay = 3;

// Define and render the initial image selection
imageGenerator();


// Store user votes to localStorage

// Restore images from imgQueue array into myImages array
reloadImgSet();

// Render List

// Render Chart

// Add to localStorage

// Event Listeners
myGlobals.displayCount.addEventListener('click', updateDisplay); // Update display count
myGlobals.imgReel.addEventListener('click', imageRefresher); // Refresh image selection
myGlobals.imgReel.addEventListener('click', imageRefresher); // Refresh image selection


// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
function updateDisplay() {
  myGlobals.imgDisplay = myGlobals.displayCount.Value;
  clearNode('imgGen');
  imageGenerator();
}

function imageRefresher() {
  
  clearNode('imgGen');
  imageGenerator();
}

function imageGenerator() {
  for (var imgCount = 0; imgCount < myGlobals.imgDisplay; imgCount++) {
    console.log(imgCount);
    var imgSelection = randomImg();
    imageRender(imgSelection);
  }
}

function randomImg() {
  var randomIndex = myGlobals.myImages[Math.floor(Math.random() * myGlobals.myImages.length)];
  randomIndex = myGlobals.myImages.indexOf(randomIndex);
  // console.log(randomIndex);
  return randomIndex;
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
  console.log(imgEl);

  // Append elements
  liEl.appendChild(imgEl);
  imgTarget.appendChild(liEl);

  // Add current image object to imgQueue array
  console.log(myGlobals.myImages[imgIndex]);
  myGlobals.imgQueue.push(myGlobals.myImages[imgIndex]);

  // Remove current image object from myImages array
  myGlobals.myImages.splice(imgIndex, 1);
}




function clearNode(myId) {
  var node = document.getElementById(myId);
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

function voteCounter () {
  if (myGlobals.voteCount > 0) {
    myGlobals.voteCount--;
    var counter = document.getElementById('myCount');
    counter.textContent = myGlobals.voteCount;
  }
}

function reloadImgSet () {
  console.log('Funciton ran!');
  while(myGlobals.imgQueue.length > 0) {
    var restoreImg = myGlobals.imgQueue.pop(myGlobals.imgQueue[0]);
    myGlobals.myImages.push(restoreImg); 
  }
}