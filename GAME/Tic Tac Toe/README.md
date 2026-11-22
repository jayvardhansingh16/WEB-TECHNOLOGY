# Tic Tac Toe

A two-player Tic Tac Toe game that runs in the browser. Two players share one device and take turns clicking squares. Player O goes first.

## Features

- Two-player gameplay on one device (O and X)
- Winner detection for all eight winning lines: three rows, three columns, and two diagonals
- Winner announcement with a **New Game** button
- **Reset Game** button to clear the board at any time
- Board that scales with the browser window

## How to Play

1. Player O makes the first move.
2. Click an empty square to place your mark. Players alternate between O and X.
3. The first player to get three marks in a row, column, or diagonal wins.
4. When a player wins, a message announces the winner and the board locks. Click **New Game** to play again, or **Reset Game** at any time to clear the board.

## Getting Started

No build step or dependencies are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/jayvardhansingh16/WEB-TECHNOLOGY.git
   cd WEB-TECHNOLOGY
   ```
2. Open `main.html` from the `Tic Tac Toe` folder in your browser. You can double-click the file, or run one of these commands from inside the folder:
   ```bash
   open main.html        # macOS
   xdg-open main.html    # Linux
   start main.html       # Windows
   ```

## Project Structure

```
Tic Tac Toe/
├── main.html    # Page layout: the board, buttons, and winner message
├── style.css    # Colors, board sizing, and button styles
└── app.js       # Game logic: turns, win checking, and resetting
```

## How It Works

- **`main.html`** contains a 3×3 grid of nine buttons, each with the class `box`. It also includes the winner message panel, the **New Game** button, and the **Reset Game** button. It loads `style.css` and `app.js`.
- **`style.css`** sets the layout and colors. The `.hide` class hides the winner message until a player wins.
- **`app.js`** handles the game:
  - A `turnO` variable tracks whose turn it is.
  - Clicking a box writes "O" or "X" into it, switches the turn, and disables the box so it can't be clicked again.
  - After each move, `checkWinner()` compares the marks in each of the eight winning lines. When three matching marks are found, `showWinner()` shows the result and disables the remaining boxes.
  - `resetGame()` clears all boxes, enables them, sets the turn back to O, and hides the message.

## Known Limitations

- A draw is not announced. If all nine squares fill with no winner, the game doesn't show a message, so players need to click **Reset Game** to start again.
- Scores aren't tracked between games.

## Technologies Used

- **HTML5** for the page structure
- **CSS3** for styling and layout
- **JavaScript** for game logic (no libraries)

## Author

**Jayvardhan Dabhi**
Course: Web Technologies (C2111C3)
Institution: ITM-SLS Baroda University

## License

This project is for educational purposes.
