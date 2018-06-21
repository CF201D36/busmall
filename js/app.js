// ------------------------------------------------------------------------------------------------------------
// SCRIPT INFORMATION
// ------------------------------------------------------------------------------------------------------------
// Script:        Bus Mall Scripts
// Description:   JavaScript code for the CF 201d36 Bus Mall website
// Author:        Ben Harris
// Author URI:    http://www.harrishills.com
// Tags:          Code Fellows, 201, Practice, Lab, Website

// ------------------------------------------------------------------------------------------------------------
// PROJECT GOALS
// ------------------------------------------------------------------------------------------------------------
// -- MONDAY REQUIREMENTS --
// 1. Create a photo object
// 2. Create a random photo selection function/method that chooses 3 random images to display and temporarily
//    stores them in an array so that they are prevented from being displayed during the next set.
// 3. Create an EventListener to capture the user's input (25 rounds), and store their votes for later display.
// 4. Create a list (for now) to display the user's voting record after the user votes 25 times.


// A. Refactor to use object constructor
// B. Setup myGlobals to provide on-going reference to image objects

// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// Global Variables
var myGlobals = {
  imgDisplay: 0,
  myImages: [],
  imgQueue: [],
  // imgSelection: [],
};

// ------------------------------------------------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Object constructor for new images
function myImg (filename, friendlyname) {
  this.filename = filename;
  this.friendlyname = friendlyname;

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
new myImg ('bag.jpg',         'R2D2 Suitcase');                 // eslint-disable-line
new myImg ('banana.jpg',      'Banana Slicer');                 // eslint-disable-line
new myImg ('bathroom.jpg',    'Bathroom Tablet Stand');         // eslint-disable-line
new myImg ('boots.jpg',       'Open-Toe Rain boots');           // eslint-disable-line
new myImg ('breakfast.jpg',   'All-in-One Breakfast Maker');    // eslint-disable-line
new myImg ('bubblegum.jpg',   'Meatball Flavored Gum');         // eslint-disable-line
new myImg ('chair.jpg',       'Rounded Chair');                 // eslint-disable-line
new myImg ('cthulhu.jpg',     'Cthulhu Action Figure');         // eslint-disable-line
new myImg ('dog-duck.jpg',    'Dog-to-Duck Converter');         // eslint-disable-line
new myImg ('dragon.jpg',      'Dragon Meat');                   // eslint-disable-line
new myImg ('pen.jpg',         'Silverware Pens');               // eslint-disable-line
new myImg ('pet-sweep.jpg',   'Pet Sweep');                     // eslint-disable-line
new myImg ('scissors.jpg',    'Pizza Scissors');                // eslint-disable-line
new myImg ('shark.jpg',       'Shark Sleeping Bag');            // eslint-disable-line
new myImg ('sweep.png',       'Baby Broom Outfit');             // eslint-disable-line
new myImg ('tauntaun.jpg',    'Taun-Taun Sleeping Bag');        // eslint-disable-line
new myImg ('unicorn.jpg',     'Unicorn Meat');                  // eslint-disable-line
new myImg ('usb.gif',         'Tentacle USB Drive');            // eslint-disable-line
new myImg ('water-can.jpg',   'Self Watering Can');             // eslint-disable-line
new myImg ('wine-glass.jpg',  'Death Star Wine Glass');         // eslint-disable-line

// Set the total number of images to be displayed
myGlobals.imgDisplay = 3;

// Render the initial image selection
for (var imgCount = 0; imgCount < myGlobals.imgDisplay; imgCount++) {
  var imgSelection = randomImg();
  imageRender(imgSelection);
}

// Vote event Handler

// Restore images from imgQueue array into myImages array
while(myGlobals.imgQueue.length > 0) {
  var restoreImg = myGlobals.imgQueue.pop(myGlobals.imgQueue[0]);
  myGlobals.myImages.push(restoreImg);  
}

// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
function imageRender(imgIndex) {
  var imgTarget = document.getElementById('imgGen');

  // Create <li> element
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + myGlobals.myImages[imgIndex].filename;
  liEl.appendChild(imgEl);
  imgTarget.appendChild(liEl);

  // Add current image object to imgQueue array
  // console.log(myGlobals.myImages[imgIndex]);
  myGlobals.imgQueue.push(myGlobals.myImages[imgIndex]);

  // Remove current image object from myImages array
  myGlobals.myImages.splice(imgIndex, 1);
}

function randomImg() {
  var randomIndex = myGlobals.myImages[Math.floor(Math.random() * myGlobals.myImages.length)];
  randomIndex = myGlobals.myImages.indexOf(randomIndex);
  // console.log(randomIndex);
  return randomIndex;
}