<video src="https://github.com/user-attachments/assets/b21b1a0e-b9bd-498e-bf5f-856c70357fab
"  controls autoplay loop muted playsinline></video>

# Webdrive

Webdrive is a personal cloud dashboard that lets users store and organize **code snippets, files, links, notes, and images** in one place. Built with React and Firebase, it provides a fast, authenticated workspace for managing personal digital content from any browser.

## Overview

Webdrive centers around a protected dashboard where signed-in users can create, view, and manage five types of content — Codes, Files, Links, Notes, and Images — each with its own dedicated page and creation flow. Authentication and data storage are handled through Firebase (Auth, Firestore, and Storage).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Authentication](#authentication)
- [Security Notes](#security-notes)
- [License](#license)

## Features

- **Authentication** — Email/password and Google sign-in via Firebase Auth
- **Protected Dashboard** — Route-guarded workspace accessible only to signed-in users
- **Code Snippets** — Save and view code with syntax highlighting (Monaco Editor + Highlight.js)
- **File Storage** — Upload and manage files via drag-and-drop (React Dropzone)
- **Links & Notes** — Save reference links and personal notes
- **Image Gallery** — Upload and browse images
- **Search** — Quickly locate saved content
- **Theming** — Light/dark accessibility toggle (Redux-managed state)
- **Responsive UI** — Built with Tailwind CSS

## Tech Stack

| Layer                    | Technology                                    |
|----------------------------|--------------------------------------------------|
| Front End                   | React 18, React Router 6                          |
| State Management            | Redux Toolkit                                      |
| Styling                      | Tailwind CSS, PostCSS                              |
| Code Editor / Highlighting     | Monaco Editor, Highlight.js                       |
| File Uploads                  | React Dropzone                                    |
| Backend / Data                 | Firebase (Authentication, Firestore, Storage)     |
| Notifications                   | React Toastify                                    |
| Build Tooling                    | Vite                                              |
| Linting                           | ESLint                                            |

## Project Structure

```
webdrive/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
├── public/
│   ├── logo_icon.png
│   └── vite.svg
│
└── src/
    ├── App.jsx                     # Route definitions & auth state listener
    ├── main.jsx                    # App entry point
    ├── App.css / index.css
    │
    ├── Components/
    │   ├── Header.jsx
    │   ├── Layout.jsx               # Protected dashboard layout
    │   ├── Model.jsx
    │   ├── Profile.jsx
    │   ├── Search.jsx
    │   ├── SideBar.jsx
    │   ├── AddCreate/               # Creation forms (Codes, Files, Images, Links, Notes)
    │   ├── ModelComponents/         # Modal building blocks
    │   └── Outletcomponents/        # Content list views per category
    │
    ├── pages/
    │   ├── Homepage.jsx
    │   ├── SignIn.jsx
    │   ├── SignUp.jsx
    │   ├── CodePage.jsx
    │   ├── FilesPage.jsx
    │   ├── ImagePage.jsx
    │   ├── LinkPage.jsx
    │   └── NotesPage.jsx
    │
    ├── firebase/
    │   ├── firebaseConfig.js
    │   ├── authService.js
    │   ├── submitServices.js
    │   └── fetchDeleteDataServices.js
    │
    ├── appstore/
    │   ├── store.js
    │   └── reducers/
    │       ├── userSlice.js
    │       └── accesblity.js
    │
    └── assets/
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (includes npm)
- A [Firebase](https://firebase.google.com/) project with Authentication, Firestore, and Storage enabled

### Installation

```bash
git clone <repository-url>
cd webdrive
npm install
```

### Running Locally

```bash
npm run dev
```

Vite will start a local development server and print the local URL (typically `http://localhost:5173`).

### Building for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Environment Variables

Create a `.env` file in the project root with your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

These values are available in your Firebase project settings under **Project Settings → General → Your apps**.

## Available Scripts

| Command             | Description                                  |
|-----------------------|--------------------------------------------------|
| `npm run dev`          | Starts the Vite development server                |
| `npm run build`         | Builds the app for production                     |
| `npm run preview`        | Serves the production build locally                |
| `npm run lint`            | Runs ESLint across the project                     |

