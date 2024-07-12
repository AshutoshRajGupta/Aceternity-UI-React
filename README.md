# Aceternity-UI-React

# Aceternity UI with ReactJS Setup Guide

This guide will help you set up a ReactJS project with Aceternity UI. Follow the steps below to get started.

## Step 1: Create a React App

Create a new React application using the following command:

    npx create-react-app my-app

## Step 2: Navigate into the Project Directory

Navigate into the project directory:

    cd my-app

## Step 3: Install Tailwind CSS and Other Dependencies

Install Tailwind CSS, PostCSS, and Autoprefixer:

    npm install -D tailwindcss postcss autoprefixer

#### Explanation:

- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **autoprefixer**: A PostCSS plugin which parses your CSS and adds vendor prefixes.

## Step 4: Initialize Tailwind CSS

Run the following command to generate tailwind.config.js and

    postcss.config.js files:
    npx tailwindcss init -p

## Step 5: Configure Tailwind CSS

Add the following content to your tailwind.config.js file:

    /** @type {import('tailwindcss').Config}*/
    module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using`src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };

## Step 6: Configure CSS Files

Replace the contents of index.css with the following:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Step 7: Create a Utils Folder

In your project directory, create a " _utils_ " folder within the "_src_" directory using your file explorer.

## Step 8: Create cn.js Utility

Inside the utils folder, create a cn.js file and add the following code:

    import clsx from "clsx";
    import { twMerge } from "tailwind-merge";

    export function cn(...inputs) {
      return twMerge(clsx(...inputs));
    }

#### Note: The code for cn.js may change. Check the guide for the component you want to add on Aceternity UI's website and convert the TypeScript code into JavaScript if necessary.

## Step 9: Create Components and UI Folders

Using your file explorer, create a components folder inside the "**src**" directory. Then, create a ui folder inside the components folder. Step

## 10: Add UI Components

Add the source code from Aceternity UI's website to the ui folder. The provided code will be in .tsx format; convert it to .jsx using language models if necessary.

## Step 11: Install Dependencies

Install the dependencies mentioned in the component's guide on the Aceternity UI website.

## Step 12: Create Elements Folder

Using your file explorer, create an elements folder inside the components folder. Add the desired element's code into an **<element_name>**.jsx file within the elements folder.

#### Note: The code will be typescript on the website convert it to .jsx.

## Step 13: Replace Imports from Next.js

#### Remove any imports from the source code and elements that reference next modules and replace them with React equivalents:

For Example:

- **next/image ---> No import needed; replace all instances of Image with img.**
- **next/link ----> `import { Link } from 'react-router-dom';`**

## Step 14: Correct Import Paths(Important)

Ensure that all import paths in your files (e.g., cn.js, component files, element files) are correct.

## Step 15: Render the Element

Make the necessary imports to render the element.

## Step 16: Install React Router

Install react-router-dom and update index.js:

    npm install react-router-dom

#### Update index.js as follows:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import { BrowserRouter } from 'react-router-dom';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(`<BrowserRouter>`
      `<App />`
    `</BrowserRouter>`
    );

## Step 17: Start the Application

Run the application (terminal):

    npm start

#### You have successfully set up your React application with Aceternity UI.

Enjoy building your UI components!
