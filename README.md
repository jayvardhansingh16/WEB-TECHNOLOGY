# Web Technology Practicals

Hands-on practicals for the Web Technologies course (C2111C3), covering HTML page structure, CSS styling, and JavaScript interactivity. Each practical is a standalone exercise that runs directly in a web browser.

## Table of Contents

- [Practicals](#practicals)
- [Getting Started](#getting-started)
- [Repository Structure](#repository-structure)
- [Technologies Used](#technologies-used)
- [Author](#author)
- [License](#license)

## Practicals

| # | Practical | Entry file | Description |
|---|-----------|------------|-------------|
| 2 | Portfolio | `practical 2 (Portfolio).html` | Personal portfolio page with name, course details, skills, and a contact footer |
| 3 | Food Drive | `practical 3 (Food Drive).html` | Community food drive page covering why to volunteer, how to help, benefits, and a contact email |
| 4 | AI Info Web | `practical 4 (AI Info WEB)/page1.html` | Multi-page informational site with an image (`download.jpg`) and a second page (`page2.html`) |
| 5 | Commerce Department | `practical 5 (Commerce Department)/practical 5 (Commerce Departmenet).html` | Commerce department page with a linked detail page (`detail.html`) |
| 6 | Student Book Survey | `practical 6 (Student Book Survey).html` | School bookstore survey form with contact details and six survey questions |
| 7 | Schererville Soccer League | `practical 7 (Schererville Soccer League)/practical 7.html` | Soccer league page with separate CSS (`style7.css`) and JavaScript (`script7.js`) |
| 8 | Arithmetic Operations | `practical 8 (Airthmatic Operations).html` | Prompts for two numbers and displays their sum, difference, product, and quotient |
| 9 | Grow and Shrink Text | `practical 9 (shrinking text by JS).html` | Buttons that increase or decrease the font size of a heading, styled by `style9.css` |
| 10 | Login Form | `practical 10 (Login Form css & js)/practical10.html` | Login form styled with `style10.css` and scripted with `script10.js` |

### Practical Details

**Practical 6: Student Book Survey.** The form has two sections. The first collects name, address, city, ZIP code, and email. The second asks:

1. Where you usually buy books (single choice)
2. How often you buy books (dropdown)
3. What types of books you buy (multiple choice)
4. How much you spend on books (single choice, in ₹)
5. Your main reason for choosing a place to buy books (dropdown)
6. Suggestions for the school bookstore (text area)

The form has Submit and Reset buttons. It has no server-side processing, so submitted answers are not saved.

**Practical 8: Arithmetic Operations.** The page uses `prompt()` to ask for two numbers and writes the results to the page. If the second number is zero, the division result shows a message instead of a number.

**Practical 9: Grow and Shrink Text.** The heading starts at 20px. Each click on **Grow Text** adds 2px, and each click on **Shrink Text** removes 2px.

## Getting Started

No build step or dependencies are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/jayvardhansingh16/WEB-TECHNOLOGY.git
   cd WEB-TECHNOLOGY
   ```
2. Open any practical's HTML file in your browser. You can double-click the file, or run one of these commands from the repository folder:
   ```bash
   open "practical 2 (Portfolio).html"        # macOS
   xdg-open "practical 2 (Portfolio).html"    # Linux
   start "practical 2 (Portfolio).html"       # Windows
   ```

For practicals inside a folder, open the HTML file in that folder, for example `practical 7 (Schererville Soccer League)/practical 7.html`.

## Repository Structure

```
WEB-TECHNOLOGY/
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
- **CSS3** for styling
- **JavaScript** for interactive behavior

## Author

**Jayvardhan Dabhi**
Course: Web Technologies (C2111C3)
Institution: <your college name>

## License

This project is for educational purposes.
