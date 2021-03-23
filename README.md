# Pre-work - *Memory Game*

Test Your Memory!!! is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Peter Huynh

Time spent: 8 active hours spent in total

Link to project: (https://glitch.com/edit/#!/arrow-goldenrod-guanaco?path=README.md%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes] Game buttons each light up and play a sound when clicked. 
* [Yes] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes] User wins the game after guessing a complete pattern
* [Yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Yes] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes] More than 4 functional game buttons
* [Yes] Playback speeds up on each turn
* [Yes] Computer picks a different pattern each time the game is played
* [Yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [Yes] Game button appearance change goes beyond color (e.g. add an image)
* [Yes] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Yes] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [No] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

1.Displaying the hidden images
![](http://g.recordit.co/pJSwIpS1i8.gif) 

2. Lighting the buttons up
![](http://g.recordit.co/XhOskAf8WV.gif)

3. 3 Lives
![](http://g.recordit.co/OsSFI8dmMP.gif)

4. Timer runs out
![](http://g.recordit.co/DOMmPEjQ9O.gif)

5. Winning the game
![](http://g.recordit.co/6JVEbjxWBj.gif)

6. Testing the stop button
![](http://g.recordit.co/iAwlK1lizR.gif)

 

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.rapidtables.com/web/css/css-color.html]
[https://www.w3schools.com/csSref/css_selectors.asp]
[https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random]
[https://www.w3schools.com/jsref/met_win_setinterval.asp]
[https://programminghead.com/how-to-play-audio-in-html-using-javascript/]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

I would say that the most challenging aspect of this project was trying to adapt to switching between styles. For the most part, I did not
encounter many issues when I was working with the JavaScript area. When I worked through the HTML and CSS-styles, I was unfamiliar with their 
syntax. My knowledge of C++ and Java would sometimes conflict as I work through creating the memory game. With the use of the referenced sites 
and the very detailed walkthrough, I was able to mitigate this issue and progress at a steady pace. As practice makes perfect, more encounters 
with this type of programming will most definitely remove this issue. For the optional features, the sixth task was the most difficult for me.
I had trouble figuring out how to stop the timer from continual decreasing after the game was done. In some instances, the timer would stop, but
it would not reset properly. Eventually I did solve this issue. Other than that problem, the rest of the project was fairly easy to follow along. 
It was very fascinating to see how each piece of code was displayed in real-time. I would consider this project an excellent assignment for beginners
who would loves web programming.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I have a few questions that came up when I was working on the assignment. To begin with, how do backdoors of a website work? Also, how difficult is it for
web developers to patch these backdoors? Finally, how often do web developers from a company work as a team when completing an assignment, and how often are
assignments assigned for a single individual to complete? The reason I asked about the first two questions is because a few weeks prior, I heard that a website 
that I had often visited had been breached. Apparently, users can bypass the paid subscription by installing a third-party addon which is openly available. To 
this day, the addon is still working. Thus, I always wondered why this website’s issue still exists.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

First and foremost, what I want to do is to optimize the randomized pattern. I believe that current solution that I have is redundant and space-consuming, but I can’t figure out another solution at the moment. 
Also, I used two switch statements to differentiate between the button sounds. I also feel that this method is redundant and could be simplified even further. Lastly, I would like to further research about and 
modify the interface of the memory game. While I am a beginner at web developing, the memory game looks too dated for my liking. I would use this extra time to tinker around the html page to see if I could make 
the game visually appealing. I would consider adding visual effects whenever the player wins, loses, or gets an answer wrong. Adding an alert sound effect whenever the timer gets close to zero would be appealing as well.



## License

    Copyright Peter Huynh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
