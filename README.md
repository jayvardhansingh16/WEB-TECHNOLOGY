# Web Technology

A collection of web development work from the Web Technologies course (C2111C3). The repository includes hands-on practicals, a browser game, and a personal portfolio website, all built with HTML, CSS, and JavaScript.

## Contents

| Folder | What it contains | Start with |
|--------|------------------|------------|
| [`PRACTICALS/`](PRACTICALS) | Course practicals covering pages, forms, and JavaScript | Any `practical … .html` file |
| [`GAME/`](GAME) | Tic Tac Toe, a two-player browser game | `GAME/Tic Tac Toe/main.html` |
| [`PORTFOLIO/`](PORTFOLIO) | A personal portfolio website | `PORTFOLIO/My Portfolio Web/main.html` |

## Practicals

| # | Practical | Entry file | Description |
|---|-----------|------------|-------------|
| 2 | Portfolio | `practical 2 (Portfolio).html` | A personal page with name, course details, skills, and a contact footer |
| 3 | Food Drive | `practical 3 (Food Drive).html` | A page about a community food drive, covering why to volunteer, ways to help, and benefits |
| 4 | AI Info Web | `practical 4 (AI Info WEB)/page1.html` | A multi-page informational site with `page2.html` and an image |
| 5 | Commerce Department | `practical 5 (Commerce Department)/practical 5 (Commerce Departmenet).html` | A department page linked to a detail page (`detail.html`) |
| 6 | Student Book Survey | `practical 6 (Student Book Survey).html` | A bookstore survey form with contact fields and six questions |
| 7 | Schererville Soccer League | `practical 7 (Schererville Soccer League)/practical 7.html` | A soccer league page with its own stylesheet and script |
| 8 | Arithmetic Operations | `practical 8 (Airthmatic Operations).html` | Prompts for two numbers and displays their sum, difference, product, and quotient |
| 9 | Grow and Shrink Text | `practical 9 (shrinking text by JS).html` | Buttons that increase or decrease a heading's font size |
| 10 | Login Form | `practical 10 (Login Form css & js)/practical10.html` | A login form with its own stylesheet and script |

### Practical highlights

- **Practical 6** asks about where you buy books, how often, what types, how much you spend, and why you choose a particular store. It has Submit and Reset buttons. The form does not send data anywhere, so answers are not saved.
- **Practical 8** uses `prompt()` to ask for two numbers. If the second number is zero, the division result shows a message instead of a number.
- **Practical 9** starts the heading at 20px. Each **Grow Text** click adds 2px, and each **Shrink Text** click removes 2px.

## Tic Tac Toe

A two-player game played on one device. Player O goes first, and the first player to get three marks in a row, column, or diagonal wins.

- Winner detection for all eight winning lines
- A winner message with a **New Game** button
- A **Reset Game** button to clear the board at any time

**Known limitation:** a draw is not announced. If the board fills with no winner, use **Reset Game** to start again.

## Portfolio

A personal portfolio website with a responsive layout, a mobile navigation menu, and a typing animation in the hero section.

- Light and dark themes, with your choice saved in the browser
- Project cards linking to the practicals and the Tic Tac Toe game
- Contact links for GitHub, Instagram, LinkedIn, and email

The typing animation (Typed.js) and Google Fonts load from the internet, so you need a connection for those to work.

## Getting Started

No build step or dependencies are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/jayvardhansingh16/WEB-TECHNOLOGY.git
   cd WEB-TECHNOLOGY
   ```
2. Open any HTML file in your browser. You can double-click the file, or run one of these commands from the repository folder:
   ```bash
   open "PRACTICALS/practical 2 (Portfolio).html"       # macOS
   xdg-open "PRACTICALS/practical 2 (Portfolio).html"   # Linux
   start "PRACTICALS/practical 2 (Portfolio).html"      # Windows
   ```

Folder and file names contain spaces and parentheses, so keep the quotes when you type a path in the terminal.

## Repository Structure

```
WEB-TECHNOLOGY/
├── GAME/
│   └── Tic Tac Toe/
│       ├── app.js
│       ├── main.html
│       ├── README.md
│       └── style.css
├── PORTFOLIO/
│   └── My Portfolio Web/
│       ├── bg,png.png
│       ├── main.html
│       ├── README.md
│       ├── script.js
│       └── style.css
└── PRACTICALS/
    ├── README.md
    ├── practical 2 (Portfolio).html
    ├── practical 3 (Food Drive).html
    ├── practical 6 (Student Book Survey).html
    ├── practical 8 (Airthmatic Operations).html
    ├── practical 9 (shrinking text by JS).html
    ├── style9.css
    ├── practical 4 (AI Info WEB)/
    │   ├── download.jpg
    │   ├── page1.html
    │   └── page2.html
    ├── practical 5 (Commerce Department)/
    │   ├── detail.html
    │   └── practical 5 (Commerce Departmenet).html
    ├── practical 7 (Schererville Soccer League)/
    │   ├── practical 7.html
    │   ├── script7.js
    │   └── style7.css
    └── practical 10 (Login Form css & js)/
        ├── practical10.html
        ├── script10.js
        └── style10.css
```

## Technologies Used

- **HTML5** for page structure and forms
- **CSS3** for styling and layout
- **JavaScript** for interactivity and game logic
- **Typed.js** for the portfolio's typing animation

## Author

**Jayvardhan Dabhi**
Course: Web Technologies (C2111C3)
Institution: ITM-SLS Baroda University
GitHub: [@jayvardhansingh16](https://github.com/jayvardhansingh16)

## License

This project is for educational purposes.
