# User Stories
## Monday's Requirements
* As a CLIENT, I want to allow the user to see a random selection of three images at a time (side by side by side) so that the user will have some variety to choose from.
  * **TASK:** Display three random images on the page
  * **TASK:** Arrange the displayed images in side-by-side-by-side layout

* As a USER, I want to see properly formatted images so that the images don't distort or dimish the overall user experience.
  * **TASK:** Prepare the images using a photo editor

* As a USER, I don't want to see the same images twice in a row so that it doesn't feel like I'm voting on the same thing over and over again. 
  * **TASK:** Prevent the current set of images from being redisplayed for at least 1-round.

* As a CLIENT, I want to keep a running record of the images displayed, the number of times each image was displayed, and the total number of votes received by the user so that I can generate a report (as a LIST) after 25 votes have been captured.
  * **TASK:** Create a counter for tracking the user's voting progress (25 rounds max)
  * **TASK:** Create a solution for capturing and storing the user's voting record.
  * **TASK:** Create a solution for monitoring and recording the images being displayed.
  * **TASK:** Create a LIST that displays the voting and image data once the display counter reaches 25. 

* As a CLIENT, I want the website to feature fully tested UI/UX so that the user has a positive experience.
  * **TASK:** Fully test the code before deploying to Master
  * **TASK:** Create supporting functions that might be necessary to promote a positive UX.
  * **TASK:** Include a "Reset" button to restart the voting action (and zero out the values)
