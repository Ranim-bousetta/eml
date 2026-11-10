# El Media Lab (مختبر الإعلام)

> **Empowering SWANA Youth through Media Literacy, Critical Inquiry, and Conscious Digital Citizenship.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18n-English%20%7C%20العربية-26A69A)](https://www.i18next.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg)](#)

---

## 📖 Table of Contents

- [About the Initiative & Platform](#-about-the-initiative--platform)
- [Core Mission & Pillars](#-core-mission--pillars)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Testing & Quality Assurance](#testing--quality-assurance)
- [Key Pages & Routing](#-key-pages--routing)
- [Backend & Form Integrations](#-backend--form-integrations)
- [Deployment](#-deployment)
- [Partners & Recognition](#-partners--recognition)
- [Contact & Community](#-contact--community)

---

## 🌍 About the Initiative & Platform

**El Media Lab (EML / مختبر الإعلام)** is an independent, youth-led initiative operating at the intersection of media literacy, technology, and society in the **SWANA** (South West Asia and North Africa) region.

At a time when misinformation proliferates rapidly and trust in legacy media is strained, El Media Lab addresses one central question:  
> *"How do we create more informed, critical, and resilient societies?"*

What began as a student-led response to information challenges has developed into an award-winning project recognized across the region and internationally. Core members have pitched and presented their work at competitive conferences in Austria, Egypt, Germany, Hungary, Lebanon, and the Czech Republic, uniting over 100 journalists, researchers, technologists, and students to co-create locally grounded and globally relevant solutions.

This repository hosts the official **El Media Lab web application**, providing an interactive digital hub where youth, researchers, educators, and journalists can explore projects, access digital rights guides, read thought leadership articles, and get involved.

---

## 🎯 Core Mission & Pillars

Our work centers on three primary pillars:

1. **Media & Information Literacy (MIL)**  
   Designing and delivering accessible training programs, toolkits, and learning modules that equip young people, journalists, and civil society actors with critical thinking tools to analyze news, verify digital content, and counter online manipulation.
2. **Research & Knowledge Dissemination**  
   Publishing and spotlighting grounded, context-aware research on regional media systems, information disorder, and digital rights—bridging the gap between academic findings and public action through roundtables, policy briefs, and digital campaigns.
3. **Innovation & Digital Tools**  
   Experimenting with emerging technology (including artificial intelligence) to construct tools promoting safer, more inclusive online environments, specifically tailored to Arabic dialects and North African linguistic contexts.

---

## ✨ Key Features

- **🌐 Full Bilingual Support (English & Arabic with RTL/LTR):** Seamless language switching powered by `i18next`, featuring Arabic font pairings and automatic layout direction adaptation.
- **🎨 Engaging & Modern Design:** Styled with Tailwind CSS, custom design tokens, and smooth entrance/scroll animations using `motion` (Framer Motion).
- **🛡️ Interactive Digital Rights & Verification Guide:** A practical checklist of "DOs" and "DON'Ts" helping digital citizens verify news, safeguard privacy, and combat online harassment.
- **📂 Interactive Projects Showcase:**
  - Dynamic listing of past and active initiatives.
  - Project detail modals and standalone pages with photo galleries, participant highlights, and impact metrics.
  - Featured initiatives: *Bridging Gaps in Arab Media* (Beirut), *Media Spring Workshop* (Tunis), and the *Anti-Xenophobic Speech Action Brief*.
- **✍️ Blog & Articles:** In-depth essays and reflections from youth fellows and practitioners (such as ICANN NextGen internet governance insights).
- **📬 Functional Contact & Collaboration System:** Interactive form with client-side validation, category selection, and file attachment handling (JPG/PDF up to 20MB) integrated with a Google Apps Script endpoint.
- **🤝 Infinite Partner Marquee:** Dynamic logo & partner showcase featuring regional and global supporters.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) with `@vitejs/plugin-react-swc` for fast compilations and HMR
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Data State:** [TanStack React Query v5](https://tanstack.com/query/latest)

### UI & Styling
- **CSS Framework:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **UI Components:** [Radix UI](https://www.radix-ui.com/) accessible primitives (via shadcn/ui pattern)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Motion & Animations:** [Motion](https://motion.dev/) (`motion/react`)
- **Typography:** Custom font pairing (`Co Headline` / `Cairo` for headers and `Co Text` / `Cairo` for body)

### Localization & Forms
- **Localization:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- **Forms & Validation:** `react-hook-form` + `zod`
- **Notifications:** `sonner` and Radix Toast

### Testing & Tooling
- **Unit Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **End-to-End Testing:** [Playwright](https://playwright.dev/)
- **Linting:** [ESLint 9](https://eslint.org/) with TypeScript support

---

## 📁 Project Structure

```text
eml-main/
├── information/              # Source documentation, PDF summaries, and project background
│   ├── Past Projects _ المشاريع المنقضاة.pdf
│   └── Who are we_ _ من نحن.pdf
├── public/                   # Static assets, favicon, robot declarations
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/               # Blog and publication imagery
├── src/
│   ├── assets/               # Local images, illustrations, and project galleries
│   │   ├── anti-xenophobic/  # Images for Anti-Xenophobic project
│   │   ├── bridging-gaps/    # Images for Bridging Gaps workshop
│   │   ├── spring-workshop/  # Images for Spring Workshop
│   │   └── logo.png          # El Media Lab brand logo
│   ├── components/           # Reusable feature and layout components
│   │   ├── ui/               # Radix UI and shadcn-based design system components
│   │   ├── About.tsx         # Mission, vision, and organizational pillars
│   │   ├── CTASection.tsx    # Call to action section
│   │   ├── CurrentProjects.tsx
│   │   ├── DigitalRightsGuide.tsx # Interactive DOs and DON'Ts guide
│   │   ├── Footer.tsx        # Footer with links, social handles, and contact
│   │   ├── Hero.tsx          # Hero banner with headlines and CTAs
│   │   ├── Navbar.tsx        # Responsive navigation bar with language switcher
│   │   ├── Partners.tsx      # Infinite scrolling partner marquee
│   │   └── ScrollManager.tsx # Automatic scroll restoration across route changes
│   ├── data/                 # Static content and structured data models
│   │   └── blogPosts.ts      # Blog post data, translations, and metadata
│   ├── hooks/                # Custom React hooks (e.g., use-mobile, use-toast)
│   ├── lib/                  # Utility functions (e.g., clsx/tailwind-merge helper)
│   ├── pages/                # Route page components
│   │   ├── Index.tsx         # Main landing page
│   │   ├── About.tsx
│   │   ├── Projects.tsx      # Projects archive page
│   │   ├── ProjectDetail.tsx # Detailed view of individual projects with gallery
│   │   ├── Blog.tsx          # Blog and knowledge hub
│   │   ├── BlogDetail.tsx    # Full article view
│   │   ├── Contact.tsx       # Get involved / contact form with upload support
│   │   └── NotFound.tsx      # 404 handler
│   ├── test/                 # Test setups and unit tests
│   ├── App.tsx               # Root component with providers and router
│   ├── i18n.ts               # Translation dictionaries (EN / AR) and configuration
│   ├── index.css             # Base styles, CSS variables, and typography rules
│   └── main.tsx              # Application entry point
├── components.json           # shadcn/ui configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── playwright.config.ts      # E2E test configuration
├── tailwind.config.ts        # Tailwind theme colors, container, and animation config
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # SPA route redirects for deployment
└── vite.config.ts            # Vite configuration (server port: 8080, path aliases)
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended)
- A package manager of your choice:
  - **npm** (comes bundled with Node.js)
  - **bun** (compatible lockfile `bun.lockb` included)
  - **pnpm** or **yarn**

Verify your Node version:
```bash
node -v
npm -v
```

### Installation

Clone the repository and install the dependencies:

```bash
# 1. Navigate to the project directory
cd eml-main

# 2. Install dependencies with npm
npm install

# Alternatively, if you use Bun:
bun install

# Or using pnpm:
pnpm install
```

### Running the Development Server

Start Vite in development mode:

```bash
npm run dev
# or: bun run dev / pnpm run dev
```

By default, the Vite development server starts at:
```text
http://localhost:8080/
```

Open your browser and navigate to `http://localhost:8080` to view the website. Hot Module Replacement (HMR) is enabled, so changes in `src/` will instantly reflect in the browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to be deployed to any static web hosting provider.

To preview the production build locally:
```bash
npm run preview
```

### Testing & Quality Assurance

- **Run unit tests:**
  ```bash
  npm run test
  ```
- **Run unit tests in watch mode:**
  ```bash
  npm run test:watch
  ```
- **Run linter:**
  ```bash
  npm run lint
  ```
- **Run end-to-end tests (Playwright):**
  ```bash
  npx playwright test
  ```

---

## 🗺️ Key Pages & Routing

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Index.tsx` | Landing page featuring Hero, Partners, About summary, Digital Rights Guide, and CTA. |
| `/projects` | `Projects.tsx` | Directory of past workshops, research briefs, and ongoing initiatives with preview modals. |
| `/projects/:id` | `ProjectDetail.tsx` | Dedicated project case study page with full gallery, highlights, and partner credits. |
| `/blog` | `Blog.tsx` | Knowledge hub featuring articles on internet governance, fact-checking, and youth media. |
| `/blog/:id` | `BlogDetail.tsx` | Individual blog post view with bilingual reading options and social links. |
| `/contact` | `Contact.tsx` | Inquiry and collaboration submission form with file upload support (up to 20MB). |
| `*` | `NotFound.tsx` | Fallback 404 page with navigation to return home. |

---

## 🔌 Backend & Form Integrations

The **Contact & Get Involved** page (`/contact`) is connected to a serverless **Google Apps Script Web App** backend.

- **Workflow:**
  1. The user inputs their name, email, topic/reason for inquiry, and message.
  2. The user can optionally upload an attachment (`.jpg`, `.jpeg`, `.pdf` up to 20MB).
  3. The client converts the attachment into Base64 format and sends a `POST` request to the Google Apps Script endpoint.
  4. The script logs the inquiry and routes it directly to the team's inbox without requiring a separate Node.js server.

---

## ☁️ Deployment

The project is structured as a client-side Single Page Application (SPA).

### Deploying to Vercel
A `vercel.json` file is already included with rewrite rules ensuring all client-side routes redirect to `index.html`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
Simply connect your repository to Vercel or deploy via the CLI:
```bash
npx vercel
```

### Deploying to Netlify / GitHub Pages / Static Hosts
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- If using Netlify or an Apache/Nginx web server, configure an SPA fallback rule (e.g. `/* -> /index.html 200` in `_redirects`).

---

## 🤝 Partners & Recognition

El Media Lab works in close collaboration with academic institutions, international organizations, and civil society partners:

- **Middle East Partnership Initiative (MEPI)** — Awarded El Media Lab the **1st-Place Community Service Award** in June 2024 for work on countering xenophobic hate speech.
- **American University of Beirut (AUB)** — Center for Community Engagement (CCE) & Asfari Institute.
- **Amideast Tunisia** & **The American Corner Tunis**.
- **DW Akademie** (International Media Development).
- **Solutions Journalism Network (SJN)**.
- **Room2Be** (Community & Mentoring Platform).

---

## 📬 Contact & Community

- **Email:** [elmedialab@gmail.com](mailto:elmedialab@gmail.com)
- **Instagram:** [@elmedia_lab](https://www.instagram.com/elmedia_lab/)
- **Facebook:** [El Media Lab Facebook](https://www.facebook.com/profile.php?id=100092296554280)
- **LinkedIn:** [El Media Lab LinkedIn](https://www.linkedin.com/company/elmedia-lab/)

---

*Together, let's build more transparent, critical, and resilient SWANA information ecosystems.*
