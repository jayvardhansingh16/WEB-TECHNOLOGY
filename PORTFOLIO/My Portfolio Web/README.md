# Jayvardhan Dabhi | Portfolio

A personal portfolio website for **Jayvardhan Dabhi**, B.Tech CSE (AI-ML) student at ITM-SLS Baroda University. It presents my education, skills, web practicals, and a game project, along with ways to get in touch.

Built with plain HTML, CSS, and JavaScript. There is no build step and no framework.

## Features

- **Responsive layout** that works on desktop and mobile
- **Mobile navigation menu** that opens and closes with a button, the Escape key, or a click outside the menu
- **Typing animation** in the hero section, powered by [Typed.js](https://github.com/mattboldt/typed.js)
- **Light and dark themes** with a floating toggle button. Your choice is saved in the browser.
- **Project cards** linking to each web practical and the Tic Tac Toe game
- **Contact section** with GitHub, Instagram, LinkedIn, and email links
- **Accessible** with labeled buttons, keyboard focus styles, and support for reduced-motion preferences

## Sections

| Section | Description |
|---------|-------------|
| Home | Introduction, typing animation, and buttons to view projects or get in touch |
| About | Education, a short summary, and a list of skills and interests |
| Projects | Creations |
| Contact | Links to GitHub, Instagram, LinkedIn, and email |

## Projects Showcased

The Projects section showcases projects I have created using HTML, CSS, JavaScript, PHP, and XML. It covers:

- Creating web pages and multi-page sites with HTML
- Styling layouts and content with CSS
- Building forms and handling user input
- Adding interactivity with JavaScript and the DOM
- Creating a simple browser game with win detection and a reset option
- Working with PHP and XML

## Getting Started

No build step or dependencies are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/jayvardhansingh16/<repo-name>.git
   cd <repo-name>
   ```
2. Open `main.html` in your browser. You can double-click the file, or run one of these commands from the project folder:
   ```bash
   open main.html        # macOS
   xdg-open main.html    # Linux
   start main.html       # Windows
   ```

The typing animation and the Google Fonts load from the internet, so you need a connection for those to work.

### Publishing with GitHub Pages

1. Rename `main.html` to `index.html`. GitHub Pages looks for `index.html` by default.
2. Push the repository to GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, and choose the `/ (root)` folder.
5. Click **Save**. Your site will be available at `https://jayvardhansingh16.github.io/<repo-name>/` after a short wait.

## Project Structure

```
.
├── bg,png.png     # Hero image
├── main.html      # Page structure and content
├── script.js      # Theme toggle, typing animation, and mobile menu
└── style.css      # Styles, themes, and responsive layout
```

## How It Works

- **`main.html`** holds all the content: the navigation bar, the hero section, the about and project cards, and the contact links. It loads `style.css` and `script.js`.
- **`style.css`** defines the colors for both themes using CSS variables. Setting `data-theme="light"` on the `<html>` element switches the page to the light theme. Media queries adjust the layout for smaller screens.
- **`script.js`** does three things:
  - **Theme toggle:** switches the theme and saves the choice in `localStorage`. The saved theme is also applied before the page loads, so the page doesn't flash the wrong theme.
  - **Typing animation:** cycles through the job titles shown in the hero section.
  - **Mobile menu:** opens and closes the navigation on small screens.

## Customizing

- **Your details:** edit the text in `main.html`, including your name, education, skills, and contact links.
- **Typing titles:** edit the `strings` array in `script.js`.
- **Colors:** change the variables at the top of `style.css`.
- **Projects:** copy an `<article class="card">` block in `main.html` and update its title, description, tags, and link.

## Technologies Used

- **HTML5** for page structure
- **CSS3** for styling, themes, and responsive design
- **JavaScript** for interactivity
- **Typed.js** for the typing animation
- **Google Fonts** for typography

## Author

**Jayvardhan Dabhi**
B.Tech CSE (AI-ML), ITM-SLS Baroda University
GitHub: [@jayvardhansingh16](https://github.com/jayvardhansingh16)

## License

This project is for personal and educational use. © 2026 Jayvardhan Dabhi.
