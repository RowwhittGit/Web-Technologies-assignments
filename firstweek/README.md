# HTML Assignment - Coursework

This repository contains solutions to 4 HTML exercises covering fundamental HTML concepts.

## Assignment Overview

This assignment demonstrates proficiency in:
- Basic HTML structure and elements
- HTML forms with various input types
- HTML tables with advanced features
- Semantic HTML5 elements for better page structure

## Exercises Included

### Exercise 1: Simple Web Page
**File:** `ex1.html`

Creates a basic webpage featuring:
- Page title and multiple heading levels (h1, h2, h3)
- Multiple paragraphs of text content
- Unordered list with multiple items
- Ordered list with step-by-step content
- External hyperlink to Google
- Embedded image from the web

### Exercise 2: HTML Form
**File:** `ex2.html`

Builds a user registration form with:
- Text input field for user's name
- Radio buttons for gender selection (Male, Female, Other)
- Checkboxes for favorite hobbies (Reading, Gaming, Sports, Music)
- Textarea for additional comments
- Submit button
- Proper labels for all form elements

### Exercise 3: HTML Tables
**File:** `ex3.html`

Creates an organized data table featuring:
- Table heading row with 5 columns
- Multiple data rows with student information
- Cell merging using colspan and rowspan
- Border styling for clarity
- Table caption describing the table's purpose
- Table footer with summary information

### Exercise 4: Semantic HTML5 Elements
**File:** `ex4.html`

Demonstrates semantic HTML structure with:
- `<header>` section with page title and description
- `<nav>` navigation bar with site links
- `<article>` sections containing blog content
- `<aside>` sidebar with related content and widgets
- `<footer>` with contact information and copyright
- HTML comments explaining each section's purpose

## Project Structure

```
html-assignment/
│
├── ex1.html          # Exercise 1 - Simple Web Page
├── ex2.html          # Exercise 2 - HTML Form
├── ex3.html          # Exercise 3 - HTML Tables
├── ex4.html          # Exercise 4 - Semantic HTML
├── nav.html          # Shared navigation component (reference)
└── README.md         # This file
```

## How to Run

### Option 1: Direct Browser Access (Easiest)
1. Clone or download this repository to your local machine
2. Navigate to the project folder
3. Double-click any of the HTML files (`ex1.html`, `ex2.html`, `ex3.html`, or `ex4.html`)
4. The file will open in your default web browser
5. Use the navigation bar at the top to switch between exercises

### Option 2: Using VS Code Live Server
1. Open the project folder in Visual Studio Code
2. Install the "Live Server" extension (if not already installed)
3. Right-click on any HTML file
4. Select "Open with Live Server"
5. The page will open in your browser with auto-refresh on save

### Option 3: Using Python Simple HTTP Server
```bash
# Navigate to the project directory
cd html-assignment

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open your browser and go to `http://localhost:8000`

## Navigation

All exercises include a navigation bar at the top that allows you to easily switch between different exercises without closing the browser. Simply click on "Exercise 1", "Exercise 2", "Exercise 3", or "Exercise 4" to view the respective page.

## Technologies Used

- HTML5
- Semantic HTML elements
- HTML Forms
- HTML Tables

## Notes

- All HTML files are standalone and can be viewed independently
- No CSS styling has been applied yet (classes are in place for future styling)
- Images are loaded from external sources (internet connection required)
- Forms use `action="#"` which means they won't submit anywhere (for demonstration purposes)

## Future Enhancements

- Add CSS styling for better visual presentation
- Add JavaScript for form validation
- Make the design responsive for mobile devices
- Add animations and transitions

## Author

Backend Developer - College Coursework

## License

This is a college assignment project for educational purposes.