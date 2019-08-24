# Pac-Man maze arcade game
This is the university project. The idea is to create a classic web version of the original 1980s game, created by Toru Iwatani, using 'bold' HTML, CSS and JavaScript.
## How to Run
The game is available [here](http://ricepud.info/)
## Gameplay
The gameplay is pretty intuitive - the player navigates Pac-Man through a maze with no dead ends. The maze is filled with dots, and includes four multi-colored ghosts: Blinky, Pinky, Inky, and Clyde. There is a passageway from the left side of the screen to the right side, bonus fruits. The objective of the game is to eat all dots before ghosts take all available lives. There are regular small dots and big dots, which make ghosts blinking and egible. The player also earns points over the game: 10pts for small dot, 50pts for big dot, 200pts for a blue ghost. A stage is completed when all dots are eaten.
## Realization stages
* Stage 0: __Get to know about__ rules, gameplay, interface, etc., play Pac-Man
* Stage 1: Analyze standard algorithms, __develop own algorithm__ basing on needs and requirements.
* Stage 2: __Create game field__, mark dots and walls
* Stage 3: __Implement__ created previously __algorithm__ to develop Pac-Man and ghosts behaviour, including game-required actions(count points, eat.be eaten, etc.), testing.
* Stage 4: __Improve interface__ by adding animations(blinking, eating, audio...), testing.
* Stage 5: __Final testing__ and code review.
## Goal before pass stage 2
Go from realization stage 0 to stage 3
## What's done
All stages are completed.
In details:
* Game area - ghost's cage, walls, dots; single stage with different speed in different levels;
* Behaviour - PacMan, ghosts (chase mode);
* Score - counting points for different actions;
* PacMan animation, game area blinking, 'ghost eat mode': ghost changes color, comes back to cage when eaten, comes back to game area; lives; loading; game stages(ready, go); 

## To be done
Fruits rendering;

