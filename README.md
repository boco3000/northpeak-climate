<p align="center">
  <a href="https://northpeak-climate.vercel.app"><strong>Live Demo</strong></a>
  ·
  <a href="#overview"><strong>Overview</strong></a>
  ·
  <a href="#pages"><strong>Pages</strong></a>
  ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a>
  ·
  <a href="#getting-started"><strong>Run Locally</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App%20Router-000000?logo=nextdotjs&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel&logoColor=white" />
</p>

<h1 align="center">NorthPeak Climate</h1>

<p align="center">
  <strong>Modern HVAC service website</strong> built with Next.js and Tailwind CSS.<br/>
  Designed as a realistic small-business website with strong calls-to-action, responsive layout, and SEO-ready structure.
</p>

---

# Live Demo

https://northpeak-climate.vercel.app

---

# Overview

NorthPeak Climate is a fictional HVAC service company website created to demonstrate how a modern home-service business website can be structured and implemented using a component-based frontend architecture.

The project focuses on:

* Clean UI design for service businesses
* Conversion-focused page structure
* Reusable component architecture
* SEO-ready metadata and OpenGraph previews
* Responsive design for mobile and desktop

This type of site is representative of real projects built for local service companies such as HVAC, plumbing, electrical, and home maintenance businesses.

---

# Pages

### Home

* Background hero with service CTA
* Service preview cards
* Service process overview
* Customer reviews section

### About

* Company overview
* Service philosophy
* Core business values
* Service area highlights

### Services

* Filterable services grid
* Category-based color coding
* Detailed service cards

### Contact

* Service request form
* Service pre-selection from services page
* Business contact details and hours

---

# Tech Stack

| Category      | Tools                             |
| ------------- | --------------------------------- |
| Framework     | Next.js (App Router)              |
| Language      | TypeScript                        |
| Styling       | Tailwind CSS                      |
| Deployment    | Vercel                            |
| Form Handling | Formspree                         |
| Metadata      | Next.js Metadata API              |
| SEO           | OpenGraph + Local Business Schema |

---

# Key Features

* Fully responsive layout
* Dark/light theme support
* Mobile navigation with animated menu
* Service filtering UI
* Reusable component architecture
* Structured data for local business SEO
* Social sharing previews with OpenGraph image
* Contact form with service prefill

---

# Project Structure

```
src
 ├── app
 │   ├── about
 │   ├── contact
 │   ├── services
 │   ├── layout.tsx
 │   └── page.tsx
 │
 ├── components
 │   ├── Navbar
 │   ├── Footer
 │   ├── Button
 │   ├── ServiceCard
 │   ├── ServicesGrid
 │   ├── ImagePanel
 │   ├── Section
 │   └── FormField
 │
 ├── data
 │   └── services.ts
 │
 └── styles
     └── globals.css
```

---

# Getting Started

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Visit:

```
http://localhost:3000
```

---

### Production build

```
npm run build
npm start
```

---

# Deployment

This project is configured for deployment on **Vercel**.

Steps:

1. Push repository to GitHub
2. Import project in Vercel
3. Deploy using default Next.js settings

---

# Future Improvements

Possible enhancements for a production deployment:

* Appointment scheduling
* Google Reviews integration
* Blog or resource section
* CMS integration
* Service area landing pages for SEO

---

# Author

**Bo Cochran**

Frontend developer focused on building modern web applications and service-business websites using React and Next.js.
