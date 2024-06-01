# Pig Game

## Project Overview

Pig Game is a two-player dice game implemented using HTML, CSS, and JavaScript with DOM manipulation. The game allows players to roll a die and accumulate points, with the goal of being the first to reach 100 points. The game logic includes handling rolls, holding, and switching turns when certain conditions are met.

## Game Rules

1. The game has two players, Player 1 and Player 2, who take turns.
2. On a player's turn, they can either:
   - **Roll the die**: If the die roll is not 1, the number rolled is added to the player's current score. The player can continue to roll until they roll a 1 or decide to hold.
   - **Hold**: The player's current score is added to their total score, and their turn ends.
3. If a player rolls a 1, their current score is reset to 0, and their turn ends, passing the turn to the other player.
4. The first player to reach 100 points on their total score wins the game.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

```
/project-root
│
├── /images
│   ├── die-1.png
│   ├── die-2.png
│   ├── die-3.png
│   ├── die-4.png
│   ├── die-5.png
│   └── die-6.png
│
├── index.html
├── style.css
└── script.js
```

## Screenshots

### Initial Condition
![image](https://github.com/itSarthak/js-learning-projects/assets/113413415/d4d546a8-6cc9-403b-b809-69bc12eb244e)


### While Playing
![image](https://github.com/itSarthak/js-learning-projects/assets/113413415/7a246c28-26ce-4597-93a0-a868d2736c2f)


### Winning Condition
![image](https://github.com/itSarthak/js-learning-projects/assets/113413415/fe8cc031-5ea9-4bde-87ad-b65dfdb2f5a8)


## How to Play

You can play the game online at [Pig Game](https://pig-game-die.netlify.app/).

### Running the Game Locally

1. **Clone or download the project files** to your local machine.
    ```sh
    (https://github.com/itSarthak/js-learning-projects/3.%20Pig-Game)
    ```

2. **Navigate to the project directory**.
    ```sh
    cd "3. Pig-Game"
    ```

3. **Open `index.html` in your web browser**.

## How to Use

1. Open `index.html` in a web browser to start the game.
2. Player 1 starts and can roll the die or hold their score.
3. Use the buttons provided to roll the die or hold.
4. The game will automatically switch turns based on the rules.
5. The first player to reach 100 points wins the game.

## Learning Points

- DOM manipulation to handle game state and user interactions.
- Event handling for game actions like rolling the die and holding the score.
- CSS for styling the game interface and images.
- Basic game logic implementation in JavaScript.
