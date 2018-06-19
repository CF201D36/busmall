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

// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// ------------------------------------------------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Assets
var assets = {
  myImg: [0,1,2],
  imgSet: [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
  ],
  imgQueue: [],
};

// ------------------------------------------------------------------------------------------------------------
// METHODS
// ------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------
// OPERATIONS
// ------------------------------------------------------------------------------------------------------------
// Randomize photos on button click -- send myImg[n] through randomizer (foreach)

imageRender(assets.myImg[0],assets.myImg[1],assets.myImg[2]);

// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
function imageRender(num1, num2, num3) {
  var imgTarget1 = document.getElementById('img1');
  var imgTarget2 = document.getElementById('img2');
  var imgTarget3 = document.getElementById('img3');

  var img1 = document.createElement('img');
  img1.src = 'img/' + assets.imgSet[num1];
  imgTarget1.appendChild(img1);

  var img2 = document.createElement('img');
  img2.src = 'img/' + assets.imgSet[num2];
  imgTarget2.appendChild(img2);

  var img3 = document.createElement('img');
  img3.src = 'img/' + assets.imgSet[num3];
  imgTarget3.appendChild(img3);

  // Push used images into assets.imgQueue array for temporary holding
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}