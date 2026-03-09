# RoboDash - Competition Management System 

RoboDash is a real-time, dual-window competition leaderboard system built with React, Vite, and Tailwind CSS. It is designed for robotics events, offering an Admin Panel for data entry. The two windows data entry and leaderboard sync instantly in real-time.

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your system.

### Installation
1. Extract or clone the project folder.
2. Open a terminal in the project folder root.
3. Run the following command to install all required packages:
   ```bash
   npm install
   ```

### Running in Development Mode
To start the application locally with hot-reloading:
```bash
npm run dev
```
Open the URL provided in the terminal (usually `http://localhost:5173`) in your browser.

---

## Building for Production (Packaging)

When you are ready to deploy the app or run it as a highly optimized static site:

1. **Build the Project:**
   ```bash
   npm run build
   ```
   *This command will bundle the React application into static files located in the `dist` folder.*

2. **Preview the Build Locally:**
   ```bash
   npm run preview
   ```
   *This allows you to test the production build locally before uploading it to a server.*

3. **Deploy:**
   You can take the contents of the `dist` folder and upload them to any static hosting service (like GitHub Pages, Vercel, Netlify, or your own Apache/Nginx web server).

---

## Customization Guide

You can easily adapt this scoreboard for different events by changing the branding.

### 1. Changing the Logo
- **Location:** `public/logo.jpg`
- **Action:** Replace the existing `logo.jpg` file in the `public` folder with your own image. Ensure it is named exactly `logo.jpg`. (For best results, use a logo with a dark or transparent background, though the system uses CSS `invert` for contrast).

### 2. Changing the App Name & Tagline
The text is hardcoded into the React components. To change "RoboDash", "DRAIC", or "Innovate • Iterate • Conquer":
- **Landing Page (`src/App.jsx`)**: Search for `ROBODASH` and customize the related `<h1>` and `<p>` tags.
- **Leaderboard Header (`src/components/board/Leaderboard.jsx`)**: Search for `ROBODASH` around line 50. You can also change the tagline `Innovate • Iterate • Conquer` there.
- **PDF Export (`src/utils/pdfGenerator.js`)**: Search for `ROBODASH - DRAIC` around line 52 to update the PDF header text.

### 3. Changing the Theme Colors
- The project uses **Tailwind CSS**. If you want to change the primary accent colors (currently Cyan/Blue/Purple gradients), search the `className` attributes in `src/App.jsx` and `src/components/board/Leaderboard.jsx` for terms like `from-cyan-400 via-blue-500 to-purple-600` and replace them with standard Tailwind colors (e.g., `from-emerald-400 via-green-500 to-teal-600`).

---

## User Guide: How the Score Board Works

*(Recommendation: Take screenshots of your running app and save them in a folder called `docs/` to replace these image placeholders)*

### 1. The Landing Page
When you open the app, you will arrive at the landing page. It provides quick access to the two main components of the system.
`[Insert Screenshot Here: Landing Page showing Admin Panel and Leaderboard buttons]`
- **Action:** Click "Admin Panel" to securely manage the event. Click "Leaderboard" to open the audience view.

### 2. Dual-Window Setup
The system is designed to run on two screens simultaneously.
`[Insert Screenshot Here: Split screen showing Admin on left, Leaderboard on right]`
- Keep the **Admin Panel** open on the operator's laptop.
- Drag the **Leaderboard** tab to an extended display, TV, or projector.
- **Magic:** Any change made in the Admin Panel instantly appears on the Leaderboard!

### 3. Using the Admin Dashboard (`/admin`)
This is where the event manager inputs data.
`[Insert Screenshot Here: Admin Dashboard showing the Competition form and Participant list]`
- **Sidebar (Competitions):** Create different categories (e.g., "Line Follower", "Robo Wars"). Set the name, scoring type (Time + Penalties), and the penalty value in seconds.
- **Main Area (Participants):** Select a competition from the sidebar, then click "Add Participant".
  - Enter the Team Name.
  - Enter their raw time (MM:SS).
  - Enter the number of penalties they received.
  - Set their status to **ACTIVE**, **COMPLETED**, or **DISQUALIFIED**.
- **PDF Export:** Click the "Export PDF" button to download a spreadsheet of the selected competition's results.

### 4. The Live Leaderboard (`/board`)
This is the audience-facing view.
`[Insert Screenshot Here: Leaderboard showing ranked teams with neon cyberpunk theme]`
- **Tabs:** The top header contains tabs for all active competitions.
- **Ranking Engine:** Teams are automatically sorted. The calculation is `Total Time = Base Time + (Penalties * Penalty Value)`.
- **Status Indicators:** 
  - Top 3 teams get special colorful row highlights.
  - Active teams have a blinking blue dot.
  - Disqualified teams are moved to the bottom and struck through.
- **Animations:** As scores are updated from the Admin panel, the rows will smoothly animate and swap positions.
- **PDF Export:** Judges or audience members can download the current standings using the download icon in the top right.

